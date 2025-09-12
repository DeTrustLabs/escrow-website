import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

export const LANGUAGES = ["en", "fr", "es", "de"] // List of supported languages

async function loadMessages(locale: string) {
  if (!["en", "fr", "es", "de"].includes(locale)) return {}

  // Import split namespace files (add new ones here as they are extracted)
  const modules = await Promise.all([
    import(`../messages/${locale}/metadata.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/app.json`),
    import(`../messages/${locale}/navigation.json`),
    import(`../messages/${locale}/footer.json`),
    import(`../messages/${locale}/integrations.json`),
    import(`../messages/${locale}/community.json`),
    import(`../messages/${locale}/privacy.json`),
    import(`../messages/${locale}/terms.json`),
    import(`../messages/${locale}/support.json`),
    import(`../messages/${locale}/freelancer.json`),
    import(`../messages/${locale}/trade.json`),
    import(`../messages/${locale}/protocol.json`),
  ])

  // Merge all message objects deeply (flat namespaces so shallow merge is fine)
  return modules.reduce((acc, m) => ({ ...acc, ...m.default }), {})
}

export default getRequestConfig(async ({ locale }) => {
  // Fallback to default locale when none is provided (since we removed /en prefix)
  if (!locale) locale = "en"
  if (!LANGUAGES.includes(locale)) notFound()

  const messages = await loadMessages(locale)

  return { messages, locale }
})
