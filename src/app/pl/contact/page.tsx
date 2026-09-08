import { pageMetadata } from "@/lib/i18n/metadata";
import ContactContent from "@/app/contact/ContactContent";

export const metadata = pageMetadata("pl", "contact");

export default function PlContactPage() {
  return <ContactContent />;
}
