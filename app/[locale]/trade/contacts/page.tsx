import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"
import { getSSRTranslations } from "@/lib/i18n-ssr"
import ContactForm from "@/components/contact/ContactForm"
import { sendContactMessage, subscribeToNewsletter } from "../../../actions"

export default async function ContactsPage({
  params,
  searchParams,
}: PageProps<"/[locale]/trade/contacts"> & {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const { t } = await getSSRTranslations("trade.contacts", params)
  const sp = (await searchParams) || {}

  const strings = {
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
      message: t("contactForm.message"),
      messagePlaceholder: t("contactForm.messagePlaceholder"),
      tradeType: t("contactForm.tradeType"),
      tradeTypePlaceholder: t("contactForm.tradeTypePlaceholder"),
      tradeTypes: {
        export: t("contactForm.tradeTypes.export"),
        import: t("contactForm.tradeTypes.import"),
        both: t("contactForm.tradeTypes.both"),
      },
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
      <ContactForm
        strings={strings}
        selectMode="tradeType"
        useUISelect
        success={{
          submitted: sp.submitted as "contact" | "newsletter" | undefined,
        }}
        onContactSubmit={async (formData: FormData) => {
          "use server"
          await sendContactMessage(formData)
        }}
        onNewsletterSubmit={async (formData: FormData) => {
          "use server"
          await subscribeToNewsletter(formData)
        }}
      />
    </SectionGroup>
  )
}
