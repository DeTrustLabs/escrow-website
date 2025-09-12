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
  Code,
  Layers,
  Globe,
  CheckCircle,
  Building,
  CreditCard,
  FileText,
  Truck,
  Users,
  ShoppingCart,
  Database,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { getTranslations, getMessages } from "next-intl/server"
import { Metadata } from "next"
import { getMessageArray } from "@/lib/i18n-arrays"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("integrations.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "escrow integrations",
      "API integration",
      "developer tools",
      "blockchain integration",
      "payment solutions",
      "ecommerce integration",
      "financial services",
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

export default async function IntegrationsPage() {
  // Load both the translator and the full messages so we can safely extract arrays
  const [t, messages] = await Promise.all([
    getTranslations("integrations"),
    getMessages(),
  ])

  // Safely extracted arrays (empty array fallback avoids runtime errors)
  const ecosystemFeatures = getMessageArray(
    messages,
    "integrations.ecosystem.features"
  )
  const serviceProviderBenefits = getMessageArray(
    messages,
    "integrations.beneficiaries.serviceProviders.benefits"
  )
  const techCompanyBenefits = getMessageArray(
    messages,
    "integrations.beneficiaries.techCompanies.benefits"
  )

  return (
    <SectionGroup>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        badge={t("hero.badge")}
        primaryButton={{
          label: t("hero.primaryButton"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/",
        }}
        secondaryButton={{
          label: t("hero.secondaryButton"),
          variant: "outline",
        }}
        trustIndicators={[
          { text: t("hero.trustIndicators.nonCustodial") },
          { text: t("hero.trustIndicators.openSource") },
          { text: t("hero.trustIndicators.audited") },
          { text: t("hero.trustIndicators.availability") },
        ]}
      />

      {/* Open Ecosystem Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("ecosystem.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("ecosystem.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {ecosystemFeatures.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {ecosystemFeatures.slice(2, 4).map((feature, index) => (
              <div key={index + 2} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("access.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("access.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("access.methods.smartContract.title")}</CardTitle>
              <CardDescription>
                {t("access.methods.smartContract.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Layers className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("access.methods.api.title")}</CardTitle>
              <CardDescription>
                {t("access.methods.api.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("access.methods.frontend.title")}</CardTitle>
              <CardDescription>
                {t("access.methods.frontend.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Integration Possibilities */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("possibilities.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("possibilities.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <ShoppingCart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.ecommerce.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.ecommerce.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.kyc.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.kyc.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.invoice.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.invoice.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.tradeDocs.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.tradeDocs.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.financial.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.financial.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.escrow.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.escrow.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Truck className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.logistics.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.logistics.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Database className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.erp.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.erp.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CreditCard className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t("possibilities.items.payment.title")}</CardTitle>
              <CardDescription>
                {t("possibilities.items.payment.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Technical Resources */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("resources.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("resources.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("resources.items.api.title")}</CardTitle>
              <CardDescription>
                {t("resources.items.api.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/protocol">
                <Button className="w-full">
                  {t("resources.items.api.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Layers className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("resources.items.contracts.title")}</CardTitle>
              <CardDescription>
                {t("resources.items.contracts.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t("resources.items.contracts.button")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("resources.items.frontend.title")}</CardTitle>
              <CardDescription>
                {t("resources.items.frontend.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t("resources.items.frontend.button")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases for Integrators */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("beneficiaries.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("beneficiaries.serviceProviders.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("beneficiaries.serviceProviders.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {serviceProviderBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("beneficiaries.techCompanies.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("beneficiaries.techCompanies.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {techCompanyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{
          label: t("cta.primaryButton"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/",
          newTab: true,
        }}
        secondary={{
          label: t("cta.secondaryButton"),
          href: "/protocol#community",
        }}
        rounded="2xl"
        gradient="simple"
      />
    </SectionGroup>
  )
}
