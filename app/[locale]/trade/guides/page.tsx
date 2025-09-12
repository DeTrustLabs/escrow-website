import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react"
import Link from "next/link"
import { getTranslations, getMessages } from "next-intl/server"
import { getMessageArray } from "@/lib/i18n-arrays"
import type { Metadata } from "next"
import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trade.guides.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function GuidesPage() {
  const [t, messages] = await Promise.all([
    getTranslations("trade.guides"),
    getMessages(),
  ])
  const whatYouLearnItems = getMessageArray(
    messages,
    "trade.guides.featuredGuide.whatYouLearn.items"
  )

  return (
    <SectionGroup>
      <Hero
        className="bg-gradient-to-br from-primary/5 to-transparent"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        titleClassName="text-5xl lg:text-7xl font-bold tracking-tight mb-8"
        maxWidth="max-w-5xl"
      />

      {/* Featured Guide */}
      <section>
        <Card className="border-0 shadow-xl mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {t("featuredGuide.badge")}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {t("featuredGuide.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("featuredGuide.description")}
                </p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{t("featuredGuide.readTime")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{t("featuredGuide.level")}</span>
                  </div>
                </div>
                <Button size="lg">
                  {t("featuredGuide.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">
                  {t("featuredGuide.whatYouLearn.title")}
                </h3>
                <ul className="space-y-3">
                  {whatYouLearnItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                {t("cta.contactExpert")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                {t("cta.startTrade")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SectionGroup>
  )
}
