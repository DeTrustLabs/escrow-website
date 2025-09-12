import { getTranslations } from "next-intl/server"
import { WorkflowClient } from "./WorkflowClient"
import { SectionProvider } from "@/components/section"

export async function generateMetadata() {
  const t = await getTranslations("trade.workflow.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function WorkflowPage() {
  return (
    <SectionProvider>
      <WorkflowClient />
    </SectionProvider>
  )
}
