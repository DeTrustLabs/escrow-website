import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { LANGUAGES } from "@/i18n/request"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const DEFAULT_LOCALE = "en"

function getPreferredLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // Allow both bare language and language-region, but map to our supported list
  return matchLocale(languages, LANGUAGES, DEFAULT_LOCALE)
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const url = request.nextUrl.clone()
  const { pathname } = url

  // 1. Locale prefix handling
  const pathSegments = pathname.split("/").filter(Boolean)
  const hasLocalePrefix =
    pathSegments.length > 0 && LANGUAGES.includes(pathSegments[0])

  // Redirect bare root to best matched locale from Accept-Language
  if (pathname === "/") {
    const best = getPreferredLocale(request) || DEFAULT_LOCALE
    url.pathname = `/${best}`
    return NextResponse.redirect(url)
  }

  // If no valid locale prefix (e.g., /trade) and path is not an asset, redirect to add default locale
  if (!hasLocalePrefix) {
    // Preserve existing path by prefixing locale
    const best = getPreferredLocale(request) || DEFAULT_LOCALE
    url.pathname = `/${best}${pathname}`
    return NextResponse.redirect(url)
  }

  // Strip locale for subdomain logic checks below (operate on rest of path)
  const locale = pathSegments[0]
  const localizedPath = `/${pathSegments.slice(1).join("/")}` || "/"

  // Extract subdomain
  const subdomain = hostname.split(".")[0]

  if (hostname.includes("trade.escrow-protocol.com") || subdomain === "trade") {
    if (localizedPath === "/") {
      url.pathname = `/${locale}/trade`
    } else {
      url.pathname = `/${locale}${localizedPath}`
    }
    return NextResponse.rewrite(url)
  }

  if (
    hostname.includes("freelancer.escrow-protocol.com") ||
    subdomain === "freelancer"
  ) {
    if (localizedPath === "/") {
      url.pathname = `/${locale}/freelancer`
    } else {
      url.pathname = `/${locale}${localizedPath}`
    }
    return NextResponse.rewrite(url)
  }

  if (
    hostname.includes("integrations.escrow-protocol.com") ||
    subdomain === "integrations"
  ) {
    url.pathname = `/${locale}/integrations${
      localizedPath === "/" ? "" : localizedPath
    }`
    return NextResponse.rewrite(url)
  }

  if (
    hostname.includes("community.escrow-protocol.com") ||
    subdomain === "community"
  ) {
    url.pathname = `/${locale}/community${
      localizedPath === "/" ? "" : localizedPath
    }`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

// Limit middleware to HTML/document requests (exclude assets & API)
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
