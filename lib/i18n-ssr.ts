import { getTranslations, getMessages, getLocale } from "next-intl/server"
import { LANGUAGES } from "@/i18n/request"

/**
 * Centralized internationalization helper for Server-Side Rendered components
 * 
 * This helper function provides a consistent way to access translations in SSR components,
 * reducing boilerplate code and ensuring proper error handling across all pages.
 * 
 * @param namespace - Optional namespace for translations (e.g., 'home', 'navigation')
 * @param locale - Optional locale override (defaults to current request locale)
 * @returns Object containing translation function, messages, and locale
 */
export async function getSSRTranslations(
  namespace?: string,
  locale?: string
) {
  try {
    // Get the current locale if not provided
    const currentLocale = locale || await getLocale()
    
    // Validate locale is supported
    if (!LANGUAGES.includes(currentLocale)) {
      console.warn(`Unsupported locale: ${currentLocale}, falling back to 'en'`)
      const fallbackLocale = "en"
      
      return {
        t: await getTranslations({ locale: fallbackLocale, namespace }),
        messages: await getMessages({ locale: fallbackLocale }),
        locale: fallbackLocale,
        isValidLocale: false
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
      isValidLocale: true
    }
  } catch (error) {
    console.error('Error in getSSRTranslations:', error)
    
    // Fallback to English if there's any error
    const fallbackLocale = "en"
    return {
      t: await getTranslations({ locale: fallbackLocale, namespace }),
      messages: await getMessages({ locale: fallbackLocale }),
      locale: fallbackLocale,
      isValidLocale: false
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
  locale: string,
  namespace: string = "metadata"
) {
  try {
    // Validate locale
    const validLocale = LANGUAGES.includes(locale) ? locale : "en"
    
    return await getTranslations({ 
      locale: validLocale, 
      namespace 
    })
  } catch (error) {
    console.error('Error in getSSRMetadataTranslations:', error)
    
    // Fallback to English
    return await getTranslations({ 
      locale: "en", 
      namespace 
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
    const pathParts = path.split('.')
    let current: unknown = messages
    
    for (const part of pathParts) {
      if (current && typeof current === 'object' && current !== null && part in current) {
        current = (current as Record<string, unknown>)[part]
      } else {
        return []
      }
    }
    
    return Array.isArray(current) ? current : []
  } catch (error) {
    console.error('Error extracting translation array:', error)
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
  locale?: string
) {
  const { t, messages, locale: currentLocale, isValidLocale } = await getSSRTranslations(namespace, locale)
  
  const arrays: Record<string, string[]> = {}
  
  for (const { path, key } of arrayPaths) {
    arrays[key] = extractTranslationArray(messages, path)
  }
  
  return {
    t,
    messages,
    locale: currentLocale,
    isValidLocale,
    arrays
  }
}