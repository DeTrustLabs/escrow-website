import { getTranslations } from "next-intl/server"
import SectionGroup from "@/components/section-group"
import ExporterBenefitsClient from "./ExporterBenefitsClient"

export async function generateMetadata() {
  const t = await getTranslations("trade.exporterBenefits.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function ExporterBenefitsPage() {
  return (
    <SectionGroup>
      <ExporterBenefitsClient />
    </SectionGroup>
  )
}
