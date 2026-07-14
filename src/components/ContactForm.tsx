"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const CONTACT_EMAIL = "mateusz.bahyrycz@bastard-software.com";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${t.contactForm.subjectPrefix} ${name || t.contactForm.subjectVisitor}`
    );
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t.contactForm.name}
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            placeholder={t.contactForm.namePlaceholder}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t.contactForm.email}
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            placeholder={t.contactForm.emailPlaceholder}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        {t.contactForm.message}
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          placeholder={t.contactForm.messagePlaceholder}
        />
      </label>
      <button
        type="submit"
        className="btn-primary mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
      >
        {t.contactForm.submit}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
