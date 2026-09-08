import { pageMetadata } from "@/lib/i18n/metadata";
import TechnologyContent from "@/app/technology/TechnologyContent";

export const metadata = pageMetadata("pl", "technology");

export default function PlTechnologyPage() {
  return <TechnologyContent />;
}
