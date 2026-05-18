import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience">
      <SectionHeader kicker={t.experience.kicker} title={t.experience.title} />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="space-y-12">
          {t.experience.items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: left ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[direction:rtl]"}`}
              >
                <div
                  className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:[direction:ltr] md:pl-12"}`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-strong rounded-3xl p-6 shadow-glass relative group"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-neon opacity-0 group-hover:opacity-10 transition" />
                    <div className="relative">
                      <div className="text-xs uppercase tracking-widest text-primary mb-2">
                        {it.date}
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-1">{it.role}</h3>
                      <div className="text-sm text-muted-foreground mb-3">{it.org}</div>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">{it.body}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-neon animate-pulse-glow z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
