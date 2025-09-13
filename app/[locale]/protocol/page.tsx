import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/ui/hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTASection from "@/components/ui/cta"
import { Metadata } from "next"
import {
  Code,
  Users,
  Vote,
  BookOpen,
  CheckCircle,
  Github,
  MessageSquare,
  Shield,
  Globe,
  Cpu,
} from "lucide-react"
import SectionGroup from "@/components/ui/section-group"
import {
  getSSRMetadataTranslations,
  getSSRTranslationsWithArrays,
} from "@/lib/i18n-ssr"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/protocol">): Promise<Metadata> {
  const t = await getSSRMetadataTranslations(params, "protocol.metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "escrow protocol",
      "smart contracts",
      "Internet Computer",
      "blockchain escrow",
      "decentralized escrow",
      "developer community",
      "trustless infrastructure",
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

export default async function ProtocolPage({
  params,
}: PageProps<"/[locale]/protocol">) {
  const { t, arrays } = await getSSRTranslationsWithArrays(
    "protocol",
    [
      {
        path: "protocol.protocolTab.mechanisms.automated.features",
        key: "automatedFeatures",
      },
      {
        path: "protocol.protocolTab.mechanisms.advanced.features",
        key: "advancedFeatures",
      },
      {
        path: "protocol.developersTab.integration.widget.features",
        key: "widgetIntegrationFeatures",
      },
      {
        path: "protocol.developersTab.integration.custom.features",
        key: "customIntegrationFeatures",
      },
    ],
    params
  )

  const {
    automatedFeatures = [],
    advancedFeatures = [],
    widgetIntegrationFeatures = [],
    customIntegrationFeatures = [],
  } = arrays

  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        primaryButton={{ label: t("hero.primaryButton") }}
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

      {/* Tabs Section */}
      <section>
        <Tabs defaultValue="community" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="protocol">{t("tabs.protocol")}</TabsTrigger>
            <TabsTrigger value="community">{t("tabs.community")}</TabsTrigger>
            <TabsTrigger value="developers">{t("tabs.developers")}</TabsTrigger>
          </TabsList>

          <TabsContent value="protocol" className="mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("protocolTab.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("protocolTab.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Cpu className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>
                    {t("protocolTab.features.canister.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("protocolTab.features.canister.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>
                    {t("protocolTab.features.chainFusion.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("protocolTab.features.chainFusion.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>
                    {t("protocolTab.features.crypto.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("protocolTab.features.crypto.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                {t("protocolTab.mechanisms.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      {t("protocolTab.mechanisms.automated.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {automatedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      {t("protocolTab.mechanisms.advanced.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {advancedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-12" id="community">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("communityTab.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("communityTab.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("communityTab.discord.title")}</CardTitle>
                  <CardDescription>
                    {t("communityTab.discord.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://discord.gg/Gdz5zFfYXjOpen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full">
                      {t("communityTab.discord.button")}
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Vote className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("communityTab.governance.title")}</CardTitle>
                  <CardDescription>
                    {t("communityTab.governance.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t("communityTab.governance.button")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("communityTab.telegram.title")}</CardTitle>
                  <CardDescription>
                    {t("communityTab.telegram.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://t.me/your-telegram-group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      {t("communityTab.telegram.button")}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="developers" className="mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("developersTab.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("developersTab.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("developersTab.api.title")}</CardTitle>
                  <CardDescription>
                    {t("developersTab.api.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    {t("developersTab.api.button")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Github className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("developersTab.github.title")}</CardTitle>
                  <CardDescription>
                    {t("developersTab.github.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t("developersTab.github.button")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("developersTab.guides.title")}</CardTitle>
                  <CardDescription>
                    {t("developersTab.guides.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t("developersTab.guides.button")}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                {t("developersTab.integration.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      {t("developersTab.integration.widget.title")}
                    </CardTitle>
                    <CardDescription>
                      {t("developersTab.integration.widget.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {widgetIntegrationFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      {t("developersTab.integration.custom.title")}
                    </CardTitle>
                    <CardDescription>
                      {t("developersTab.integration.custom.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {customIntegrationFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{ label: t("cta.primaryButton"), href: "/integrations" }}
        secondary={{ label: t("cta.secondaryButton"), href: "/community" }}
      />
    </SectionGroup>
  )
}
