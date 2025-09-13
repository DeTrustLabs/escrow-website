import { createNavigation } from "next-intl/navigation"
import { LANGUAGES } from "@/i18n/request"

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales: LANGUAGES,
  })
