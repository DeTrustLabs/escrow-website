"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle, X } from "lucide-react"
import {
  sendContactMessage,
  subscribeToNewsletter,
} from "../../trade/contacts/actions"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

function SuccessPopup({
  message,
  onClose,
  thankYou,
}: {
  message: string
  onClose: () => void
  thankYou: string
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">{thankYou}</h3>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  )
}

export type FreelancerContactsStrings = {
  popup: { thankYou: string }
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
    role: string
    rolePlaceholder: string
    roles: { freelancer: string; client: string; both: string }
    message: string
    messagePlaceholder: string
    submittingButton: string
    submitButton: string
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

export function FreelancerContactsClient({
  strings,
}: {
  strings: FreelancerContactsStrings
}) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const result = await sendContactMessage(formData)

    if (result.success) {
      setPopupMessage(result.message)
      setShowPopup(true)
      e.currentTarget.reset()
    }

    setIsSubmitting(false)
  }

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const result = await subscribeToNewsletter(formData)

    setPopupMessage(result.message)
    setShowPopup(true)
    if (result.success) e.currentTarget.reset()

    setIsSubmitting(false)
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {strings.contactForm.title}
                </h2>
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        {strings.contactForm.firstName}
                      </label>
                      <Input
                        name="firstName"
                        placeholder={strings.contactForm.firstNamePlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
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
                    <label className="text-sm font-medium mb-2 block">
                      {strings.contactForm.email}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder={strings.contactForm.emailPlaceholder}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {strings.contactForm.company}
                    </label>
                    <Input
                      name="company"
                      placeholder={strings.contactForm.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {strings.contactForm.role}
                    </label>
                    <Select name="tradeType" required>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={strings.contactForm.rolePlaceholder}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freelancer">
                          {strings.contactForm.roles.freelancer}
                        </SelectItem>
                        <SelectItem value="client">
                          {strings.contactForm.roles.client}
                        </SelectItem>
                        <SelectItem value="both">
                          {strings.contactForm.roles.both}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {strings.contactForm.message}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={strings.contactForm.messagePlaceholder}
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? strings.contactForm.submittingButton
                      : strings.contactForm.submitButton}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {strings.contactInfo.title}
                </h2>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">
                      {strings.contactInfo.emailTitle}
                    </h3>
                    <p className="text-primary">
                      {strings.contactInfo.emailAddress}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {strings.contactInfo.emailDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {strings.newsletter.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {strings.newsletter.subtitle}
                </p>
                <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
                  <Input
                    name="email"
                    type="email"
                    placeholder={strings.newsletter.emailPlaceholder}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? strings.newsletter.submittingButton
                      : strings.newsletter.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {showPopup && (
        <SuccessPopup
          message={popupMessage}
          onClose={() => setShowPopup(false)}
          thankYou={strings.popup.thankYou}
        />
      )}
    </section>
  )
}

export default FreelancerContactsClient
