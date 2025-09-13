import { Metadata } from "next"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(params, "terms")

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  }
}

export default async function TermsPage({
  params,
}: PageProps<"/[locale]/terms">) {
  const { t } = await getSSRTranslations("terms", params)

  return (
    <>
      {/* Terms of Service Content */}
      <div className="container px-8 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">{t("content")}</p>
        </div>
      </div>
    </>
  )
}
