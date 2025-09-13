import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ClientRoleSelect, ClientTradeTypeSelect } from "./ContactForm.client"

type BaseStrings = {
  contactForm: {
    title: string
    firstName: string
    firstNamePlaceholder: string
    lastName: string
    lastNamePlaceholder: string
    email: string
    emailPlaceholder: string
    company: string
    companyPlaceholder: string
    message: string
    messagePlaceholder: string
    submittingButton: string
    submitButton: string
    // Optional select controls
    role?: string
    rolePlaceholder?: string
    roles?: { freelancer: string; client: string; both: string }
    tradeType?: string
    tradeTypePlaceholder?: string
    tradeTypes?: { export: string; import: string; both: string }
  }
  contactInfo: {
    title: string
    emailTitle: string
    emailAddress: string
    emailDescription: string
  }
  newsletter: {
    title: string
    subtitle: string
    emailPlaceholder: string
    submittingButton: string
    submitButton: string
  }
}

type ContactFormProps = {
  strings: BaseStrings
  selectMode?: "role" | "tradeType"
  useUISelect?: boolean
  success?: { submitted?: "contact" | "newsletter" }
  onContactSubmit: (formData: FormData) => Promise<void>
  onNewsletterSubmit: (formData: FormData) => Promise<void>
}

export default function ContactForm({
  strings,
  selectMode,
  useUISelect = false,
  success,
  onContactSubmit,
  onNewsletterSubmit,
}: ContactFormProps) {
  return (
    <section>
      {/* Optional SSR success banner */}
      {success?.submitted === "contact" && (
        <div className="mb-6 rounded-md bg-green-50 p-4 text-green-800 border border-green-200">
          {strings.contactForm.submitButton}
        </div>
      )}
      {success?.submitted === "newsletter" && (
        <div className="mb-6 rounded-md bg-green-50 p-4 text-green-800 border border-green-200">
          {strings.newsletter.submitButton}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              {strings.contactForm.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action={onContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {strings.contactForm.firstName}
                  </label>
                  <Input
                    name="firstName"
                    placeholder={strings.contactForm.firstNamePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {strings.contactForm.lastName}
                  </label>
                  <Input
                    name="lastName"
                    placeholder={strings.contactForm.lastNamePlaceholder}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {strings.contactForm.email}
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder={strings.contactForm.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {strings.contactForm.company}
                </label>
                <Input
                  name="company"
                  placeholder={strings.contactForm.companyPlaceholder}
                />
              </div>

              {/* Optional Select: role or tradeType */}
              {selectMode === "role" && strings.contactForm.roles && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {strings.contactForm.role}
                  </label>
                  {useUISelect ? (
                    <ClientRoleSelect
                      name="role"
                      placeholder={strings.contactForm.rolePlaceholder || ""}
                      roles={strings.contactForm.roles}
                    />
                  ) : (
                    <select
                      name="role"
                      className="border rounded-md px-3 py-2 text-sm w-full"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        {strings.contactForm.rolePlaceholder}
                      </option>
                      <option value="freelancer">
                        {strings.contactForm.roles.freelancer}
                      </option>
                      <option value="client">
                        {strings.contactForm.roles.client}
                      </option>
                      <option value="both">
                        {strings.contactForm.roles.both}
                      </option>
                    </select>
                  )}
                </div>
              )}

              {selectMode === "tradeType" && strings.contactForm.tradeTypes && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {strings.contactForm.tradeType}
                  </label>
                  {useUISelect ? (
                    <ClientTradeTypeSelect
                      name="tradeType"
                      placeholder={
                        strings.contactForm.tradeTypePlaceholder || ""
                      }
                      tradeTypes={strings.contactForm.tradeTypes}
                    />
                  ) : (
                    <select
                      name="tradeType"
                      className="border rounded-md px-3 py-2 text-sm w-full"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        {strings.contactForm.tradeTypePlaceholder}
                      </option>
                      <option value="export">
                        {strings.contactForm.tradeTypes.export}
                      </option>
                      <option value="import">
                        {strings.contactForm.tradeTypes.import}
                      </option>
                      <option value="both">
                        {strings.contactForm.tradeTypes.both}
                      </option>
                    </select>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">
                  {strings.contactForm.message}
                </label>
                <Textarea
                  name="message"
                  placeholder={strings.contactForm.messagePlaceholder}
                  required
                  className="min-h-28"
                />
              </div>

              <Button type="submit" className="w-full">
                {strings.contactForm.submitButton}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact info + Newsletter */}
        <div className="space-y-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {strings.contactInfo.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="font-medium">
                  {strings.contactInfo.emailTitle}
                </div>
                <div>{strings.contactInfo.emailAddress}</div>
                <div className="text-muted-foreground">
                  {strings.contactInfo.emailDescription}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {strings.newsletter.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {strings.newsletter.subtitle}
              </p>
              <form className="flex gap-3" action={onNewsletterSubmit}>
                <Input
                  type="email"
                  name="email"
                  placeholder={strings.newsletter.emailPlaceholder}
                  required
                  className="h-10"
                />
                <Button type="submit">{strings.newsletter.submitButton}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
