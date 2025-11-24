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
  CheckCircle,
  Users,
  MessageSquare,
  BookOpen,
  Code,
  Globe,
  Github,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { getSSRTranslationsWithArrays } from "@/lib/i18n-ssr"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"

export default async function CommunityPage({
  params,
}: PageProps<"/[locale]/community">) {
  const { t, arrays } = await getSSRTranslationsWithArrays(
    "community",
    [
      { path: "community.gettingStarted.users.benefits", key: "userBenefits" },
      {
        path: "community.gettingStarted.developers.benefits",
        key: "developerBenefits",
      },
    ],
    params
  )

  const userBenefits = arrays.userBenefits || []
  const developerBenefits = arrays.developerBenefits || []

  return (
    <SectionGroup>
      <Hero
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        primaryButton={{
          label: t("hero.primaryButton"),
          href: "https://app.escrow-protocol.com/",
        }}
        secondaryButton={{
          label: t("hero.secondaryButton"),
          href: "#discord-community",
          variant: "outline",
        }}
        trustIndicators={[
          { text: t("hero.trustIndicators.nonCustodial") },
          { text: t("hero.trustIndicators.openSource") },
          { text: t("hero.trustIndicators.audited") },
          { text: t("hero.trustIndicators.availability") },
        ]}
        withBadge
      />

      {/* Sections */}
      {/* Community Resources */}
      <section id="discord-community">
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
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("resources.discord.title")}</CardTitle>
              <CardDescription>
                {t("resources.discord.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://discord.gg/YourDiscordInvite">
                <Button className="w-full">
                  {t("resources.discord.button")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("resources.docs.title")}</CardTitle>
              <CardDescription>
                {t("resources.docs.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t("resources.docs.button")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Github className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("resources.github.title")}</CardTitle>
              <CardDescription>
                {t("resources.github.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t("resources.github.button")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Protocol Information */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("protocol.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("protocol.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("protocol.smartContracts.title")}</CardTitle>
              <CardDescription>
                {t("protocol.smartContracts.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("protocol.globalAccess.title")}</CardTitle>
              <CardDescription>
                {t("protocol.globalAccess.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{t("protocol.multiSignature.title")}</CardTitle>
              <CardDescription>
                {t("protocol.multiSignature.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("gettingStarted.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("gettingStarted.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("gettingStarted.users.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("gettingStarted.users.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {userBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
              <Link href="https://app.escrow-protocol.com/">
                <Button className="w-full mt-4">
                  {t("gettingStarted.users.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("gettingStarted.developers.title")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("gettingStarted.developers.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {developerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                {t("gettingStarted.developers.button")}
              </Button>
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
          href: "https://discord.gg/YourDiscordInvite",
          newTab: true,
        }}
        secondary={{
          label: t("cta.secondaryButton"),
          href: "https://app.escrow-protocol.com/",
          newTab: true,
        }}
      />
    </SectionGroup>
  )
}
