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
  ArrowRight,
  CheckCircle,
  Handshake,
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  DollarSign,
  Smartphone,
  Lock,
  Unlock,
  Settings,
  User,
  Briefcase,
  ShieldIcon,
  Timer,
  Banknote,
} from "lucide-react"
import Link from "next/link"
import { SITE_URL } from "@/lib/urls"
import { AppImage } from "@/components/app-image"
import SectionGroup from "@/components/section-group"
import { useTranslations } from "next-intl"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("freelancer.workflow.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: { canonical: `${SITE_URL}${t("canonical")}` },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${SITE_URL}${t("canonical")}`,
    },
  }
}

export default function FreelancerWorkflowPage() {
  const t = useTranslations("freelancer.workflow")

  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        trustIndicators={[
          {
            text: t("hero.trustIndicators.0.text"),
            icon: <ShieldIcon className="h-4 w-4 text-primary" />,
          },
          {
            text: t("hero.trustIndicators.1.text"),
            icon: <Timer className="h-4 w-4 text-primary" />,
          },
          {
            text: t("hero.trustIndicators.2.text"),
            icon: <Banknote className="h-4 w-4 text-primary" />,
          },
        ]}
      />

      {/* 4 Steps of the Escrow */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("steps.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("steps.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("steps.step1.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("steps.step1.description")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("steps.step2.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("steps.step2.description")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("steps.step3.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("steps.step3.description")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("steps.step4.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("steps.step4.description")}
            </p>
          </div>
        </div>
      </section>

      {/* How a Digital Escrow Works */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <AppImage
            src="/images/digital-escrow-freelance-process-illustration.jpg"
            alt="Digital Escrow Process Illustration for Freelance Projects"
            width={900}
            height={600}
            rounded
            shadow
            priority
            variant="content"
            className="max-w-3xl w-full h-auto"
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-12">
          {/* Step 1: Onboarding */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.onboarding.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.onboarding.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.onboarding.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.onboarding.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.onboarding.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Project Agreement */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.projectAgreement.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.projectAgreement.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.projectAgreement.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.projectAgreement.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.projectAgreement.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Secure Funding */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.secureFunding.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.secureFunding.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.secureFunding.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.secureFunding.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.secureFunding.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Work Delivery */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.workDelivery.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.workDelivery.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.workDelivery.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.workDelivery.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.workDelivery.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Payment Release */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Unlock className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.paymentRelease.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.paymentRelease.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.paymentRelease.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.paymentRelease.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.paymentRelease.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Project Adjustments */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Settings className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.projectAdjustments.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.projectAdjustments.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.projectAdjustments.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.projectAdjustments.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.projectAdjustments.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7: Dispute Resolution */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.disputeResolution.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.disputeResolution.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.disputeResolution.features.0")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.disputeResolution.features.1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        {t("howItWorks.disputeResolution.features.2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Release Mechanisms */}
      <section id="flexible-payment-release-options" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("flexibleRelease.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("flexibleRelease.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("flexibleRelease.clientApproval.title")}
              </CardTitle>
              <CardDescription>
                {t("flexibleRelease.clientApproval.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <User className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("flexibleRelease.thirdPartyReview.title")}
              </CardTitle>
              <CardDescription>
                {t("flexibleRelease.thirdPartyReview.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("flexibleRelease.milestoneCompletion.title")}
              </CardTitle>
              <CardDescription>
                {t("flexibleRelease.milestoneCompletion.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Handshake className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("flexibleRelease.mutualAgreement.title")}
              </CardTitle>
              <CardDescription>
                {t("flexibleRelease.mutualAgreement.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("disputeResolutionSection.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("disputeResolutionSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          <Card className="border-0 shadow-lg h-full">
            <CardHeader>
              <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
              <CardTitle className="text-2xl">
                {t("disputeResolutionSection.whenDisputesOccur.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("disputeResolutionSection.whenDisputesOccur.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t("disputeResolutionSection.whenDisputesOccur.description")}
              </p>
              <div className="space-y-2">
                {[
                  t("disputeResolutionSection.whenDisputesOccur.features.0"),
                  t("disputeResolutionSection.whenDisputesOccur.features.1"),
                  t("disputeResolutionSection.whenDisputesOccur.features.2"),
                  t("disputeResolutionSection.whenDisputesOccur.features.3"),
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg h-full">
            <CardHeader>
              <Scale className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                {t("disputeResolutionSection.resolutionOptions.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("disputeResolutionSection.resolutionOptions.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t("disputeResolutionSection.resolutionOptions.description")}
              </p>
              <div className="space-y-2">
                {[
                  t("disputeResolutionSection.resolutionOptions.features.0"),
                  t("disputeResolutionSection.resolutionOptions.features.1"),
                  t("disputeResolutionSection.resolutionOptions.features.2"),
                  t("disputeResolutionSection.resolutionOptions.features.3"),
                ].map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Handshake className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{option}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">
                {t("disputeResolutionSection.arbitratorNote.title")}
              </h4>
              <p className="text-yellow-700">
                {t("disputeResolutionSection.arbitratorNote.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="digital-payments-for-freelancers" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("digitalPayments.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("digitalPayments.subtitle")}
          </p>
        </div>

        <div className="space-y-16">
          {/* What Are Digital Currencies */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <AppImage
                src="/images/stablecoins-overview.png"
                alt="USD Stablecoins and Digital Currencies Overview"
                width={480}
                height={480}
                rounded
                shadow
                variant="card"
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("digitalPayments.whatAreCurrencies.title")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.whatAreCurrencies.description")}
              </p>
            </div>
          </div>

          {/* What Is a Wallet */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <AppImage
                src="/images/digital-wallet-interface.png"
                alt="Digital Wallet Interface showing USDT, USDC, and other stablecoin balances"
                width={480}
                height={480}
                rounded
                shadow
                variant="card"
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("digitalPayments.whatIsWallet.title")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.whatIsWallet.description")}
              </p>
            </div>
          </div>

          {/* How can I change FIAT into Stablecoins */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <AppImage
                src="/images/fiat-conversion-process.png"
                alt="FIAT to Digital Currency Conversion Process"
                width={480}
                height={480}
                rounded
                shadow
                variant="card"
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("digitalPayments.fiatConversion.title")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.fiatConversion.description")}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.fiatConversion.exchanges")}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.fiatConversion.onRamp")}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.fiatConversion.process")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("callToAction.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("callToAction.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-4">
                {t("callToAction.startEscrow")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/freelancer/contacts">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent"
              >
                {t("callToAction.talkToAdvisor")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SectionGroup>
  )
}
