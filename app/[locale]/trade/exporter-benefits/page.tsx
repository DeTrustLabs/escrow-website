import { getTranslations } from "next-intl/server"
import { SectionProvider } from "@/components/section"
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
    <SectionProvider>
      <ExporterBenefitsClient />
    </SectionProvider>
  )
}
