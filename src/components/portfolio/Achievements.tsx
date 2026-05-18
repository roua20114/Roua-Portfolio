import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Achievements() {
  const { t } = useI18n();
  return (
    <Section id="achievements">
      <SectionHeader kicker={t.achievements.kicker} title={t.achievements.title} />
      <div className="grid md:grid-cols-3 gap-6">
        {t.achievements.items.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="relative glass-strong rounded-3xl p-8 text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-neon opacity-0 group-hover:opacity-15 transition-opacity" />
            <div className="absolute -inset-px rounded-3xl bg-neon opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
            <div className="relative">
              <div className="text-5xl mb-4">{a.icon}</div>
              <h3 className="text-lg font-display font-semibold mb-1">{a.title}</h3>
              <div className="text-sm text-muted-foreground">{a.body}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
