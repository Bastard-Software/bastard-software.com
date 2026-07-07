"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

const CONTACT_EMAIL = "mateusz.bahyrycz@bastard-software.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Name
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            placeholder="Jane Kowalski"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
            placeholder="you@hospital.org"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Message
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          placeholder="Tell us about your hospital, research group, or what you're building."
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
      >
        Send message
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
