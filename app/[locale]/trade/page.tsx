import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CTASection from "@/components/ui/cta"
import { Hero } from "@/components/ui/hero"
import {
  Target,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  TrendingDown,
  AlertTriangle,
  Users,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { AppImage } from "@/components/app-image"
import { CategoryCard } from "@/components/ui/category-card"
import type { Metadata } from "next"
import { getTranslations, getMessages } from "next-intl/server"
import SectionGroup from "@/components/ui/section-group"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trade.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "international trade escrow",
      "cross-border payments",
      "export payments",
      "import security",
      "trade finance",
      "digital escrow",
      "secure payments",
      "global trade",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  }
}

export default async function HomePage() {
  const t = await getTranslations("trade")
  const messages = await getMessages()
  const tradeRoot = messages.trade
  const exporter: string[] = Array.isArray(
    tradeRoot?.chooseRole?.exporters?.benefits
  )
    ? tradeRoot.chooseRole.exporters.benefits
    : []
  const importer: string[] = Array.isArray(
    tradeRoot?.chooseRole?.importers?.benefits
  )
    ? tradeRoot.chooseRole.importers.benefits
    : []
  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        primaryButton={{
          label: t("hero.startEscrow"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondaryButton={{
          label: t("hero.seeHowItWorks"),
          href: "/en/trade/workflow",
          variant: "outline",
        }}
        trustIndicators={[
          { text: t("hero.trustIndicators.nonCustodial") },
          { text: t("hero.trustIndicators.openSource") },
          { text: t("hero.trustIndicators.audited") },
          { text: t("hero.trustIndicators.availability") },
        ]}
      />

      {/* Sections */}
      <section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("solvesRisks.title")}
          </h2>
          <div className="mb-8 text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-justify">
              {t("solvesRisks.description")}
            </p>
          </div>
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/W5I6YU9ta7U"
                title={t("solvesRisks.videoTitle")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("trustChanges.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify">
            {t("trustChanges.description")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("dilemma.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("dilemma.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-red-200 bg-red-50 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <CardTitle className="text-red-800">
                  {t("dilemma.exporterRisks.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 leading-relaxed">
                {t("dilemma.exporterRisks.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <CardTitle className="text-orange-800">
                  {t("dilemma.importerRisks.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 leading-relaxed">
                {t("dilemma.importerRisks.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-1 bg-red-400"></div>
            <Users className="h-8 w-8 text-gray-400" />
            <div className="w-16 h-1 bg-orange-400"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("dilemma.tensions")}
          </p>
        </div>
      </section>

      <section className="py-12">
        <Card className="border-primary/20 bg-primary/5 shadow-xl max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-black">
              {t("dilemma.bridging.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("dilemma.bridging.description")}
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                  1
                </div>
                <p className="text-sm text-primary">
                  {t("dilemma.bridging.hold")}
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-primary" />
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                  2
                </div>
                <p className="text-sm text-primary">
                  {t("dilemma.bridging.verify")}
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-primary" />
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                  3
                </div>
                <p className="text-sm text-primary">
                  {t("dilemma.bridging.release")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* What is a Digital Escrow Section */}
      <section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("whatIs.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("whatIs.subtitle")}
          </p>
          <div className="mb-8 flex justify-center">
            <AppImage
              src="/images/escrow-process-illustration.png"
              alt={t("whatIs.imageAlt")}
              width={900}
              height={600}
              rounded
              shadow
              variant="content"
              className="w-full max-w-3xl h-auto object-cover"
            />
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-justify max-w-3xl mx-auto">
            {t("whatIs.description")}
          </p>
        </div>
      </section>

      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
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
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.trust.title")}</CardTitle>
              <CardDescription>
                {t("features.trust.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <TrendingDown className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.fees.title")}</CardTitle>
              <CardDescription>
                {t("features.fees.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.settlement.title")}</CardTitle>
              <CardDescription>
                {t("features.settlement.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.dispute.title")}</CardTitle>
              <CardDescription>
                {t("features.dispute.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.global.title")}</CardTitle>
              <CardDescription>
                {t("features.global.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("industries.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        {(() => {
          const industries = [
            {
              src: "/images/Electronics & Technology.jpg",
              alt: t("industries.electronics.imageAlt"),
              title: t("industries.electronics.title"),
              description: t("industries.electronics.description"),
            },
            {
              src: "/images/Textiles & Apparel.jpg",
              alt: t("industries.textiles.imageAlt"),
              title: t("industries.textiles.title"),
              description: t("industries.textiles.description"),
            },
            {
              src: "/images/Machinery & Equipment.jpg",
              alt: t("industries.machinery.imageAlt"),
              title: t("industries.machinery.title"),
              description: t("industries.machinery.description"),
            },
            {
              src: "/images/Raw Materials.jpg",
              alt: t("industries.rawMaterials.imageAlt"),
              title: t("industries.rawMaterials.title"),
              description: t("industries.rawMaterials.description"),
            },
            {
              src: "/images/Food & Agriculture.jpg",
              alt: t("industries.food.imageAlt"),
              title: t("industries.food.title"),
              description: t("industries.food.description"),
            },
            {
              src: "/images/Automotive Parts.jpg",
              alt: t("industries.automotive.imageAlt"),
              title: t("industries.automotive.title"),
              description: t("industries.automotive.description"),
            },
            {
              src: "/images/Medical Equipment.jpg",
              alt: t("industries.medical.imageAlt"),
              title: t("industries.medical.title"),
              description: t("industries.medical.description"),
            },
            {
              src: "/images/Construction Materials.jpg",
              alt: t("industries.construction.imageAlt"),
              title: t("industries.construction.title"),
              description: t("industries.construction.description"),
            },
            {
              src: "/images/Energy & Oil_renewable energy equipment.jpg",
              alt: t("industries.energy.imageAlt"),
              title: t("industries.energy.title"),
              description: t("industries.energy.description"),
            },
            {
              src: "/images/Consumer Goods.jpg",
              alt: "Consumer Goods",
              title: t("industries.consumer.title"),
              description: t("industries.consumer.description"),
            },
            {
              src: "/images/Chemicals & Plastics.jpg",
              alt: t("industries.chemicals.imageAlt"),
              title: t("industries.chemicals.title"),
              description: t("industries.chemicals.description"),
            },
            {
              src: "/images/Luxury Goods.jpg",
              alt: t("industries.luxury.imageAlt"),
              title: t("industries.luxury.title"),
              description: t("industries.luxury.description"),
            },
          ]
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((c, idx) => (
                <CategoryCard
                  key={idx}
                  image={{ src: c.src, alt: c.alt, aspectRatio: "4 / 3" }}
                  title={c.title}
                  description={c.description}
                />
              ))}
            </div>
          )
        })()}
      </section>

      {/* Choose Your Trade Role */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("chooseRole.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("chooseRole.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("chooseRole.exporters.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("chooseRole.exporters.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {exporter.map((benefit: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
              <Link href="/exporter">
                <Button className="w-full mt-4">
                  {t("chooseRole.exporters.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("chooseRole.importers.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("chooseRole.importers.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {importer.map((benefit: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
              <Link href="/importer">
                <Button className="w-full mt-4">
                  {t("chooseRole.importers.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        gradient="simple"
        rounded="2xl"
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{
          label: t("cta.primaryButton"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          newTab: true,
        }}
        secondary={{ label: t("cta.secondaryButton"), href: "/trade/contacts" }}
      />
    </SectionGroup>
  )
}
