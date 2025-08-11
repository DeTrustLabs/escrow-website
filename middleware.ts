import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const url = request.nextUrl.clone()

  // Extract subdomain
  const subdomain = hostname.split(".")[0]

  // Handle different subdomains
  if (hostname.includes("trade.escrow-protocol.com") || subdomain === "trade") {
    url.pathname = `/trade${url.pathname === "/" ? "" : url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (hostname.includes("freelancer.escrow-protocol.com") || subdomain === "freelancer") {
    url.pathname = `/freelancer${url.pathname === "/" ? "" : url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (hostname.includes("integrations.escrow-protocol.com") || subdomain === "integrations") {
    url.pathname = `/integrations${url.pathname === "/" ? "" : url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (hostname.includes("community.escrow-protocol.com") || subdomain === "community") {
    url.pathname = `/community${url.pathname === "/" ? "" : url.pathname}`
    return NextResponse.rewrite(url)
  }

  // Main domain shows the main page
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
