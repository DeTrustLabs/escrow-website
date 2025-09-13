import type { Metadata } from "next"
import ImporterClient from "./ImporterClient"
import { SITE_URL } from "@/lib/urls"
import {
  getSSRMetadataTranslations,
  getSSRTranslationsWithArrays,
} from "@/lib/i18n-ssr"
import SectionGroup from "@/components/ui/section-group"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/trade/importer">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(params, "trade.importer.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "importer benefits, non-delivery protection, quality control imports, advance payment fraud, international trade disputes, supplier reliability",
    alternates: { canonical: `${SITE_URL}/importer` },
  }
}

export default async function ImporterBenefitsPage({
  params,
}: PageProps<"/[locale]/trade/importer">) {
  const { locale } = await getSSRTranslationsWithArrays(
    "trade.importer",
    [
      {
        path: "trade.importer.protection.beforePayment.benefits",
        key: "beforePaymentBenefits",
      },
      {
        path: "trade.importer.protection.afterDelivery.benefits",
        key: "afterDeliveryBenefits",
      },
    ],
    params
  )

  return (
    <SectionGroup>
      <ImporterClient locale={locale} />
    </SectionGroup>
  )
}
