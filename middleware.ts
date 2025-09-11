import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { LANGUAGES } from "@/i18n/request"

const DEFAULT_LOCALE = "en"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const url = request.nextUrl.clone()
  const { pathname } = url

  // 1. Locale prefix handling
  const pathSegments = pathname.split("/").filter(Boolean)
  const hasLocalePrefix =
    pathSegments.length > 0 && LANGUAGES.includes(pathSegments[0])

  // Redirect bare root to default locale
  if (pathname === "/") {
    url.pathname = `/${DEFAULT_LOCALE}`
    return NextResponse.redirect(url)
  }

  // If no valid locale prefix (e.g., /trade) and path is not an asset, redirect to add default locale
  if (!hasLocalePrefix) {
    // Preserve existing path by prefixing locale
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`
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
