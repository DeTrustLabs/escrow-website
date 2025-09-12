import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react"
import { getTranslations, getMessages } from "next-intl/server"
import { getMessageArray } from "@/lib/i18n-arrays"
import type { Metadata } from "next"
import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"

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
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />

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
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{ label: t("cta.contactExpert"), href: "/contacts" }}
        secondary={{
          label: t("cta.startTrade"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login",
          newTab: true,
        }}
      />
    </SectionGroup>
  )
}
