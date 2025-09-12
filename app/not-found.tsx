import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowLeft, Home, Search, HelpCircle } from "lucide-react"
import Link from "next/link"
import { getLocale, getTranslations } from "next-intl/server"
import { withLocale } from "@/lib/urls"

export default async function NotFound() {
  const locale = await getLocale()
  const t = await getTranslations("notFound")

  return (
    <section className="p-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">{t("title")}</h1>
          <h2 className="text-3xl font-bold mb-4">{t("heading")}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Home className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">{t("goHome.title")}</CardTitle>
              <CardDescription>{t("goHome.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={withLocale(locale, "/")}>
                <Button className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("goHome.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">{t("getSupport.title")}</CardTitle>
              <CardDescription>{t("getSupport.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={withLocale(locale, "/contacts")}>
                <Button variant="outline" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  {t("getSupport.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>{t("popularPages.title")}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href={withLocale(locale, "/")} className="hover:text-primary">
              {t("popularPages.home")}
            </Link>
            <Link
              href={withLocale(locale, "/trade/workflow")}
              className="hover:text-primary"
            >
              {t("popularPages.howItWorks")}
            </Link>
            <Link
              href={withLocale(locale, "/exporter")}
              className="hover:text-primary"
            >
              {t("popularPages.forExporters")}
            </Link>
            <Link
              href={withLocale(locale, "/importer")}
              className="hover:text-primary"
            >
              {t("popularPages.forImporters")}
            </Link>
            <Link
              href={withLocale(locale, "/freelancer/faq")}
              className="hover:text-primary"
            >
              {t("popularPages.faq")}
            </Link>
            <a
              href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("popularPages.startEscrow")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
