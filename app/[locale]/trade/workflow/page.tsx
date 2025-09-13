import { WorkflowClient } from "./WorkflowClient"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"
import SectionGroup from "@/components/ui/section-group"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getSSRMetadataTranslations(locale, "trade.workflow.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await getSSRTranslations("trade.workflow", params)
  return (
    <SectionGroup>
      <WorkflowClient locale={locale} />
    </SectionGroup>
  )
}
