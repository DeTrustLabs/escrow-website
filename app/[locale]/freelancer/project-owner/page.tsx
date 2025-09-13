import type { Metadata } from "next"
import ProjectOwnerClientPage from "./ProjectOwnerClientPage"
import SectionGroup from "@/components/ui/section-group"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/freelancer/project-owner">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(
    params,
    "freelancer.projectOwner.metadata"
  )
  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "project owner benefits, freelance hiring security, project protection, quality assurance, secure project payments",
  }
}

export default async function ProjectOwnerPage({
  params,
}: PageProps<"/[locale]/freelancer/project-owner">) {
  const { locale } = await getSSRTranslations("freelancer.projectOwner", params)
  return (
    <SectionGroup>
      <ProjectOwnerClientPage locale={locale} />
    </SectionGroup>
  )
}
