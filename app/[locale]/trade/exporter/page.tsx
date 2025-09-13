import SectionGroup from "@/components/ui/section-group"
import ExporterClient from "./ExporterClient"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getSSRMetadataTranslations(locale, "trade.exporter.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function ExporterBenefitsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await getSSRTranslations("trade.exporter", params)
  return (
    <SectionGroup>
      <ExporterClient locale={locale} />
    </SectionGroup>
  )
}
