import type { Metadata } from "next"
import ImporterBenefitsClient from "./ImporterBenefitsClient"
import { SITE_URL } from "@/lib/urls"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trade.importerBenefits.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "importer benefits, non-delivery protection, quality control imports, advance payment fraud, international trade disputes, supplier reliability",
    alternates: { canonical: `${SITE_URL}/importer-benefits` },
  }
}

export default function ImporterBenefitsPage() {
  return <ImporterBenefitsClient />
}
