"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  MessageSquare,
  BookOpen,
  Code,
  Globe,
  Github,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations, useMessages } from "next-intl"
import { getMessageArray } from "@/lib/i18n-arrays"

export default function CommunityPage() {
  const t = useTranslations("community")
  const messages = useMessages()

  // Safely extract benefits arrays (empty array fallback prevents runtime errors)
  const userBenefits = getMessageArray(
    messages,
    "community.gettingStarted.users.benefits"
  )
  const developerBenefits = getMessageArray(
    messages,
    "community.gettingStarted.developers.benefits"
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              {t("hero.badge")}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/">
                <Button size="lg" className="text-lg px-8">
                  {t("hero.primaryButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
                onClick={() =>
                  document
                    .getElementById("discord-community")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.secondaryButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("resources.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("resources.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg" id="discord-community">
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
                <Button
                  variant="outline"
                  className="w-full bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                >
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
                <Button
                  variant="outline"
                  className="w-full bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                >
                  {t("resources.github.button")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protocol Information */}
      <section className="py-20">
        <div className="container">
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
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-50">
        <div className="container">
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
                <Link href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/">
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
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                >
                  {t("gettingStarted.developers.button")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://discord.gg/YourDiscordInvite">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  {t("cta.primaryButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  {t("cta.secondaryButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
