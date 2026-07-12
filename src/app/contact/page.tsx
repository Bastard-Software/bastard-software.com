import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bastard Software — hospitals, research partners, and investors welcome.",
};

export default function ContactPage() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={<span className="text-gradient">Let&apos;s talk</span>}
              description="Whether you're a hospital exploring a pilot, a researcher interested in the platform, or an investor — we'd like to hear from you."
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
                Kraków, Poland — built for hospitals worldwide
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
