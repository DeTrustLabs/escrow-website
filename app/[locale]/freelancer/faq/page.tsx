import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Shield, Clock, DollarSign, Users } from "lucide-react"
import { Hero } from "@/components/ui/hero"
import SectionGroup from "@/components/ui/section-group"
import CTASection from "@/components/ui/cta"
import { getSSRTranslations } from "@/lib/i18n-ssr"

export default async function FreelancerFAQPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { t } = await getSSRTranslations("freelancer.faq", params)

  return (
    <SectionGroup>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* FAQ Categories */}
      <section>
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
                    name: t("categories.security.name"),
                    icon: Shield,
                    count: t("categories.security.count"),
                  },
                  {
                    name: t("categories.process.name"),
                    icon: Clock,
                    count: t("categories.process.count"),
                  },
                  {
                    name: t("categories.payments.name"),
                    icon: DollarSign,
                    count: t("categories.payments.count"),
                  },
                  {
                    name: t("categories.freelance.name"),
                    icon: Users,
                    count: t("categories.freelance.count"),
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
                      {t("sections.gettingStarted.questions.q1.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.gettingStarted.questions.q1.answer")}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.gettingStarted.questions.q2.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.gettingStarted.questions.q2.answer")}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.gettingStarted.questions.q3.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.gettingStarted.questions.q3.answer")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Security & Safety */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>{t("sections.security.title")}</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="security-1"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.security.questions.q1.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.security.questions.q1.answer")}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="security-2"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.security.questions.q2.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.security.questions.q2.answer")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Process & Timeline */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>{t("sections.process.title")}</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="process-1"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.process.questions.q1.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.process.questions.q1.answer")}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="process-2"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.process.questions.q2.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.process.questions.q2.answer")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Payments & Fees */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>{t("sections.payments.title")}</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="payment-1"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.payments.questions.q1.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.payments.questions.q1.answer")}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="payment-2"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.payments.questions.q2.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.payments.questions.q2.answer")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Freelance Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>{t("sections.freelance.title")}</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="freelance-1"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.freelance.questions.q1.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.freelance.questions.q1.answer")}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="freelance-2"
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {t("sections.freelance.questions.q2.question")}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t("sections.freelance.questions.q2.answer")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primary={{
          label: t("cta.contactButton"),
          href: "/freelancer/contacts",
        }}
        secondary={{
          label: t("cta.startProjectButton"),
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          newTab: true,
        }}
      />
    </SectionGroup>
  )
}
