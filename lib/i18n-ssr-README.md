# Internationalization Helper for SSR Components

This helper function provides a centralized way to handle internationalization in Server-Side Rendered (SSR) components, reducing boilerplate code and ensuring consistent error handling.

## Overview

The `getSSRTranslations` helper functions are designed to:
- Simplify translation access in SSR components
- Handle locale validation and fallbacks
- Provide consistent error handling
- Support array extraction from translation JSON files
- Reduce repetitive code across components

## Usage Examples

### Basic Translation Function

```typescript
import { getSSRTranslations } from "@/lib/i18n-ssr"

export default async function MyPage() {
  const { t, locale } = await getSSRTranslations("namespace")
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  )
}
```

### Metadata Generation

```typescript
import { getSSRMetadataTranslations } from "@/lib/i18n-ssr"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getSSRMetadataTranslations(locale, "home")

  return {
    title: t("title"),
    description: t("description"),
  }
}
```

### Extracting Arrays from Translation Files

```typescript
import { getSSRTranslationsWithArrays } from "@/lib/i18n-ssr"

export default async function HomePage() {
  const { t, locale, arrays } = await getSSRTranslationsWithArrays(
    "home",
    [
      { path: "home.features.list", key: "featuresList" },
      { path: "home.benefits.items", key: "benefitsList" }
    ]
  )
  
  const { featuresList = [], benefitsList = [] } = arrays

  return (
    <div>
      <h1>{t("title")}</h1>
      <ul>
        {featuresList.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}
```

## Before vs After

### Before (Traditional approach)
```typescript
export default async function HomePage() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: "home" })
  const messages = await getMessages({ locale })
  
  // Manual array extraction with error handling
  const features = Array.isArray(messages.home?.features?.list)
    ? messages.home.features.list
    : []
}
```

### After (Using helper)
```typescript
export default async function HomePage() {
  const { t, locale, arrays } = await getSSRTranslationsWithArrays(
    "home",
    [{ path: "home.features.list", key: "features" }]
  )
  
  const { features = [] } = arrays
}
```

## Benefits

1. **Reduced Boilerplate**: Less repetitive code across components
2. **Consistent Error Handling**: Automatic fallbacks to English on errors
3. **Type Safety**: Better TypeScript support
4. **Locale Validation**: Automatic validation of supported locales
5. **Array Support**: Easy extraction of arrays from translation files
6. **Centralized Logic**: All i18n logic in one place for easier maintenance

## Functions Available

- `getSSRTranslations(namespace?, locale?)` - Basic translation function
- `getSSRMetadataTranslations(locale, namespace)` - For metadata generation
- `getSSRTranslationsWithArrays(namespace?, arrayPaths, locale?)` - With array extraction
- `extractTranslationArray(messages, path)` - Standalone array extraction

## Error Handling

All functions include automatic error handling with fallback to English locale. Missing translations will be logged as warnings but won't break the application.