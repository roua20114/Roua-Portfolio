import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills">
      <SectionHeader kicker={t.skills.kicker} title={t.skills.title} />
      <div className="grid md:grid-cols-3 gap-6">
        {t.skills.groups.map((g, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass-strong rounded-3xl p-6 shadow-glass"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-5">{g.name}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, si) => (
                <motion.span
                  key={si}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + si * 0.04 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="glass rounded-full px-4 py-2 text-sm cursor-default hover:bg-neon hover:text-primary-foreground hover:shadow-[0_0_24px_var(--neon-purple)] transition-all"
                  data-cursor-hover
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
