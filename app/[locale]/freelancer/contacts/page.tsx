"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle, X } from "lucide-react"
import { useTranslations } from "next-intl"
import {
  sendContactMessage,
  subscribeToNewsletter,
} from "../../trade/contacts/actions"

function SuccessPopup({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) {
  const t = useTranslations("freelancer.contacts.popup")
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
          <h3 className="text-lg font-semibold mb-2">{t("thankYou")}</h3>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default function FreelancerContactsPage() {
  const t = useTranslations("freelancer.contacts")
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
      // Reset form
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

    if (result.success) {
      setPopupMessage(result.message)
      setShowPopup(true)
      // Reset form
      e.currentTarget.reset()
    } else {
      setPopupMessage(result.message)
      setShowPopup(true)
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Send Message Form */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      {t("contactForm.title")}
                    </h2>
                    <form className="space-y-6" onSubmit={handleContactSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            {t("contactForm.firstName")}
                          </label>
                          <Input
                            name="firstName"
                            placeholder={t("contactForm.firstNamePlaceholder")}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            {t("contactForm.lastName")}
                          </label>
                          <Input
                            name="lastName"
                            placeholder={t("contactForm.lastNamePlaceholder")}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {t("contactForm.email")}
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder={t("contactForm.emailPlaceholder")}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {t("contactForm.company")}
                        </label>
                        <Input
                          name="company"
                          placeholder={t("contactForm.companyPlaceholder")}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {t("contactForm.role")}
                        </label>
                        <select
                          name="tradeType"
                          className="w-full p-3 border rounded-lg"
                          required
                        >
                          <option value="">
                            {t("contactForm.rolePlaceholder")}
                          </option>
                          <option value="freelancer">
                            {t("contactForm.roles.freelancer")}
                          </option>
                          <option value="client">
                            {t("contactForm.roles.client")}
                          </option>
                          <option value="both">
                            {t("contactForm.roles.both")}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          {t("contactForm.message")}
                        </label>
                        <Textarea
                          name="message"
                          placeholder={t("contactForm.messagePlaceholder")}
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
                          ? t("contactForm.submittingButton")
                          : t("contactForm.submitButton")}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Contact Info and Newsletter */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      {t("contactInfo.title")}
                    </h2>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">
                          {t("contactInfo.emailTitle")}
                        </h3>
                        <p className="text-primary">
                          {t("contactInfo.emailAddress")}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t("contactInfo.emailDescription")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      {t("newsletter.title")}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {t("newsletter.subtitle")}
                    </p>
                    <form
                      className="space-y-4"
                      onSubmit={handleNewsletterSubmit}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder={t("newsletter.emailPlaceholder")}
                        required
                      />
                      <Button
                        type="submit"
                        className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white font-bold"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? t("newsletter.submittingButton")
                          : t("newsletter.submitButton")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showPopup && (
        <SuccessPopup
          message={popupMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}
