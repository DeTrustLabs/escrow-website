import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"
import { getSSRTranslations } from "@/lib/i18n-ssr"
import {
  TradeContactsClient,
  type TradeContactsStrings,
} from "./TradeContactsClient"

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { t } = await getSSRTranslations("trade.contacts", params)

  const strings: TradeContactsStrings = {
    popup: {
      close: t("popup.close"),
      thankYou: t("popup.thankYou"),
    },
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
      tradeType: t("contactForm.tradeType"),
      tradeTypePlaceholder: t("contactForm.tradeTypePlaceholder"),
      tradeTypes: {
        export: t("contactForm.tradeTypes.export"),
        import: t("contactForm.tradeTypes.import"),
        both: t("contactForm.tradeTypes.both"),
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
      <TradeContactsClient strings={strings} />
    </SectionGroup>
  )
}
