import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/hero"
import { Mail, ArrowRight, UserPlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import SectionGroup from "@/components/section-group"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("support")

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: [
      "escrow support",
      "early access",
      "contact us",
      "help center",
      "customer support",
      "technical support",
    ],
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
  }
}

export default async function SupportPage() {
  const t = await getTranslations("support")

  return (
    <>
      <SectionGroup>
        <Hero
          badge={t("hero.badge")}
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
        />

        <section>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <UserPlus className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">
                  {t("hero.form.title")}
                </CardTitle>
                <CardDescription>{t("hero.form.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="accessFirstName"
                        className="block text-sm font-medium mb-2"
                      >
                        {t("hero.form.firstName")}
                      </label>
                      <Input
                        id="accessFirstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="accessLastName"
                        className="block text-sm font-medium mb-2"
                      >
                        {t("hero.form.lastName")}
                      </label>
                      <Input
                        id="accessLastName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="accessEmail"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("hero.form.email")}
                    </label>
                    <Input
                      id="accessEmail"
                      type="email"
                      placeholder="Enter your business email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("hero.form.company")}
                    </label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div>
                    <label
                      htmlFor="userType"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("hero.form.userType")}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exporter">
                          {t("hero.form.userTypes.exporter")}
                        </SelectItem>
                        <SelectItem value="importer">
                          {t("hero.form.userTypes.importer")}
                        </SelectItem>
                        <SelectItem value="trade-advisor">
                          {t("hero.form.userTypes.tradeAdvisor")}
                        </SelectItem>
                        <SelectItem value="freelancer">
                          {t("hero.form.userTypes.freelancer")}
                        </SelectItem>
                        <SelectItem value="service-provider">
                          {t("hero.form.userTypes.serviceProvider")}
                        </SelectItem>
                        <SelectItem value="financial-institution">
                          {t("hero.form.userTypes.financialInstitution")}
                        </SelectItem>
                        <SelectItem value="developer">
                          {t("hero.form.userTypes.developer")}
                        </SelectItem>
                        <SelectItem value="other">
                          {t("hero.form.userTypes.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="businessDescription"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("hero.form.businessDescription")}
                    </label>
                    <textarea
                      id="businessDescription"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder={t("hero.form.businessPlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="monthlyVolume"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("hero.form.monthlyVolume")}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select volume range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">
                          {t("hero.form.volumes.under10k")}
                        </SelectItem>
                        <SelectItem value="10k-50k">
                          {t("hero.form.volumes.10k50k")}
                        </SelectItem>
                        <SelectItem value="50k-250k">
                          {t("hero.form.volumes.50k250k")}
                        </SelectItem>
                        <SelectItem value="250k-1m">
                          {t("hero.form.volumes.250k1m")}
                        </SelectItem>
                        <SelectItem value="over-1m">
                          {t("hero.form.volumes.over1m")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    {t("hero.form.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    {t("hero.form.footer")}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form and Newsletter */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.title")}</CardTitle>
                <CardDescription>{t("contact.description")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <form className="space-y-4 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        {t("contact.firstName")}
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        {t("contact.lastName")}
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.subject")}
                    </label>
                    <Input
                      id="subject"
                      placeholder={t("contact.subjectPlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>
                  <Button className="w-full mt-auto">
                    {t("contact.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-0 shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t("newsletter.title")}
                </CardTitle>
                <CardDescription>{t("newsletter.description")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <form className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <label
                      htmlFor="newsletterEmail"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("newsletter.email")}
                    </label>
                    <Input
                      id="newsletterEmail"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      {t("newsletter.interests")}
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm">
                          {t("newsletter.options.updates")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm">
                          {t("newsletter.options.guides")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm">
                          {t("newsletter.options.events")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm">
                          {t("newsletter.options.news")}
                        </span>
                      </label>
                    </div>
                  </div>
                  <Button className="w-full mt-auto">
                    {t("newsletter.button")}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t("cta.primaryButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                {t("cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SectionGroup>
    </>
  )
}
