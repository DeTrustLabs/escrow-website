import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function PrivacyPolicy() {
  const t = await getTranslations("privacy")

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container px-8 mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            {t("title")}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">{t("content")}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
