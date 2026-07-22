import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bastard Software — hospitals, research partners, and investors welcome.",
};

export default function ContactPage() {
  return <ContactContent />;
}
