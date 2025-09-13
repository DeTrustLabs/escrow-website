import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"
import { getSSRTranslations } from "@/lib/i18n-ssr"
import {
  FreelancerContactsClient,
  type FreelancerContactsStrings,
} from "./FreelancerContactsClient"

export default async function FreelancerContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { t } = await getSSRTranslations("freelancer.contacts", params)

  const strings: FreelancerContactsStrings = {
    popup: { thankYou: t("popup.thankYou") },
    contactForm: {
      title: t("contactForm.title"),
      firstName: t("contactForm.firstName"),
      firstNamePlaceholder: t("contactForm.firstNamePlaceholder"),
      lastName: t("contactForm.lastName"),
      lastNamePlaceholder: t("contactForm.lastNamePlaceholder"),
      email: t("contactForm.email"),
      emailPlaceholder: t("contactForm.emailPlaceholder"),
      company: t("contactForm.company"),
      companyPlaceholder: t("contactForm.companyPlaceholder"),
      role: t("contactForm.role"),
      rolePlaceholder: t("contactForm.rolePlaceholder"),
      roles: {
        freelancer: t("contactForm.roles.freelancer"),
        client: t("contactForm.roles.client"),
        both: t("contactForm.roles.both"),
      },
      message: t("contactForm.message"),
      messagePlaceholder: t("contactForm.messagePlaceholder"),
      submittingButton: t("contactForm.submittingButton"),
      submitButton: t("contactForm.submitButton"),
    },
    contactInfo: {
      title: t("contactInfo.title"),
      emailTitle: t("contactInfo.emailTitle"),
      emailAddress: t("contactInfo.emailAddress"),
      emailDescription: t("contactInfo.emailDescription"),
    },
    newsletter: {
      title: t("newsletter.title"),
      subtitle: t("newsletter.subtitle"),
      emailPlaceholder: t("newsletter.emailPlaceholder"),
      submittingButton: t("newsletter.submittingButton"),
      submitButton: t("newsletter.submitButton"),
    },
  }

  return (
    <SectionGroup>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <FreelancerContactsClient strings={strings} />
    </SectionGroup>
  )
}
