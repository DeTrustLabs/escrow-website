"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { useTranslations, useMessages } from "next-intl"
import { getMessageArray } from "@/lib/i18n-arrays"

export default function ImporterBenefitsClient() {
  const t = useTranslations("trade.importerBenefits")
  const messages = useMessages()
  const beforePaymentBenefits = getMessageArray(
    messages,
    "trade.importerBenefits.protection.beforePayment.benefits"
  )
  const afterDeliveryBenefits = getMessageArray(
    messages,
    "trade.importerBenefits.protection.afterDelivery.benefits"
  )

  const handleNavClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="px-4 py-2 mb-6">
              {t("hero.badge")}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-4">
                  {t("hero.startEscrow")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/workflow" onClick={handleNavClick}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                >
                  {t("hero.learnHowItWorks")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src="/professional-middle-aged-british-businessman-with-.png"
                    alt={t("testimonials.michael.name")}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
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
                  <img
                    src="/professional-middle-aged-italian-businesswoman-wit.png"
                    alt={t("testimonials.isabella.name")}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
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
        </div>
      </section>

      {/* Challenges Importers Face section with accordion */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
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

              <AccordionItem
                value="high-fees"
                className="border rounded-lg px-6"
              >
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
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
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
                <CardTitle>
                  {t("keyBenefits.qualityInspection.title")}
                </CardTitle>
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
                <CardTitle>
                  {t("keyBenefits.disputeResolution.title")}
                </CardTitle>
                <CardDescription>
                  {t("keyBenefits.disputeResolution.description")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Protection for Importers section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
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
                <Link href="/workflow">
                  <Button
                    className="w-full bg-primary hover:bg-primary/80 text-white"
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
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="py-20">
        <div className="container">
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
                  {t("cta.startEscrow")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/contacts">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                >
                  {t("cta.talkToAdvisor")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
