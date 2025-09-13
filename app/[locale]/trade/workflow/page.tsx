import { getSSRTranslationsWithArrays } from "@/lib/i18n-ssr"
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
  Handshake,
  Package,
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Smartphone,
  Lock,
  Truck,
  Unlock,
  Settings,
  ShieldIcon,
  ZapIcon,
  DollarSign,
} from "lucide-react"
import { AppImage } from "@/components/app-image"
import CTASection from "@/components/ui/cta"
import { withLocale } from "@/lib/urls"
import { getSSRMetadataTranslations } from "@/lib/i18n-ssr"
import SectionGroup from "@/components/ui/section-group"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/trade/workflow">) {
  const t = await getSSRMetadataTranslations(params, "trade.workflow.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export async function WorkflowClient({ locale }: { locale: string }) {
  const { t, arrays } = await getSSRTranslationsWithArrays(
    "trade.workflow",
    [
      {
        path: "trade.workflow.howItWorks.steps.onboarding.features",
        key: "onboardingFeatures",
      },
      {
        path: "trade.workflow.howItWorks.steps.escrowAgreement.features",
        key: "escrowAgreementFeatures",
      },
      {
        path: "trade.workflow.howItWorks.steps.verifiedFunding.features",
        key: "verifiedFundingFeatures",
      },
      {
        path: "trade.workflow.howItWorks.steps.delivery.features",
        key: "deliveryFeatures",
      },
      {
        path: "trade.workflow.howItWorks.steps.releaseOfFunds.features",
        key: "releaseOfFundsFeatures",
      },
      {
        path: "trade.workflow.howItWorks.steps.adjustments.features",
        key: "adjustmentsFeatures",
      },
      {
        path: "trade.workflow.howItWorks.steps.dispute.features",
        key: "disputeFeatures",
      },
      {
        path: "trade.workflow.disputeResolution.whenDisputesOccur.features",
        key: "disputeWhenOccurFeatures",
      },
      {
        path: "trade.workflow.disputeResolution.resolutionOptions.features",
        key: "disputeResolutionOptionsFeatures",
      },
    ],
    locale
  )
  const {
    onboardingFeatures = [],
    escrowAgreementFeatures = [],
    verifiedFundingFeatures = [],
    deliveryFeatures = [],
    releaseOfFundsFeatures = [],
    adjustmentsFeatures = [],
    disputeFeatures = [],
    disputeWhenOccurFeatures = [],
    disputeResolutionOptionsFeatures = [],
  } = arrays

  return (
    <SectionGroup>
      <Hero
        className="bg-gradient-to-br from-primary/5 to-transparent"
        badge={t("hero.badge")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        trustIndicators={[
          {
            text: t("hero.trustIndicators.0"),
            icon: <ShieldIcon className="h-4 w-4 text-primary" />,
          },
          {
            text: t("hero.trustIndicators.1"),
            icon: <ZapIcon className="h-4 w-4 text-primary" />,
          },
          {
            text: t("hero.trustIndicators.2"),
            icon: <DollarSign className="h-4 w-4 text-primary" />,
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
              <Package className="h-10 w-10 text-primary" />
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
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              {t("howItWorks.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </div>
          <AppImage
            src="/images/escrow-process-illustration.png"
            alt="Digital Escrow Process Illustration"
            variant="content"
            width={600}
            height={400}
            rounded
            shadow
            priority
            quality={85}
            className="w-full h-auto max-w-3xl"
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-12">
          {/* Step 1: Onboarding */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 1 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.onboarding.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.onboarding.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {onboardingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Escrow Agreement */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 2 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.escrowAgreement.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.escrowAgreement.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {escrowAgreementFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Verified Funding */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 3 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.verifiedFunding.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.verifiedFunding.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {verifiedFundingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Delivery */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 4 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.delivery.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.delivery.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {deliveryFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Release of Funds */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 5 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Unlock className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.releaseOfFunds.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.releaseOfFunds.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {releaseOfFundsFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Adjustments */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 6 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Settings className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.adjustments.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.adjustments.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {adjustmentsFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7: Dispute */}
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            aria-label="step 7 of digital escrow process"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("howItWorks.steps.dispute.title")}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    {t("howItWorks.steps.dispute.description")}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {disputeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Release Mechanisms */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("releaseMechanisms.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("releaseMechanisms.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Package className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("releaseMechanisms.mechanisms.deliveryConfirmation.title")}
              </CardTitle>
              <CardDescription>
                {t(
                  "releaseMechanisms.mechanisms.deliveryConfirmation.description"
                )}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("releaseMechanisms.mechanisms.thirdPartyVerification.title")}
              </CardTitle>
              <CardDescription>
                {t(
                  "releaseMechanisms.mechanisms.thirdPartyVerification.description"
                )}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("releaseMechanisms.mechanisms.documentBased.title")}
              </CardTitle>
              <CardDescription>
                {t("releaseMechanisms.mechanisms.documentBased.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Handshake className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">
                {t("releaseMechanisms.mechanisms.mutualAgreement.title")}
              </CardTitle>
              <CardDescription>
                {t("releaseMechanisms.mechanisms.mutualAgreement.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Dispute Resolution Process */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {t("disputeResolution.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("disputeResolution.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          <Card className="border-0 shadow-lg h-full">
            <CardHeader>
              <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
              <CardTitle className="text-2xl">
                {t("disputeResolution.whenDisputesOccur.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("disputeResolution.whenDisputesOccur.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t("disputeResolution.whenDisputesOccur.description")}
              </p>
              <div className="space-y-2">
                {disputeWhenOccurFeatures.map((feature, index) => (
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
                {t("disputeResolution.resolutionOptions.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("disputeResolution.resolutionOptions.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t("disputeResolution.resolutionOptions.description")}
              </p>
              <div className="space-y-2">
                {disputeResolutionOptionsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Handshake className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
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
                {t("disputeResolution.arbitratorNote.title")}
              </h4>
              <p className="text-yellow-700">
                {t("disputeResolution.arbitratorNote.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Currencies and Exchange Providers */}
      <section aria-label="digital payments information">
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
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
            aria-label="digital currencies explanation"
          >
            <div className="md:col-span-2 flex justify-center">
              <AppImage
                src="/images/stablecoins-overview.png"
                alt="USD Stablecoins and Digital Currencies Overview"
                width={480}
                height={480}
                variant="card"
                rounded
                shadow
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("digitalPayments.digitalCurrencies.title")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.digitalCurrencies.description")}
              </p>
            </div>
          </div>

          {/* What Is a Wallet */}
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
            aria-label="digital wallet for secure trade"
          >
            <div className="md:col-span-2 flex justify-center">
              <AppImage
                src="/images/digital-wallet-interface.png"
                alt="Digital Wallet Interface showing USDT, USDC, and other stablecoin balances"
                width={480}
                height={480}
                variant="card"
                rounded
                shadow
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("digitalPayments.digitalWallet.title")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.digitalWallet.description")}
              </p>
            </div>
          </div>

          {/* How can I change FIAT into Stablecoins */}
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
            aria-label="converting fiat to stablecoins"
          >
            <div className="md:col-span-2 flex justify-center">
              <AppImage
                src="/images/fiat-conversion-process.png"
                alt="FIAT to Digital Currency Conversion Process"
                width={480}
                height={480}
                variant="card"
                rounded
                shadow
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("digitalPayments.fiatConversion.title")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                {t("digitalPayments.fiatConversion.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
