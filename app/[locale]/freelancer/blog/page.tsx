"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/ui/hero"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react"
import { useTranslations } from "next-intl"
import SectionGroup from "@/components/ui/section-group"
import { Input } from "@/components/ui/input"
import CTASection from "@/components/ui/cta"

export default function FreelancerBlogPage() {
  const t = useTranslations("freelancer.blog")

  return (
    <SectionGroup>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Recent Articles */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("articles.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("articles.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: t("articles.comingSoon.freelancerTips.title"),
              excerpt: t("articles.comingSoon.freelancerTips.excerpt"),
              category: t("articles.comingSoon.freelancerTips.category"),
              date: t("articles.comingSoon.freelancerTips.date"),
              readTime: t("articles.comingSoon.freelancerTips.readTime"),
              icon: TrendingUp,
              color: "bg-primary",
            },
            {
              title: t("articles.comingSoon.clientGuide.title"),
              excerpt: t("articles.comingSoon.clientGuide.excerpt"),
              category: t("articles.comingSoon.clientGuide.category"),
              date: t("articles.comingSoon.clientGuide.date"),
              readTime: t("articles.comingSoon.clientGuide.readTime"),
              icon: Shield,
              color: "bg-primary",
            },
            {
              title: t("articles.comingSoon.digitalEscrow.title"),
              excerpt: t("articles.comingSoon.digitalEscrow.excerpt"),
              category: t("articles.comingSoon.digitalEscrow.category"),
              date: t("articles.comingSoon.digitalEscrow.date"),
              readTime: t("articles.comingSoon.digitalEscrow.readTime"),
              icon: Users,
              color: "bg-primary",
            },
          ].map((article, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 ${article.color} rounded-lg flex items-center justify-center`}
                  >
                    <article.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-primary" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-primary" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <CTASection
        title={t("newsletter.title")}
        subtitle={t("newsletter.subtitle")}
      >
        <div className="max-w-md mx-auto w-full flex gap-4">
          <Input
            type="email"
            className="flex-1 h-10 bg-white/10"
            placeholder={t("newsletter.emailPlaceholder")}
          />
          <Button variant="secondary" size="lg">
            {t("newsletter.button")}
          </Button>
        </div>
      </CTASection>
    </SectionGroup>
  )
}
