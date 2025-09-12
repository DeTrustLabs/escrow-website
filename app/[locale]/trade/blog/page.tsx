import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/hero"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import { Section, SectionProvider } from "@/components/section"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trade.blog")

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  }
}

export default async function BlogPage() {
  const t = await getTranslations("trade.blog")

  const articles = [
    {
      title: t("articles.comingSoon.exporterTips.title"),
      excerpt: t("articles.comingSoon.exporterTips.excerpt"),
      category: t("articles.comingSoon.exporterTips.category"),
      date: t("articles.comingSoon.exporterTips.date"),
      readTime: t("articles.comingSoon.exporterTips.readTime"),
      icon: TrendingUp,
      color: "bg-primary",
    },
    {
      title: t("articles.comingSoon.importerGuide.title"),
      excerpt: t("articles.comingSoon.importerGuide.excerpt"),
      category: t("articles.comingSoon.importerGuide.category"),
      date: t("articles.comingSoon.importerGuide.date"),
      readTime: t("articles.comingSoon.importerGuide.readTime"),
      icon: Shield,
      color: "bg-primary",
    },
    {
      title: t("articles.comingSoon.digitalFinance.title"),
      excerpt: t("articles.comingSoon.digitalFinance.excerpt"),
      category: t("articles.comingSoon.digitalFinance.category"),
      date: t("articles.comingSoon.digitalFinance.date"),
      readTime: t("articles.comingSoon.digitalFinance.readTime"),
      icon: Globe,
      color: "bg-primary",
    },
  ]

  return (
    <SectionProvider>
      <Hero
        className="bg-gradient-to-br from-primary/5 to-transparent"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        titleClassName="text-5xl lg:text-7xl font-bold tracking-tight mb-8"
        maxWidth="max-w-5xl"
      />

      {/* Recent Articles */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("articles.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("articles.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
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
      </Section>

      {/* Newsletter Signup */}
      <Section className="py-20 bg-primary">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("newsletter.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("newsletter.subtitle")}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t("newsletter.emailPlaceholder")}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button variant="secondary" size="lg">
              {t("newsletter.button")}
            </Button>
          </div>
        </div>
      </Section>
    </SectionProvider>
  )
}
