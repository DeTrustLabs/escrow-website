import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import {
  setRequestLocale,
} from "next-intl/server"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LANGUAGES } from "@/i18n/request"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

// Generate per-locale metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getSSRMetadataTranslations(locale, "metadata")
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  }
}

// Static params for supported locales
export function generateStaticParams() {
  return LANGUAGES.map((l) => ({ locale: l }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const { messages } = await getSSRTranslations(undefined, locale)

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header key={locale} />
        <main className="w-full">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
