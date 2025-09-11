import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  HelpCircle,
  Shield,
  Clock,
  DollarSign,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trade.faq.metadata")

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function FAQPage() {
  const t = await getTranslations("trade.faq")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t("categories.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    {
                      name: t("categories.gettingStarted.name"),
                      icon: HelpCircle,
                      count: t("categories.gettingStarted.count"),
                    },
                    {
                      name: t("categories.securitySafety.name"),
                      icon: Shield,
                      count: t("categories.securitySafety.count"),
                    },
                    {
                      name: t("categories.processTimeline.name"),
                      icon: Clock,
                      count: t("categories.processTimeline.count"),
                    },
                    {
                      name: t("categories.paymentsFees.name"),
                      icon: DollarSign,
                      count: t("categories.paymentsFees.count"),
                    },
                    {
                      name: t("categories.internationalTrade.name"),
                      icon: Globe,
                      count: t("categories.internationalTrade.count"),
                    },
                  ].map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Getting Started */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <HelpCircle className="h-6 w-6 text-primary" />
                    <span>{t("sections.gettingStarted.title")}</span>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="item-1"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.gettingStarted.questions.whatIsEscrow.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.gettingStarted.questions.whatIsEscrow.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.gettingStarted.questions.howToGetStarted.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.gettingStarted.questions.howToGetStarted.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.gettingStarted.questions.tradeTypes.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.gettingStarted.questions.tradeTypes.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Security & Safety */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>{t("sections.securitySafety.title")}</span>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="security-1"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.securitySafety.questions.fundSecurity.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.securitySafety.questions.fundSecurity.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="security-2"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.securitySafety.questions.disputeResolution.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.securitySafety.questions.disputeResolution.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Process & Timeline */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>{t("sections.processTimeline.title")}</span>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="process-1"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.processTimeline.questions.processDuration.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.processTimeline.questions.processDuration.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="process-2"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.processTimeline.questions.fundRelease.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.processTimeline.questions.fundRelease.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Payments & Fees */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <span>{t("sections.paymentsFees.title")}</span>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="payment-1"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t("sections.paymentsFees.questions.fees.question")}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t("sections.paymentsFees.questions.fees.answer")}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="payment-2"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.paymentsFees.questions.paymentMethods.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.paymentsFees.questions.paymentMethods.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* International Trade */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-primary" />
                    <span>{t("sections.internationalTrade.title")}</span>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="trade-1"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.internationalTrade.questions.supportedCountries.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.internationalTrade.questions.supportedCountries.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="trade-2"
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left">
                        {t(
                          "sections.internationalTrade.questions.customsRegulations.question"
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {t(
                          "sections.internationalTrade.questions.customsRegulations.answer"
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacts">
                <Button size="lg" className="text-lg px-8 py-4">
                  {t("cta.contactSupport")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                >
                  {t("cta.startTrade")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
