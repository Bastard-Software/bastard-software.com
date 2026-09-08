import { pageMetadata } from "@/lib/i18n/metadata";
import HomeContent from "@/app/HomeContent";

export const metadata = pageMetadata("pl", "home");

export default function PlHomePage() {
  return <HomeContent />;
}
