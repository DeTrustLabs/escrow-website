import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

export const LANGUAGES = ["en"] // List of supported languages

async function loadMessages(locale: string) {
  if (locale !== "en") return {}

  // Import split namespace files (add new ones here as they are extracted)
  const modules = await Promise.all([
    import("../messages/en/metadata.json"),
    import("../messages/en/home.json"),
    import("../messages/en/app.json"),
    import("../messages/en/navigation.json"),
    import("../messages/en/footer.json"),
    import("../messages/en/integrations.json"),
    import("../messages/en/community.json"),
    import("../messages/en/privacy.json"),
    import("../messages/en/terms.json"),
    import("../messages/en/support.json"),
    import("../messages/en/freelancer.json"),
    import("../messages/en/trade.json"),
    import("../messages/en/protocol.json"),
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
