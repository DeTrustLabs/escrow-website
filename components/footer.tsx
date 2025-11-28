import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { APP_URL, ROUTES, withLocale } from "@/lib/urls"
import { getSSRTranslations } from "@/lib/i18n-ssr"

type FooterProps = {
  locale?: string
}

export async function Footer({ locale: forcedLocale }: FooterProps) {
  const { t, locale } = await getSSRTranslations("footer", forcedLocale)
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo/logo-vertical.png"
              alt="Escrow Protocol"
              width={200}
              height={51}
              className="h-12 mb-4"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("description")}
            </p>
            <div className="flex justify-between items-center space-x-2 mt-2">
              <div className="flex space-x-2 mt-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://twitter.com/EscrowProtocol_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://github.com/DeTrustLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://www.linkedin.com/in/escrow-protocol/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold">{t("solutions")}</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href={withLocale(locale, ROUTES.trade)}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("globalTrade")}
                </Link>
                <Link
                  href={withLocale(locale, ROUTES.freelancer)}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("freelancer")}
                </Link>
                <Link
                  href={withLocale(locale, ROUTES.integrations)}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("integrations")}
                </Link>
                <Link
                  href={withLocale(locale, ROUTES.community)}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("protocolCommunity")}
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold">{t("resources")}</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href={withLocale(locale, "/support")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("documentation")}
                </Link>
                <Link
                  href={withLocale(locale, "/support")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("faq")}
                </Link>
                <Link
                  href={withLocale(locale, "/protocol")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("community")}
                </Link>
                <Link
                  href={withLocale(locale, "/support")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {t("support")}
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("stayUpdated")}</h4>
            <p className="text-sm text-muted-foreground">
              {t("newsletterText")}
            </p>
            <form
              action="mailto:info@escrow-protocol.com"
              method="post"
              encType="text/plain"
              className="flex space-x-2"
            >
              <Input
                name="email"
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1"
                required
              />
              <Button type="submit" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          <div className="flex space-x-4 text-sm text-muted-foreground mt-4 sm:mt-0">
            <Link
              href={withLocale(locale, "/privacy")}
              className="hover:text-primary"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href={withLocale(locale, "/terms")}
              className="hover:text-primary"
            >
              {t("termsOfService")}
            </Link>
            <Link href={APP_URL} className="hover:text-primary">
              {t("dapp")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
