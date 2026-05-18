import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";
import { Send, Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact">
      <SectionHeader kicker={t.contact.kicker} title={t.contact.title} />
      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">{t.contact.body}</p>
          <div className="space-y-3">
            {[
              { Icon: Mail, label: "rouazarrad2017@gmail.com", href: "mailto:rouazarrad2017@gmail.com" },
              {
                Icon: MapPin,
                label: "Sousse, Tunisia",
                href: "https://www.google.com/maps/search/?api=1&query=Tunis%2C+Tunisia",
              },
              {
                Icon: Github,
                label: "github.com/roua20114",
                href: "https://github.com/roua20114",
              },
              {
                Icon: Linkedin,
                label: "linkedin.com/in/roua-zarrad",
                href: "https://linkedin.com/in/roua-zarrad",
              },
              {
                Icon: Phone,
                label: "+216 50 367 794",
                href: "+216 50 367 794",
              },
            ].map(({ Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target={href?.startsWith("mailto:") ? undefined : "_blank"}
                rel={href?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="glass rounded-2xl px-4 py-3 flex items-center gap-3 text-sm hover:shadow-lg transition-shadow block"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="underline-offset-2">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 glass-strong rounded-3xl p-8 shadow-glass space-y-5"
        >
          {[
            { name: "name", type: "text", placeholder: t.contact.name },
            { name: "email", type: "email", placeholder: t.contact.email },
          ].map((f) => (
            <div key={f.name} className="relative">
              <input
                required
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/60"
              />
            </div>
          ))}
          <textarea
            required
            rows={4}
            name="message"
            placeholder={t.contact.message}
            className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/60 resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-neon px-6 py-4 font-semibold text-primary-foreground inline-flex items-center justify-center gap-2 shadow-glass hover:shadow-[0_0_40px_var(--neon-purple)] transition-shadow"
          >
            <Send className="w-4 h-4" />
            {sent ? t.contact.sent : t.contact.send}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}
