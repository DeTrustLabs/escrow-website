"use client"

import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "@/lib/locale-navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { LANGUAGES } from "@/i18n/request"

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("navigation")

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return
    // Ensure we pass a de-localized pathname to the locale-aware router
    let path = pathname || "/"
    const segments = path.split("/").filter(Boolean)
    if (segments.length > 0 && LANGUAGES.includes(segments[0])) {
      path = "/" + segments.slice(1).join("/")
      if (path === "/") path = "/"
    }
    router.replace(path, { locale: newLocale })
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="ring-none">
          <Languages className="h-4 w-4 mr-2" />
          <span className="hidden md:block">{t(`languages.${locale}`)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={locale === lang.code ? "bg-accent" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
