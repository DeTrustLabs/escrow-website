import { getTranslations } from "next-intl/server"
import { WorkflowClient } from "./WorkflowClient"
import SectionGroup from "@/components/section-group"

export async function generateMetadata() {
  const t = await getTranslations("trade.workflow.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function WorkflowPage() {
  return (
    <SectionGroup>
      <WorkflowClient />
    </SectionGroup>
  )
}
