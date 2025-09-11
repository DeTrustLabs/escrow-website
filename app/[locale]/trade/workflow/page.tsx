import { getTranslations } from "next-intl/server"
import { WorkflowClient } from "./WorkflowClient"

export async function generateMetadata() {
  const t = await getTranslations("trade.workflow.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function WorkflowPage() {
  return <WorkflowClient />
}
