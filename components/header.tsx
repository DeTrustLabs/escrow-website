"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, X } from "lucide-react"
import { APP_URL } from "@/lib/urls"
import { useTranslations, useLocale } from "next-intl"
import {
  detectNavVariant,
  getNavData,
  NavVariant,
} from "@/lib/navigation-config"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"

interface NavigationProps {
  /** Force a variant (primarily for legacy wrappers). If omitted, path-based detection is used. */
  forceVariant?: NavVariant
}

export function Header({ forceVariant }: NavigationProps) {
  const pathname = usePathname() || ""
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations("navigation")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const variant = detectNavVariant(pathname, forceVariant)
  const { mainLinks, resources, logoHref } = useMemo(
    () => getNavData(variant, locale),
    [variant, locale]
  )
  const isGlobal = variant === "global"

  const handleNavClick = () => {
    setMobileOpen(false)
    setTimeout(() => window.scrollTo(0, 0), 100)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 flex h-16 items-center justify-between">
        {/* Left: Logo (stable) */}
        <Link
          href={logoHref}
          className="flex items-center space-x-2 group"
          onClick={handleNavClick}
        >
          <Image
            src="/images/logo-main.png"
            alt="Escrow Protocol"
            width={200}
            height={54}
            className="h-12 w-auto cursor-pointer"
            priority
          />
        </Link>

        {/* Center: Desktop navigation (links vary by variant) */}
        <nav className="hidden lg:flex items-center space-x-6">
          {mainLinks.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="text-sm font-medium h-auto px-3 py-2 hover:bg-primary/5"
              asChild
            >
              <Link href={item.href} onClick={handleNavClick}>
                {t(item.key)}
              </Link>
            </Button>
          ))}
          {!isGlobal && resources.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t("resources")}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {resources.map((r) => (
                  <DropdownMenuItem key={r.href} asChild>
                    <Link href={r.href} onClick={handleNavClick}>
                      {t(r.key)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

        {/* Right: CTA & Mobile toggle (stable) */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-bold"
            >
              {t("startEscrow")}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white shadow-md">
          <div className="container mx-auto px-8 py-4">
            <nav className="flex flex-col space-y-2">
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex flex-col rounded-md px-3 py-2 hover:bg-primary/5"
                >
                  <span className="text-sm font-medium">{t(item.key)}</span>
                  {isGlobal && item.description && (
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
              {!isGlobal && resources.length > 0 && (
                <div className="pt-4 mt-2 border-t">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    {t("resources")}
                  </p>
                  {resources.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={handleNavClick}
                      className="block text-sm font-medium rounded-md px-3 py-2 hover:bg-primary/5"
                    >
                      {t(r.key)}
                    </Link>
                  ))}
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
