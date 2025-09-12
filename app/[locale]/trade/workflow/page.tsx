import { getTranslations } from "next-intl/server"
import { WorkflowClient } from "./WorkflowClient"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: "trade.workflow.metadata",
  })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function WorkflowPage() {
  return <WorkflowClient />
}
