import type { Metadata } from "next"
import ImporterClient from "./ImporterClient"
import { SITE_URL } from "@/lib/urls"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: "trade.importer.metadata",
  })

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
