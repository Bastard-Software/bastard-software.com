import { pageMetadata } from "@/lib/i18n/metadata";
import PlatformContent from "@/app/platform/PlatformContent";

export const metadata = pageMetadata("pl", "platform");

export default function PlPlatformPage() {
  return <PlatformContent />;
}
