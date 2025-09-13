// Centralized URL & route constants.
// Adjust NEXT_PUBLIC_APP_URL in a .env.local file to point to staging/production dapp instance if needed.

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

// Maps former subdomain sections to local Next.js routed pages for local development.
export const ROUTES = {
  home: "/",
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

export const SECTION_ROUTES = [
  {
    key: "home",
    label: "Home",
    href: ROUTES.home,
  },
  {
    key: "trade",
    label: "Global Trade",
    href: ROUTES.trade,
  },
  {
    key: "freelancer",
    label: "Freelancer",
    href: ROUTES.freelancer,
  },
  {
    key: "integrations",
    label: "Integrations",
    href: ROUTES.integrations,
  },
  {
    key: "community",
    label: "Protocol & Community",
    href: ROUTES.community,
  },
  {
    key: "support",
    label: "Support and Contact",
    href: ROUTES.support,
  },
]
