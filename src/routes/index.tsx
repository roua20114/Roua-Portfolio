import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Cursor } from "@/components/portfolio/Cursor";
import { Intro } from "@/components/portfolio/Intro";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingCV } from "@/components/portfolio/FloatingCV";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roua Zarrad" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Roua Zarrad — Full-Stack Java Developer crafting scalable digital experiences with Spring Boot, React, and AI.",
      },
      { property: "og:title", content: "Roua Zarrad" },
      {
        property: "og:description",
        content: "A digital journey through code, passion and impact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Intro />
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <FloatingCV />
    </LanguageProvider>
  );
}
