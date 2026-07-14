"use client";

import { Mail, MapPin } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={<span className="text-gradient">{t.contact.title}</span>}
              description={t.contact.desc}
            />
            <div className="mt-10 space-y-4">
              <a
                href="mailto:mateusz.bahyrycz@bastard-software.com"
                className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent-strong"
              >
                <Mail className="h-5 w-5 text-accent-strong" />
                mateusz.bahyrycz@bastard-software.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-5 w-5 text-accent-strong" />
                {t.contact.location}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
