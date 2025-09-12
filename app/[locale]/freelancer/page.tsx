import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/hero"
import {
  Target,
  Shield,
  Clock,
  CheckCircle,
  TrendingDown,
  AlertTriangle,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { AppImage } from "@/components/app-image"
import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"
import { getTranslations, getMessages } from "next-intl/server"
import { getMessageArray } from "@/lib/i18n-arrays"
import SectionGroup from "@/components/section-group"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("freelancer.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "freelance escrow",
      "secure payments",
      "project protection",
      "freelancer security",
      "client protection",
      "digital escrow",
      "secure freelancing",
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

export default async function FreelancerPage() {
  const t = await getTranslations("freelancer")
  const messages = await getMessages()
  const root = messages.freelancer || {}
  const freelancerBenefits = getMessageArray(
    root,
    "perfectFor.freelancers.benefits"
  )
  const projectOwnerBenefits = getMessageArray(
    root,
    "perfectFor.projectOwners.benefits"
  )
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
          href: "/freelancer/workflow",
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
      {/* How Escrow Solves Issues in Freelancing */}
      <section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("solvesIssues.title")}
          </h2>
          <div className="mb-8 text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-justify">
              {t("solvesIssues.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Risks of Freelancing */}
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
                  {t("dilemma.freelancerRisks.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 leading-relaxed">
                {t("dilemma.freelancerRisks.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <CardTitle className="text-orange-800">
                  {t("dilemma.clientRisks.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 leading-relaxed">
                {t("dilemma.clientRisks.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
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
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                    1
                  </div>
                  <p className="text-sm text-primary">
                    {t("dilemma.bridging.hold")}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                    2
                  </div>
                  <p className="text-sm text-primary">
                    {t("dilemma.bridging.complete")}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />
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
        </div>
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
              src="/images/escrow-freelance-illustration.png"
              alt={t("whatIs.imageAlt")}
              width={900}
              height={600}
              rounded
              shadow
              variant="content"
              className="w-full max-w-3xl h-auto object-cover"
              quality={85}
              priority
            />
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-justify max-w-3xl mx-auto">
            {t("whatIs.description")}
          </p>
        </div>
      </section>

      {/* 6 Escrow Features */}
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
              <CardTitle>{t("features.milestones.title")}</CardTitle>
              <CardDescription>
                {t("features.milestones.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("features.dispute.title")}</CardTitle>
              <CardDescription>
                {t("features.dispute.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Supporting All Service Categories */}
      <section id="supporting-all-service-categories">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("categories.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("categories.subtitle")}
          </p>
        </div>

        {(() => {
          const categories = [
            {
              src: "/images/Web Development.jpg",
              alt: t("categories.webDev.imageAlt"),
              title: t("categories.webDev.title"),
              description: t("categories.webDev.description"),
            },
            {
              src: "/images/Graphic Design.jpg",
              alt: t("categories.graphicDesign.imageAlt"),
              title: t("categories.graphicDesign.title"),
              description: t("categories.graphicDesign.description"),
            },
            {
              src: "/images/Content Writing.jpg",
              alt: t("categories.contentWriting.imageAlt"),
              title: t("categories.contentWriting.title"),
              description: t("categories.contentWriting.description"),
            },
            {
              src: "/images/Video Production.jpg",
              alt: t("categories.videoProduction.imageAlt"),
              title: t("categories.videoProduction.title"),
              description: t("categories.videoProduction.description"),
            },
            {
              src: "/images/Digital Marketing.jpg",
              alt: "Digital Marketing",
              title: t("categories.digitalMarketing.title"),
              description: t("categories.digitalMarketing.description"),
            },
            {
              src: "/images/Software Development.jpg",
              alt: t("categories.softwareDev.imageAlt"),
              title: t("categories.softwareDev.title"),
              description: t("categories.softwareDev.description"),
            },
            {
              src: "/images/UI_UX Design.jpg",
              alt: "UI/UX Design",
              title: t("categories.uiUxDesign.title"),
              description: t("categories.uiUxDesign.description"),
            },
            {
              src: "/images/Virtual Assistance.jpg",
              alt: "Virtual Assistance",
              title: t("categories.virtualAssistance.title"),
              description: t("categories.virtualAssistance.description"),
            },
            {
              src: "/images/Legal Services.jpg",
              alt: t("categories.legalServices.imageAlt"),
              title: t("categories.legalServices.title"),
              description: t("categories.legalServices.description"),
            },
            {
              src: "/images/Data Analysis.jpg",
              alt: t("categories.dataAnalysis.imageAlt"),
              title: t("categories.dataAnalysis.title"),
              description: t("categories.dataAnalysis.description"),
            },
            {
              src: "/images/Consulting.jpg",
              alt: t("categories.consulting.imageAlt"),
              title: t("categories.consulting.title"),
              description: t("categories.consulting.description"),
            },
            {
              src: "/images/Translation.jpg",
              alt: t("categories.translation.imageAlt"),
              title: t("categories.translation.title"),
              description: t("categories.translation.description"),
            },
          ]
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((c, idx) => (
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

      {/* Perfect for Every Service Type */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("perfectFor.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("perfectFor.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("perfectFor.freelancers.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("perfectFor.freelancers.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {freelancerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
              <Link href="/freelancer/freelancer">
                <Button className="w-full mt-4">
                  {t("perfectFor.freelancers.moreBenefits")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("perfectFor.projectOwners.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("perfectFor.projectOwners.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projectOwnerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
              <Link href="/freelancer/project-owner">
                <Button className="w-full mt-4">
                  {t("perfectFor.projectOwners.moreBenefits")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t("cta.startEscrow")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/freelancer/workflow">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                {t("cta.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SectionGroup>
  )
}
