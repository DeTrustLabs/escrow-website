import { Metadata } from "next"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(params, "privacy.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function PrivacyPolicy({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { t } = await getSSRTranslations("privacy", params)

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            {t("title")}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">{t("content")}</p>
          </div>
        </div>
      </main>
    </>
  )
}
