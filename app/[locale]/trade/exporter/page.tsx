import { getTranslations } from "next-intl/server"
import SectionGroup from "@/components/ui/section-group"
import ExporterClient from "./ExporterClient"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: "trade.exporter.metadata",
  })

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
