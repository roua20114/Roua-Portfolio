import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";
import type { MouseEvent } from "react";

const accents = [
  "linear-gradient(135deg, oklch(0.7 0.28 300), oklch(0.6 0.25 270))",
  "linear-gradient(135deg, oklch(0.75 0.22 240), oklch(0.7 0.2 200))",
  "linear-gradient(135deg, oklch(0.7 0.25 320), oklch(0.75 0.22 260))",
];

function ProjectCard({
  project,
  i,
}: {
  project: { name: string; desc: string; tech: readonly string[] };
  i: number;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [10, -10]), { damping: 20, stiffness: 200 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-10, 10]), { damping: 20, stiffness: 200 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="relative group"
    >
      <div className="glass-strong rounded-3xl overflow-hidden shadow-glass">
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ background: accents[i % accents.length] }}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[8rem] font-display font-bold text-white/20 select-none">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
          <motion.div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">{project.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag, ti) => (
              <span key={ti} className="text-xs glass rounded-full px-3 py-1 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useI18n();
  return (
    <Section id="projects">
      <SectionHeader kicker={t.projects.kicker} title={t.projects.title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((p, i) => (
          <ProjectCard key={i} project={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
