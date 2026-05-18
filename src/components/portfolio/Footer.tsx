import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative py-10 px-6 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
          <span className="text-gradient font-display font-semibold">Roua Zarrad</span>
        </div>
        <div>{t.footer}</div>
      </motion.div>
    </footer>
  );
}
