import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LANGUAGES } from "@/i18n/request"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"

export const dynamic = "force-dynamic"

// Generate per-locale metadata
export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(params, "metadata")
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
}: LayoutProps<"/[locale]">) {
  const { locale } = await params
  setRequestLocale(locale)
  const { messages } = await getSSRTranslations(undefined, params)

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header key={`header-${locale}`} />
        <main className="w-full">{children}</main>
        <Footer locale={locale} />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
