import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

const dict = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tagline: "A Digital Journey — Code, Passion, Impact",
      title: "Roua Zarrad",
      subtitle: "Crafting Scalable Digital Experiences",
      roles: [
        "Full-Stack Developer",
        "Java & Spring Boot Specialist",
        "API Architect",
        "UI Craftsperson",
      ],
      explore: "Explore My Work",
      cv: "View CV",
    },
    about: {
      kicker: "Who I Am",
      title: "Building bridges between ideas and code",
      body: "Full-stack Java Developer with strong experience in building scalable web applications using Spring Boot, RESTful services, and modern frontend technologies. Skilled in full software development lifecycle, from design to deployment. Passionate about enterprise application development and continuous improvement.",
      stats: [
        { v: "6+", l: "Years of Experience" },
        { v: "15+", l: "Projects Shipped" },
        { v: "3", l: "International Awards" },
      ],
    },
    experience: {
      kicker: "The Journey",
      title: "Experience Timeline",
      items: [
        {
          role: " Part-Time Teacher",
          org: "Higher Institute of Computer Science and Communication Technologies",
          date: "2025 — 2026",
          body: "Supervision of practical lab sessions in the Java programming language for undergraduate students.",
        },
        {
          role: "Full-Stack developer Intern",
          org: "ARSII",
          date: "2024",
          body: "Development of an intelligent e-learning application, enabling teachers to manage their courses and create online exams.",
        },
        {
          role: "Full-Stack developer Intern",
          org: "PROXYM-IT",
          date: "2023",
          body: "Development of a recommendation application, designed to help managers assign developers to new projects based on their skills and professional background.",
        },
        {
          role: "Full-Stack developer Intern",
          org: "IT Gate Group",
          date: "2022",
          body: "Design and development of a recruitment platform.",
        },
        {
          role: "Full-Stack developer Intern",
          org: "PROXYM-IT",
          date: "2022",
          body: "Development of a web-based employee management application.",
        },
        
      ],
    },
    skills: {
      kicker: "Toolbox",
      title: "Skills & Stack",
      groups: [
        {
          name: "Backend",
          items: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "REST"],
        },
        {
          name: "Frontend",
          items: ["Angular", "TypeScript"],
        },
        { name: "Tools", items: ["Git", "Figma", "Microsoft Office","Google Workspace", "CI/CD", "Agile/Scrum"] },
      ],
    },
    projects: {
      kicker: "Selected Work",
      title: "Cinematic Showcase",
      items: [
        {
          name: "E-Learning Intelligent Platform",
          desc: "Adaptive learning paths powered by AI recommendations and real-time analytics.",
          tech: ["Spring Boot", "Angular", "Python ML", "MongoDB"],
        },
       
        {
          name: "Recruitment Platform",
          desc: "End-to-end hiring suite with ATS, candidate ranking and embedded video interviews.",
          tech: ["Angular", "Spring Boot", "PostgreSQL"],
        },
         {
          name: "PhotoShop Posters ",
          desc: "",
          tech: ["Photoshp"],
        },
      ],
    },
    achievements: {
      kicker: "Highlights",
      title: "Moments that defined the path",
      items: [
        { icon: "🏆", title: "Tunisia IOT & AI Challenge", body: "National Winner" },
        { icon: "🌍", title: "GITEX Dubai", body: "Global Semi-finalist" },
        { icon: "⭐", title: "Digital Entrepreneurship in the Service of Industry 4.0", body: "Global Winner" },
      ],
    },
    contact: {
      kicker: "Get In Touch",
      title: "Let's build something together",
      body: "Open to collaborations, freelance projects and full-time roles. Drop a message — I reply within 24 hours.",
      name: "Your name",
      email: "Your email",
      message: "Tell me about your project",
      send: "Send Message",
      sent: "Message sent. Talk soon ✦",
    },
    footer: "Designed & engineered with care. © 2026 Roua Zarrad.",
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      tagline: "Un voyage numérique — Code, Passion, Impact",
      title: "Roua Zarrad",
      subtitle: "Créer des expériences numériques à grande échelle",
      roles: [
        "Développeuse Full-Stack",
        "Spécialiste Java & Spring Boot",
        "Architecte API",
        "Artisane UI",
      ],
      explore: "Découvrir mes projets",
      cv: "Voir le CV",
    },
    about: {
      kicker: "Qui suis-je",
      title: "Construire des ponts entre idées et code",
      body: "Développeur Full-Stack Java avec une solide expérience dans la création d’applications web évolutives utilisant Spring Boot, les services RESTful et les technologies frontend modernes. Compétent dans l’ensemble du cycle de vie du développement logiciel, de la conception au déploiement. Passionné par le développement d’applications d’entreprise et l’amélioration continue.",
      stats: [
        { v: "6+", l: "Années d'expérience" },
        { v: "15+", l: "Projets livrés" },
        { v: "3", l: "Prix internationaux" },
      ],
    },
    experience: {
      kicker: "Le parcours",
      title: "Chronologie",
      items: [
        {
          role: "Enseignant à temps partiel",
          org: "Institut Supérieur d’Informatique et des Technologies de Communication",
          date: "2025 — 2026",
          body: "Encadrement des séances de travaux pratiques en langage de programmation Java pour les étudiants en licence.",
        },
        {
          role: "Stagiaire Développeuse Full-Stack",
          org: "ARSII",
          date: "2024",
          body: "Développement d’une application intelligente d’e-learning permettant aux enseignants de gérer leurs cours et de créer des examens en ligne.",
        },
        {
          role: "Stagiaire Développeur Full-Stack",
          org: "PROXYM-IT",
          date: "2023",
          body: "Développement d’une application de recommandation conçue pour aider les managers à affecter des développeurs à de nouveaux projets selon leurs compétences et leur parcours professionnel.",
        },
        {
          role: "Stagiaire Développeur Full-Stack",
          org: "IT Gate Group",
          date: "2022",
          body: "Conception et développement d’une plateforme de recrutement.",
        },
        {
          role: "Stagiaire Développeur Full-Stack",
          org: "PROXYM-IT",
          date: "2022",
          body: "Développement d’une application web de gestion des employés.",
        },
      ],
    },
    skills: {
      kicker: "Boîte à outils",
      title: "Compétences & Stack",
      groups: [
        {
          name: "Backend",
          items: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "REST", "GraphQL"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        },
        { name: "Outils", items: ["Docker", "Kubernetes", "Git", "Figma", "AWS", "CI/CD"] },
      ],
    },
    projects: {
      kicker: "Sélection",
      title: "Vitrine cinématique",
      items: [
        {
          name: "Plateforme Intelligente d’E-Learning",
          desc: "Parcours d’apprentissage adaptatifs alimentés par des recommandations IA et des analyses en temps réel.",
          tech: ["Spring Boot", "Angular", "Python ML", "MongoDB"],
        },
        {
          name: "Plateforme de recrutement",
          desc: "Suite complète de recrutement avec ATS, classement des candidats et entretiens vidéo intégrés.",
          tech: ["Angular", "Spring Boot", "PostgreSQL"],
        },
        {
          name: "Affiches Photoshop",
          desc: "",
          tech: ["Photoshop"],
        },
      ],
    },
    achievements: {
      kicker: "Moments forts",
      title: "Les jalons du parcours",
      items: [
        { icon: "🏆", title: "Tunisia IOT & AI Challenge", body: "Vainqueur national" },
        { icon: "🌍", title: "GITEX Dubai", body: "Demi-finaliste mondial" },
        { icon: "⭐", title: "Entrepreneuriat numérique au service de l’Industrie 4.0", body: "Vainqueur mondial" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Construisons quelque chose ensemble",
      body: "Ouverte aux collaborations, projets freelance et postes à temps plein. Réponse sous 24 heures.",
      name: "Votre nom",
      email: "Votre email",
      message: "Parlez-moi de votre projet",
      send: "Envoyer le message",
      sent: "Message envoyé. À bientôt ✦",
    },
    footer: "Conçu & développé avec soin. © 2026 Roua Zarrad.",
  },
  ar: {
    nav: {
      about: "نبذة",
      experience: "الخبرة",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    hero: {
      tagline: "رحلة رقمية — كود، شغف، أثر",
      title: "روى الزراد",
      subtitle: "صياغة تجارب رقمية قابلة للتوسع",
      roles: [
        "مطوّرة Full-Stack",
        "متخصصة Java و Spring Boot",
        "مهندسة واجهات API",
        "صانعة واجهات",
      ],
      explore: "اكتشف أعمالي",
      cv: "عرض السيرة",
    },
    about: {
      kicker: "من أنا",
      title: "أبني جسوراً بين الفكرة والكود",
      body: "مطور Full-Stack Java يتمتع بخبرة قوية في بناء تطبيقات ويب قابلة للتوسع باستخدام Spring Boot والخدمات RESTful وتقنيات الواجهة الأمامية الحديثة. متمكن من جميع مراحل دورة حياة تطوير البرمجيات، من التصميم إلى النشر. شغوف بتطوير تطبيقات المؤسسات والتحسين المستمر.",
      stats: [
        { v: "+3", l: "سنوات خبرة" },
        { v: "+15", l: "مشروع منجز" },
        { v: "2", l: "جوائز دولية" },
      ],
    },
    experience: {
      kicker: "الرحلة",
      title: "محطات الخبرة",
      items: [
        {
          role: "أستاذ بدوام جزئي",
          org: "المعهد العالي للإعلامية وتكنولوجيات الاتصال",
          date: "2025 — 2026",
          body: "الإشراف على حصص الأعمال التطبيقية في لغة البرمجة Java لطلبة الإجازة.",
        },
        {
          role: "متدرب مطور Full-Stack",
          org: "ARSII",
          date: "2024",
          body: "تطوير تطبيق ذكي للتعليم الإلكتروني يتيح للأساتذة إدارة الدروس وإنشاء الامتحانات عبر الإنترنت.",
        },
        {
          role: "متدرب مطور Full-Stack",
          org: "PROXYM-IT",
          date: "2023",
          body: "تطوير تطبيق توصيات مصمم لمساعدة المدراء في إسناد المطورين إلى المشاريع الجديدة بناءً على مهاراتهم وخبراتهم المهنية.",
        },
        {
        role: "متدرب مطور Full-Stack",
        org: "IT Gate Group",
        date: "2022",
        body: "تصميم وتطوير منصة توظيف.",
        },
        {
          role: "متدرب مطور Full-Stack",
          org: "PROXYM-IT",
          date: "2022",
          body: "تطوير تطبيق ويب لإدارة الموظفين.",
        },
      ],
    },
    skills: {
      kicker: "صندوق الأدوات",
      title: "المهارات والتقنيات",
      groups: [
        {
          name: "Backend",
          items: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "REST", "GraphQL"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        },
        { name: "أدوات", items: ["Docker", "Kubernetes", "Git", "Figma", "AWS", "CI/CD"] },
      ],
    },
    projects: {
      kicker: "مختارات",
      title: "عرض سينمائي",
      items: [
        {
          name: "منصة تعليم إلكتروني ذكية",
          desc: "مسارات تعلم تكيفية مدعومة بتوصيات الذكاء الاصطناعي وتحليلات فورية.",
          tech: ["Spring Boot", "Angular", "Python ML", "MongoDB"],
        },
        {
          name: "منصة توظيف",
          desc: "منصة متكاملة للتوظيف تتضمن ATS وترتيب المرشحين ومقابلات فيديو مدمجة.",
          tech: ["Angular", "Spring Boot", "PostgreSQL"],
        },
        {
          name: "ملصقات فوتوشوب",
          desc: "",
          tech: ["Photoshop"],
        },
      ],
    },
    achievements: {
      kicker: "أبرز اللحظات",
      title: "محطات صنعت المسار",
      items: [
        { icon: "🏆", title: "Tunisia IOT & AI Challenge", body: "الفائز الوطني" },
        { icon: "🌍", title: "GITEX Dubai", body: "نصف نهائي عالمي" },
        { icon: "⭐", title: "ريادة الأعمال الرقمية في خدمة الصناعة 4.0", body: "الفائز العالمي" },,
      ],
    },
    contact: {
      kicker: "تواصل",
      title: "لنبنِ شيئاً معاً",
      body: "مرحّبة بالتعاون والمشاريع الحرة والوظائف الدائمة. أردّ خلال 24 ساعة.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "أخبرني عن مشروعك",
      send: "إرسال",
      sent: "تم الإرسال. إلى اللقاء ✦",
    },
    footer: "صُمّم وطُوّر بعناية. © 2026 روى الزراد.",
  },
} as const;

type Dict = typeof dict.en;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: dict.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
