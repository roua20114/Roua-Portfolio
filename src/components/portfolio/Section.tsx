import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4"
      >
        — {kicker} —
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-32 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
