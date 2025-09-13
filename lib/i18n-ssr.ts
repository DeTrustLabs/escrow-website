import { getTranslations, getMessages } from "next-intl/server"
import { LANGUAGES } from "@/i18n/request"

type RouteParams = { locale: string }

async function resolveLocale(
  localeOrParams?: string | RouteParams | Promise<RouteParams>
): Promise<string> {
  try {
    if (!localeOrParams) return "en"
    if (typeof localeOrParams === "string") return localeOrParams
    const params = await localeOrParams
    return params?.locale ?? "en"
  } catch {
    return "en"
  }
}

/**
 * Centralized internationalization helper for Server-Side Rendered components
 *
 * This helper function provides a consistent way to access translations in SSR components,
 * reducing boilerplate code and ensuring proper error handling across all pages.
 *
 * @param namespace - Optional namespace for translations (e.g., 'home', 'navigation')
 * @param localeOrParams - Locale string or `params` (or `Promise<params>`) to resolve the locale from
 * @returns Object containing translation function, messages, and locale
 */
export async function getSSRTranslations(
  namespace?: string,
  localeOrParams?: string | RouteParams | Promise<RouteParams>
) {
  try {
    const currentLocale = await resolveLocale(localeOrParams)

    // Validate locale is supported
    if (!LANGUAGES.includes(currentLocale)) {
      console.warn(`Unsupported locale: ${currentLocale}, falling back to 'en'`)
      const fallbackLocale = "en"

      return {
        t: await getTranslations({ locale: fallbackLocale, namespace }),
        messages: await getMessages({ locale: fallbackLocale }),
        locale: fallbackLocale,
        isValidLocale: false,
      }
    }

    // Get translations for the specified namespace
    const t = namespace
      ? await getTranslations({ locale: currentLocale, namespace })
      : await getTranslations({ locale: currentLocale })

    // Get all messages for the locale
    const messages = await getMessages({ locale: currentLocale })

    return {
      t,
      messages,
      locale: currentLocale,
      isValidLocale: true,
    }
  } catch (error) {
    console.error("Error in getSSRTranslations:", error)

    // Fallback to English if there's any error
    const fallbackLocale = "en"
    return {
      t: await getTranslations({ locale: fallbackLocale, namespace }),
      messages: await getMessages({ locale: fallbackLocale }),
      locale: fallbackLocale,
      isValidLocale: false,
    }
  }
}

/**
 * Helper function specifically for metadata generation in SSR components
 *
 * @param locale - The locale for metadata
 * @param namespace - The translation namespace for metadata
 * @returns Translation function for metadata
 */
export async function getSSRMetadataTranslations(
  localeOrParams: Promise<RouteParams>,
  namespace: string = "metadata"
) {
  try {
    const locale = await resolveLocale(localeOrParams)
    const validLocale = LANGUAGES.includes(locale) ? locale : "en"

    return await getTranslations({
      locale: validLocale,
      namespace,
    })
  } catch (error) {
    console.error("Error in getSSRMetadataTranslations:", error)

    // Fallback to English
    return await getTranslations({
      locale: "en",
      namespace,
    })
  }
}

/**
 * Type helper for extracting array data from translation messages
 *
 * This is particularly useful for handling arrays in translation JSON files
 * that next-intl doesn't handle reliably with the t() function.
 *
 * @param messages - The messages object from getMessages()
 * @param path - Dot-separated path to the array (e.g., 'home.business.trade.features')
 * @returns Array of strings or empty array if path doesn't exist or isn't an array
 */
export function extractTranslationArray(
  messages: Record<string, unknown>,
  path: string
): string[] {
  try {
    const pathParts = path.split(".")
    let current: unknown = messages

    for (const part of pathParts) {
      if (
        current &&
        typeof current === "object" &&
        current !== null &&
        part in current
      ) {
        current = (current as Record<string, unknown>)[part]
      } else {
        return []
      }
    }

    return Array.isArray(current) ? current : []
  } catch (error) {
    console.error("Error extracting translation array:", error)
    return []
  }
}

/**
 * Combined helper that provides both translations and common array extractions
 *
 * @param namespace - Translation namespace
 * @param arrayPaths - Array of objects with path and key for array extraction
 * @param locale - Optional locale override
 * @returns Object with translations, messages, locale, and extracted arrays
 */
export async function getSSRTranslationsWithArrays(
  namespace?: string,
  arrayPaths: Array<{ path: string; key: string }> = [],
  localeOrParams?: string | RouteParams | Promise<RouteParams>
) {
  const {
    t,
    messages,
    locale: currentLocale,
    isValidLocale,
  } = await getSSRTranslations(namespace, localeOrParams)

  const arrays: Record<string, string[]> = {}

  for (const { path, key } of arrayPaths) {
    arrays[key] = extractTranslationArray(messages, path)
  }

  return {
    t,
    messages,
    locale: currentLocale,
    isValidLocale,
    arrays,
  }
}
