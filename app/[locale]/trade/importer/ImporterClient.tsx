"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Shield,
  Eye,
  Clock,
  AlertTriangle,
  Globe,
  DollarSign,
  HandHeart,
  CheckCircle,
  Scale,
} from "lucide-react"
import Link from "next/link"
import { useLocale } from "next-intl"
import { withLocale } from "@/lib/urls"
import { AppImage } from "@/components/app-image"
import { Hero } from "@/components/ui/hero"
import { useTranslations, useMessages } from "next-intl"
import { getMessageArray } from "@/lib/i18n-arrays"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"

export default function ImporterClient() {
  const locale = useLocale()
  const t = useTranslations("trade.importer")
  const messages = useMessages()
  const beforePaymentBenefits = getMessageArray(
    messages,
    "trade.importer.protection.beforePayment.benefits"
  )
  const afterDeliveryBenefits = getMessageArray(
    messages,
    "trade.importer.protection.afterDelivery.benefits"
  )

  // no-op

  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        titleHighlight={t("hero.titleHighlight")}
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

      {/* Testimonial section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/professional-middle-aged-british-businessman-with-.png"
                  alt={t("testimonials.michael.name")}
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.michael.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.michael.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                {t("testimonials.michael.quote")}
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/professional-middle-aged-italian-businesswoman-wit.png"
                  alt={t("testimonials.isabella.name")}
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {t("testimonials.isabella.name")}
                  </h3>
                  <p className="text-gray-600">
                    {t("testimonials.isabella.role")}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                {t("testimonials.isabella.quote")}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Importers Face section with accordion */}
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
            value="prepayment-risk"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <AlertTriangle
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.prepaymentRisk.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.prepaymentRisk.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="quality-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Eye
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
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
            value="delayed-payments-delivery"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Clock
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.delayedPayments.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.delayedPayments.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="restricted-suppliers"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <HandHeart
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.restrictedSuppliers.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.restrictedSuppliers.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="pressure-to-pay"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <DollarSign
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.pressureToPay.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.pressureToPay.description")}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="high-fees" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <DollarSign
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
            value="supplier-reliability"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Globe
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">
                  {t("challenges.supplierReliability.title")}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                {t("challenges.supplierReliability.description")}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Key Benefits */}
      <section>
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
              <CardTitle>
                {t("keyBenefits.nonDeliveryProtection.title")}
              </CardTitle>
              <CardDescription>
                {t("keyBenefits.nonDeliveryProtection.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <CardTitle>
                {t("keyBenefits.conditionalPayments.title")}
              </CardTitle>
              <CardDescription>
                {t("keyBenefits.conditionalPayments.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.qualityInspection.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.qualityInspection.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("keyBenefits.globalAccess.title")}</CardTitle>
              <CardDescription>
                {t("keyBenefits.globalAccess.description")}
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
      </section>

      {/* Complete Protection for Importers section */}
      <section>
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
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("protection.beforePayment.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("protection.beforePayment.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {beforePaymentBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </CardContent>
            <CardContent className="pt-0">
              <Link href={withLocale(locale, "/trade/workflow")}>
                <Button
                  className="w-full"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100)
                  }}
                >
                  {t("protection.beforePayment.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("protection.afterDelivery.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("protection.afterDelivery.subtitle")}
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
              <Link href={withLocale(locale, "/trade/workflow")}>
                <Button
                  className="w-full"
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
      </section>

      {/* Call-to-action section */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{
          label: t("cta.startEscrow"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login",
          newTab: true,
        }}
        secondary={{
          label: t("cta.talkToAdvisor"),
          href: withLocale(locale, "/contacts"),
        }}
      />
    </SectionGroup>
  )
}
