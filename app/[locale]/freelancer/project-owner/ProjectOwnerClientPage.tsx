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
  Scale,
  Eye,
} from "lucide-react"
import { AppImage } from "@/components/app-image"
import CTASection from "@/components/ui/cta"
import { withLocale } from "@/lib/urls"
import { getSSRTranslations } from "@/lib/i18n-ssr"

export default async function ProjectOwnerClientPage({
  locale,
}: {
  locale: string
}) {
  const { t } = await getSSRTranslations("freelancer.projectOwner", locale)

  return (
    <>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        primaryButton={{
          label: t("hero.primaryButton.label"),
          href: t("hero.primaryButton.href"),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondaryButton={{
          label: t("hero.secondaryButton.label"),
          href: t("hero.secondaryButton.href"),
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
                  src="/images/project-owner-testimonial-1.jpg"
                  alt={t("testimonials.testimonial1.imageAlt")}
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.testimonial1.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.testimonial1.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;{t("testimonials.testimonial1.quote")}&quot;
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/project-owner-testimonial-2.jpg"
                  alt={t("testimonials.testimonial2.imageAlt")}
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.testimonial2.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.testimonial2.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;{t("testimonials.testimonial2.quote")}&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Project Owners Face */}
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
            value="non-delivery-risk"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.nonDeliveryRisk.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.nonDeliveryRisk.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="quality-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.qualityIssues.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.qualityIssues.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="project-delays"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Timer className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.projectDelays.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.projectDelays.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="communication-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.communicationIssues.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.communicationIssues.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="trust-verification"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <HandHeart className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  {t("challenges.trustVerification.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.trustVerification.description")}
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

      {/* Why Project Owners Choose Digital Escrow */}
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
              <CardTitle>
                {t("whyChooseEscrow.payOnlyCompleted.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.payOnlyCompleted.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("whyChooseEscrow.qualityReview.title")}</CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.qualityReview.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("whyChooseEscrow.confidenceNewFreelancers.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.confidenceNewFreelancers.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("whyChooseEscrow.milestoneControl.title")}
              </CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.milestoneControl.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("whyChooseEscrow.lowerCosts.title")}</CardTitle>
              <CardDescription>
                {t("whyChooseEscrow.lowerCosts.description")}
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

      {/* Complete Protection for Project Owners */}
      <section className="py-20 bg-gray-50">
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
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("completeProtection.duringDevelopment.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("completeProtection.duringDevelopment.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                t("completeProtection.duringDevelopment.benefits.0"),
                t("completeProtection.duringDevelopment.benefits.1"),
                t("completeProtection.duringDevelopment.benefits.2"),
                t("completeProtection.duringDevelopment.benefits.3"),
              ].map((benefit, index) => (
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
                {t("completeProtection.afterApproval.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("completeProtection.afterApproval.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                t("completeProtection.afterApproval.benefits.0"),
                t("completeProtection.afterApproval.benefits.1"),
                t("completeProtection.afterApproval.benefits.2"),
                t("completeProtection.afterApproval.benefits.3"),
              ].map((benefit, index) => (
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
          href: withLocale(locale, "/contacts"),
        }}
      />
    </>
  )
}
