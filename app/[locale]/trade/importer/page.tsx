import type { Metadata } from "next"
import ImporterClient from "./ImporterClient"
import { SITE_URL } from "@/lib/urls"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trade.importer.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "importer benefits, non-delivery protection, quality control imports, advance payment fraud, international trade disputes, supplier reliability",
    alternates: { canonical: `${SITE_URL}/importer` },
  }
}

export default function ImporterBenefitsPage() {
  return <ImporterClient />
}
