"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function FreelancerGuidesPage() {
  const t = useTranslations("freelancer.guides")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-20">
        <div className="container px-8">
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
                  <h3 className="font-semibold mb-4">What You'll Learn</h3>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/freelancer/contacts">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  {t("cta.contactButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  {t("cta.startProjectButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
