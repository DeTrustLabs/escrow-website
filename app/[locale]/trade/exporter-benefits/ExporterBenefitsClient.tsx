"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
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
import Link from "next/link"
import { useTranslations, useMessages } from "next-intl"
import { getMessageArray } from "@/lib/i18n-arrays"
import { AppImage } from "@/components/app-image"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"

export default function ExporterBenefitsClient() {
  const t = useTranslations("trade.exporterBenefits")
  const messages = useMessages()
  const beforeShippingBenefits = getMessageArray(
    messages,
    "trade.exporterBenefits.protection.beforeShipping.benefits"
  )
  const afterDeliveryBenefits = getMessageArray(
    messages,
    "trade.exporterBenefits.protection.afterDelivery.benefits"
  )

  return (
    <>
      <Hero
        className="bg-gradient-to-br from-primary/5 to-transparent"
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        titleClassName="text-5xl lg:text-7xl font-bold tracking-tight mb-8"
        maxWidth="max-w-5xl"
        primaryButton={{
          label: t("hero.startEscrow"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondaryButton={{
          label: t("hero.learnHowItWorks"),
          href: "/workflow",
          variant: "outline",
        }}
      />

      {/* Testimonial Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/professional-middle-aged-african-businessman-in-su.png"
                  alt={t("testimonials.samuel.name")}
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.samuel.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.samuel.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                {t("testimonials.samuel.quote")}
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/maria-andersson-professional.png"
                  alt={t("testimonials.maria.name")}
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.maria.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.maria.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                {t("testimonials.maria.quote")}
              </blockquote>
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges Exporters Face section with accordion */}
      <Section>
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
                <AlertTriangle
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
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
            value="liquidity-risk"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Banknote
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.liquidityRisk.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.liquidityRisk.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="payment-delays"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Timer
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
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

          <AccordionItem value="high-fees" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <CreditCard
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.highFees.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.highFees.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="trust-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <HandHeart
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
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
            value="letter-of-credit"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <FileText
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.letterOfCredit.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.letterOfCredit.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="dispute-resolution"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Scale
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
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
      </Section>

      {/* Key Benefits */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("keyBenefits.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("keyBenefits.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.paymentSecured.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.paymentSecured.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.fasterPayments.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.fasterPayments.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.businessGrowth.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.businessGrowth.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.automatedRelease.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.automatedRelease.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.lowerFees.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.lowerFees.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Scale className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.disputeResolution.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.disputeResolution.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* How It Protects Exporters */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("protection.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("protection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("protection.beforeShipping.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("protection.beforeShipping.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {beforeShippingBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </CardContent>
            <CardContent className="pt-0">
              <Link href="/workflow">
                <Button
                  className="w-full bg-primary hover:bg-primary/80 text-white"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100)
                  }}
                >
                  {t("protection.beforeShipping.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("protection.afterDelivery.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("protection.afterDelivery.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {afterDeliveryBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </CardContent>
            <CardContent className="pt-0">
              <Link href="/workflow">
                <Button
                  className="w-full bg-primary hover:bg-primary/80 text-white"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100)
                  }}
                >
                  {t("protection.afterDelivery.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-4">
                {t("cta.primaryButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/contacts">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent"
              >
                {t("cta.secondaryButton")}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
