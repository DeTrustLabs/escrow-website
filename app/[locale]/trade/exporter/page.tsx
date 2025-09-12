import { getTranslations } from "next-intl/server"
import SectionGroup from "@/components/ui/section-group"
import ExporterClient from "./ExporterClient"

export async function generateMetadata() {
  const t = await getTranslations("trade.exporter.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function ExporterBenefitsPage() {
  return (
    <SectionGroup>
      <ExporterClient />
    </SectionGroup>
  )
}
