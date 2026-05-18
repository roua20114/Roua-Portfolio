import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { FileText } from "lucide-react";
import cvPdf from "@/assets/RouaZarrad-CV.pdf";

export function FloatingCV() {
  const { t } = useI18n();
  return (
    <motion.a
      href={cvPdf}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, type: "spring", damping: 20, stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-neon px-5 py-3 font-semibold text-primary-foreground animate-pulse-glow"
    >
      <FileText className="w-4 h-4" />
      <span className="hidden sm:inline">{t.hero.cv}</span>
    </motion.a>
  );
}
