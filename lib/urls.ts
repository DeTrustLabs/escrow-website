// Centralized URL & route constants.
// Adjust NEXT_PUBLIC_APP_URL in a .env.local file to point to staging/production dapp instance if needed.

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.escrow-protocol.com"
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

// Maps former subdomain sections to local Next.js routed pages for local development.
export const ROUTES = {
  trade: "/trade",
  freelancer: "/freelancer",
  integrations: "/integrations",
  community: "/community",
  protocol: "/protocol",
  support: "/support",
}

// Prepend a locale to a given route (expects route starting with '/')
export function withLocale(locale: string, path: string) {
  return `/${locale}${path}`.replace(/\/+/, "/")
}
