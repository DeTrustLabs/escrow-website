import type { Metadata } from "next"
import SectionGroup from "@/components/ui/section-group"
import { getSSRMetadataTranslations, getSSRTranslations } from "@/lib/i18n-ssr"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/ui/hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  CheckCircle,
  Shield,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  Zap,
  AlertTriangle,
  HandHeart,
  Timer,
  CreditCard,
  Scale,
  Banknote,
} from "lucide-react"
import { AppImage } from "@/components/app-image"
import CTASection from "@/components/ui/cta"
import { withLocale } from "@/lib/urls"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/freelancer">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(
    params,
    "freelancer.freelancerPage.metadata"
  )
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: t("canonical"),
    },
  }
}

export default async function FreelancerFreelancerPage({
  params,
}: PageProps<"/[locale]/freelancer">) {
  const { t, locale } = await getSSRTranslations(
    "freelancer.freelancerPage",
    params
  )

  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        primaryButton={{
          label: t("hero.primaryButton"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondaryButton={{
          label: t("hero.secondaryButton"),
          href: withLocale(locale, "/freelancer/workflow"),
          variant: "outline",
        }}
      />

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/freelancer-testimonial-1.jpg"
                  alt={t("testimonials.sarah.name")}
                  width={80}
                  height={80}
                  rounded
                  variant="avatar"
                  className="w-20 h-20 object-cover flex-shrink-0 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.sarah.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.sarah.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;{t("testimonials.sarah.quote")}&quot;
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/freelancer-testimonial-2.jpg"
                  alt={t("testimonials.marcus.name")}
                  width={80}
                  height={80}
                  rounded
                  variant="avatar"
                  className="w-20 h-20 object-cover flex-shrink-0 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.marcus.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.marcus.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;{t("testimonials.marcus.quote")}&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Freelancers Face */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("challenges.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("challenges.subtitle")}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="non-payment-risk"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.nonPaymentRisk.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.nonPaymentRisk.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="cash-flow-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Banknote className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.cashFlowIssues.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.cashFlowIssues.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="payment-delays"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Timer className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.paymentDelays.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.paymentDelays.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="platform-fees"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.platformFees.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.platformFees.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="trust-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <HandHeart className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.trustIssues.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.trustIssues.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="dispute-resolution"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Scale className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.disputeResolution.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.disputeResolution.description")}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Why Freelancers Choose Digital Escrow */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("whyChooseEscrow.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("whyChooseEscrow.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("whyChooseEscrow.paymentSecured.title")}</CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.paymentSecured.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("whyChooseEscrow.immediatePayment.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.immediatePayment.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("whyChooseEscrow.confidenceWithClients.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.confidenceWithClients.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("whyChooseEscrow.milestonePayments.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.milestonePayments.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("whyChooseEscrow.lowFees.title")}</CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.lowFees.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Scale className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("whyChooseEscrow.fairDisputeResolution.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.fairDisputeResolution.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Complete Protection for Freelancers */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("completeProtection.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("completeProtection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("completeProtection.beforeStarting.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("completeProtection.beforeStarting.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {t
                .raw("completeProtection.beforeStarting.benefits")
                .map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("completeProtection.afterCompletion.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("completeProtection.afterCompletion.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {t
                .raw("completeProtection.afterCompletion.benefits")
                .map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t("callToAction.title")}
        subtitle={t("callToAction.subtitle")}
        primary={{
          label: t("callToAction.startEscrow"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          newTab: true,
        }}
        secondary={{
          label: t("callToAction.talkToSpecialist"),
          href: withLocale(locale, "/freelancer/contacts"),
        }}
      />
    </SectionGroup>
  )
}
