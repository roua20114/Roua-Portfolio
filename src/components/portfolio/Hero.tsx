import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ArrowDown, FileText } from "lucide-react";

function Typewriter({ words }: { words: readonly string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === word) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => i + 1);
        return;
      }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[1em] ml-1 bg-primary align-middle animate-pulse" />
    </span>
  );
}

function RevealText({ text, className = "" }: { text: string; className?: string }) {
  const letters = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {letters.map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: 60, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.8 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ transformPerspective: 800 }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-hero grid-bg overflow-hidden pt-24"
    >
      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--neon-purple)" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40"
          style={{ background: "var(--neon-blue)" }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/70"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{ opacity: [0, 1, 0], y: ["100%", "-10%"] }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.hero.tagline}
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-[0.95]">
          <RevealText text={t.hero.title} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="text-xl md:text-3xl font-display font-medium h-12 mb-12"
        >
          <Typewriter words={t.hero.roles} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-neon px-8 py-4 font-semibold text-primary-foreground shadow-glass hover:scale-105 transition-transform"
          >
            <span className="relative z-10">{t.hero.explore}</span>
            <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-semibold hover:scale-105 transition-transform"
          >
            <FileText className="w-4 h-4" />
            {t.hero.cv}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
