import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden md:block rounded-full bg-neon mix-blend-screen"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hover ? 1.8 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
        style={{ width: 12, height: 12 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] hidden md:block rounded-full border border-primary/50"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hover ? 1.6 : 1,
          opacity: hover ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.6 }}
        style={{ width: 40, height: 40 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[1] rounded-full blur-3xl"
        animate={{ x: pos.x - 200, y: pos.y - 200 }}
        transition={{ type: "spring", damping: 40, stiffness: 80 }}
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, oklch(0.7 0.28 300 / 0.15), transparent 70%)",
        }}
      />
    </>
  );
}
