import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react"
import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"
import { getSSRTranslations } from "@/lib/i18n-ssr"

export default async function FreelancerGuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { t } = await getSSRTranslations("freelancer.guides", params)

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
                    {t("featured.badge")}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {t("featured.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("featured.description")}
                </p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{t("featured.readTime")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{t("featured.level")}</span>
                  </div>
                </div>
                <Button size="lg">
                  {t("featured.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">What You&apos;ll Learn</h3>
                <ul className="space-y-3">
                  {[
                    t("featured.learnItems.0"),
                    t("featured.learnItems.1"),
                    t("featured.learnItems.2"),
                    t("featured.learnItems.3"),
                    t("featured.learnItems.4"),
                    t("featured.learnItems.5"),
                  ].map((item, index) => (
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
        primary={{
          label: t("cta.contactButton"),
          href: "/freelancer/contacts",
        }}
        secondary={{
          label: t("cta.startProjectButton"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          newTab: true,
        }}
      />
    </SectionGroup>
  )
}
