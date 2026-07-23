"use client";

import Image from "next/image";
import { Stethoscope, Cpu, Users, Target } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const teamMeta = [
  { photo: "/team/mateusz_bahyrycz.jpg", photoFit: "object-contain" },
  { photo: "/team/rafal_nojek.jpg", photoFit: "object-cover" },
  { photo: "/team/krystian_budek.jpg", photoFit: "object-cover" },
];

const thesisIcons = [Target, Stethoscope, Cpu, Users];

export default function AboutContent() {
  const { t } = useLanguage();
  const team = t.about.team.map((person, i) => ({ ...person, ...teamMeta[i] }));
  const thesisCards = t.about.thesisCards.map((card, i) => ({
    ...card,
    icon: thesisIcons[i],
  }));

  return (
    <>
      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={
              <>
                {t.about.titlePre}{" "}
                <span className="text-gradient">{t.about.titleGradient}</span>
              </>
            }
            description={t.about.desc}
          />
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center gap-6 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-accent to-signal">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="96px"
                    className={person.photoFit}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {person.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted">{person.bio}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6 text-base leading-relaxed text-muted">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {thesisCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
