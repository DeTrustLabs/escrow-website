import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/ui/hero"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lock,
  Shield,
  Globe,
  Clock,
  Users,
  FileText,
  Handshake,
  Wallet,
  Package,
  Zap,
  Code,
  Building,
} from "lucide-react"
import Link from "next/link"
import { APP_URL, ROUTES, withLocale } from "@/lib/urls"
import {
  getSSRMetadataTranslations,
  getSSRTranslationsWithArrays,
} from "@/lib/i18n-ssr"
import type { Metadata } from "next"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(params, "home")

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
    keywords: [
      "digital escrow",
      "blockchain escrow",
      "secure payments",
      "cryptocurrency escrow",
      "smart contract escrow",
      "international trade",
      "freelance payments",
      "secure transactions",
      "decentralized escrow",
      "escrow protocol",
    ],
    openGraph: {
      title: t("hero.title"),
      description: t("hero.subtitle"),
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("hero.title"),
      description: t("hero.subtitle"),
    },
  }
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { t, locale, arrays } = await getSSRTranslationsWithArrays(
    "home",
    [
      { path: "home.business.trade.features", key: "tradeFeatures" },
      { path: "home.business.freelancer.features", key: "freelancerFeatures" },
      { path: "home.build.integrators.features", key: "integratorFeatures" },
      { path: "home.build.community.features", key: "communityFeatures" },
    ],
    params
  )

  // Extract arrays using the helper
  const {
    tradeFeatures = [],
    freelancerFeatures = [],
    integratorFeatures = [],
    communityFeatures = [],
  } = arrays

  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        primaryButton={{
          label: t("hero.startEscrow"),
          href: APP_URL,
        }}
        secondaryButton={{
          label: t("hero.watchDemo"),
          variant: "outline",
        }}
        trustIndicators={[
          { text: t("hero.trustIndicators.nonCustodial") },
          { text: t("hero.trustIndicators.openSource") },
          { text: t("hero.trustIndicators.audited") },
          { text: t("hero.trustIndicators.availability") },
        ]}
      />

      {/* Landing Cards - Explore the Escrow Protocol */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("explore.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("explore.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Link href={withLocale(locale, ROUTES.trade)}>
            <div className="bg-white rounded-lg p-8 text-center border-2 border-transparent hover:shadow-lg hover:border-2 hover:border-primary transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Globe className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("explore.cards.trade.title")}
              </h3>
              <p className="text-gray-600">
                {t("explore.cards.trade.description")}
              </p>
            </div>
          </Link>

          <Link href={withLocale(locale, ROUTES.freelancer)}>
            <div className="bg-white rounded-lg p-8 text-center border-2 border-transparent hover:shadow-lg hover:border-2 hover:border-primary transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("explore.cards.freelancer.title")}
              </h3>
              <p className="text-gray-600">
                {t("explore.cards.freelancer.description")}
              </p>
            </div>
          </Link>

          <Link href={withLocale(locale, ROUTES.integrations)}>
            <div className="bg-white rounded-lg p-8 text-center border-2 border-transparent hover:shadow-lg hover:border-2 hover:border-primary transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Code className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("explore.cards.integrators.title")}
              </h3>
              <p className="text-gray-600">
                {t("explore.cards.integrators.description")}
              </p>
            </div>
          </Link>

          <Link href={withLocale(locale, ROUTES.community)}>
            <div className="bg-white rounded-lg p-8 text-center border-2 border-transparent hover:shadow-lg hover:border-2 hover:border-primary transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Building className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("explore.cards.community.title")}
              </h3>
              <p className="text-gray-600">
                {t("explore.cards.community.description")}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Enhanced Features - Escrow Protocol Features */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.security.title")}</CardTitle>
              <CardDescription>
                {t("features.security.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.trust.title")}</CardTitle>
              <CardDescription>
                {t("features.trust.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.payments.title")}</CardTitle>
              <CardDescription>
                {t("features.payments.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.approval.title")}</CardTitle>
              <CardDescription>
                {t("features.approval.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.availability.title")}</CardTitle>
              <CardDescription>
                {t("features.availability.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.arbitration.title")}</CardTitle>
              <CardDescription>
                {t("features.arbitration.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Handshake,
              title: t("howItWorks.steps.agree.title"),
              description: t("howItWorks.steps.agree.description"),
              color: "bg-primary",
            },
            {
              icon: Wallet,
              title: t("howItWorks.steps.deposit.title"),
              description: t("howItWorks.steps.deposit.description"),
              color: "bg-primary",
            },
            {
              icon: Package,
              title: t("howItWorks.steps.deliver.title"),
              description: t("howItWorks.steps.deliver.description"),
              color: "bg-primary",
            },
            {
              icon: Zap,
              title: t("howItWorks.steps.release.title"),
              description: t("howItWorks.steps.release.description"),
              color: "bg-primary",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enhanced Use Cases - Perfect for Your Business */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("business.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("business.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="relative">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">
                    {t("business.trade.title")}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t("business.trade.subtitle")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              {tradeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <Link href={withLocale(locale, ROUTES.trade)}>
                <Button className="mt-6 w-full">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="relative">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">
                    {t("business.freelancer.title")}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t("business.freelancer.subtitle")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              {freelancerFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <Link href={withLocale(locale, ROUTES.freelancer)}>
                <Button className="mt-6 w-full">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrators and Community Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("build.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("build.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="relative">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">
                    {t("build.integrators.title")}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t("build.integrators.subtitle")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              {integratorFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <Link href={withLocale(locale, ROUTES.integrations)}>
                <Button className="mt-6 w-full">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="relative">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <Building className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">
                    {t("build.community.title")}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t("build.community.subtitle")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <Link href={withLocale(locale, ROUTES.community)}>
                <Button className="mt-6 w-full">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced CTA */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{ label: t("cta.startEscrow"), href: APP_URL, newTab: true }}
        secondary={{ label: t("cta.exploreDocs"), href: ROUTES.protocol }}
      />
    </SectionGroup>
  )
}
