import type { Metadata } from "next"
import FreelancerClientPage from "./FreelancerClientPage"
import SectionGroup from "@/components/ui/section-group"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getSSRMetadataTranslations(
    locale,
    "freelancer.freelancerPage.metadata"
  )
  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "freelancer benefits, non-payment risk freelancers, trust issues freelance work, payment delays freelancing, secure freelance payments",
  }
}

export default async function FreelancerPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await getSSRTranslations(
    "freelancer.freelancerPage",
    params
  )
  return (
    <SectionGroup>
      <FreelancerClientPage locale={locale} />
    </SectionGroup>
  )
}
