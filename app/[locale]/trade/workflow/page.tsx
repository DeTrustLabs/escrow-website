import { WorkflowClient } from "./WorkflowClient"
import { getSSRMetadataTranslations } from "@/lib/i18n-ssr"

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

export default function WorkflowPage() {
  return <WorkflowClient />
}
