import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";
import { Code2, Database, Sparkles } from "lucide-react";

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about">
      <SectionHeader kicker={t.about.kicker} title={t.about.title} />
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2"
        >
          <div className="relative aspect-[4/5] glass-strong rounded-3xl overflow-hidden shadow-glass animate-float">
            <div className="absolute inset-0 bg-neon opacity-30" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0">
              <img
                src="src/assets/roua.jpg"
                alt="Roua Zarrad"
                className="w-full h-full object-cover opacity-80 select-none"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white/95 shadow-lg">
              <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for projects
              </div>
              <div className="font-display font-semibold text-white">Roua Zarrad</div>
              <div className="text-xs text-white/80">Sousse</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-3 space-y-8"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.about.body}</p>
          <div className="grid grid-cols-3 gap-4">
            {t.about.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { Icon: Code2, label: "Clean Code" },
              { Icon: Database, label: "Scalable APIs" },
              { Icon: Sparkles, label: "Crafted UI" },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
