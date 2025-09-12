import { getTranslations } from "next-intl/server"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("terms")

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  }
}

export default async function TermsPage() {
  const t = await getTranslations("terms")

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
