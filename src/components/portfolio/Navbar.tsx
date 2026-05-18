import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";
import { Moon, Sun } from "lucide-react";

const langs: Lang[] = ["en", "fr", "ar"];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className={`mx-auto max-w-6xl px-4 md:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 md:px-6 py-3 ${scrolled ? "glass-strong shadow-glass" : "glass"}`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
            <span className="text-gradient">RZ</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full glass px-1 py-1 text-xs">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="relative px-3 py-1 uppercase tracking-wider font-medium"
                >
                  {lang === l && (
                    <motion.span
                      layoutId="lang-pill"
                      className="absolute inset-0 rounded-full bg-neon"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span
                    className={`relative ${lang === l ? "text-primary-foreground" : "text-muted-foreground"}`}
                  >
                    {l}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setLight((v) => !v)}
              className="rounded-full glass p-2 hover:scale-110 transition"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={light ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  className="block"
                >
                  {light ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
