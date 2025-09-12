// Central navigation configuration to manage all navigation variants in one place.
// Extend or modify this file to adjust navigation without touching component logic.

import { SECTION_ROUTES } from "./urls"
import { LANGUAGES } from "@/i18n/request"

export type NavVariant = "global" | "trade" | "freelancer"

export interface NavLink {
  href: string
  key: string
  description?: string // Only used for global variant cards / mobile sheet
}

export interface VariantConfig {
  logoHref: string
  main: NavLink[]
  resources: NavLink[]
  // Path detection: any pathname starting with one of these (exact or prefix) maps to this variant.
  matchPrefixes: string[]
}

// Global sections derive from SECTION_ROUTES
const GLOBAL_MAIN: NavLink[] = SECTION_ROUTES.map((r) => ({
  href: r.href,
  key: r.key,
  description: r.description,
}))

export const NAV_VARIANTS: Record<NavVariant, VariantConfig> = {
  global: {
    logoHref: "/",
    main: GLOBAL_MAIN,
    resources: [],
    matchPrefixes: ["/"], // fallback; explicit matches handled by other variants first
  },
  trade: {
    logoHref: "/trade",
    main: [
      { href: "/trade", key: "home" },
      { href: "/trade/exporter", key: "exporter" },
      { href: "/trade/importer", key: "importer" },
      { href: "/trade/workflow", key: "workflow" },
    ],
    resources: [
      { href: "/trade/guides", key: "guides" },
      { href: "/trade/blog", key: "blog" },
      { href: "/trade/faq", key: "faq" },
      { href: "/trade/contacts", key: "contacts" },
    ],
    matchPrefixes: ["/trade"],
  },
  freelancer: {
    logoHref: "/freelancer",
    main: [
      { href: "/freelancer", key: "home" },
      {
        href: "/freelancer/freelancer",

        key: "freelancer",
      },
      {
        href: "/freelancer/project-owner",
        key: "projectowner",
      },
      { href: "/freelancer/workflow", key: "workflow" },
    ],
    resources: [
      { href: "/freelancer/guides", key: "guides" },
      { href: "/freelancer/blog", key: "blog" },
      { href: "/freelancer/faq", key: "faq" },
      { href: "/freelancer/contacts", key: "contacts" },
    ],
    matchPrefixes: ["/freelancer"],
  },
}

// Order matters: more specific variants first (freelancer, trade) then global fallback.
const DETECTION_ORDER: NavVariant[] = ["freelancer", "trade", "global"]

export function detectNavVariant(
  pathname: string,
  forced?: NavVariant
): NavVariant {
  if (forced) return forced
  // Strip locale if present (e.g., /en/trade -> /trade)
  const segments = pathname.split("/").filter(Boolean)
  let testPath = pathname
  if (segments.length > 0 && LANGUAGES.includes(segments[0])) {
    testPath = "/" + segments.slice(1).join("/")
  }
  for (const key of DETECTION_ORDER) {
    const cfg = NAV_VARIANTS[key]
    if (
      cfg.matchPrefixes.some(
        (p) => testPath === p || testPath.startsWith(p + "/")
      )
    ) {
      return key
    }
  }
  return "global"
}

export function getNavData(variant: NavVariant, locale?: string) {
  const cfg = NAV_VARIANTS[variant]
  if (!locale) {
    return {
      mainLinks: cfg.main,
      resources: cfg.resources,
      logoHref: cfg.logoHref,
    }
  }
  const prefix = `/${locale}`
  const prefixHref = (href: string) =>
    href === "/" ? prefix : `${prefix}${href}`
  return {
    mainLinks: cfg.main.map((l) => ({ ...l, href: prefixHref(l.href) })),
    resources: cfg.resources.map((l) => ({ ...l, href: prefixHref(l.href) })),
    logoHref: prefixHref(cfg.logoHref),
  }
}
