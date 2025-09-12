import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LANGUAGES } from "@/i18n/request"

// Generate per-locale metadata
export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
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
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()
  // locale is resolved by the segment; provider will use it implicitly
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
