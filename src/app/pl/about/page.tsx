import { pageMetadata } from "@/lib/i18n/metadata";
import AboutContent from "@/app/about/AboutContent";

export const metadata = pageMetadata("pl", "about");

export default function PlAboutPage() {
  return <AboutContent />;
}
