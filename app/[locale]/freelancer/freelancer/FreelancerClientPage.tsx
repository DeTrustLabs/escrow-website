"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero } from "@/components/hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  Zap,
  AlertTriangle,
  HandHeart,
  Timer,
  CreditCard,
  Scale,
  Banknote,
} from "lucide-react"
import Link from "next/link"
import { AppImage } from "@/components/app-image"
import { Section, SectionProvider } from "@/components/section"

export default function FreelancerClientPage() {
  return (
    <SectionProvider>
      <Hero
        className="bg-gradient-to-br from-primary/5 to-transparent"
        badge={"For Freelancers"}
        title={
          <>
            Get Paid Securely,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Every Project
            </span>
          </>
        }
        subtitle={
          "Eliminate payment risks and grow your freelance business with confidence. Digital escrow ensures you receive payment when you deliver as promised."
        }
        titleClassName="text-5xl lg:text-7xl font-bold tracking-tight mb-8"
        maxWidth="max-w-5xl"
        primaryButton={{
          label: "Start Freelance Escrow",
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondaryButton={{
          label: "Learn How It Works",
          href: "/freelancer/workflow",
          variant: "outline",
        }}
      />

      {/* Testimonial Section */}
      <Section className="py-16">
        <div className="container px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <div className="flex items-start space-x-4 mb-6">
                  <AppImage
                    src="/images/freelancer-testimonial-1.jpg"
                    alt="Sarah Chen"
                    width={80}
                    height={80}
                    rounded
                    variant="avatar"
                    className="w-20 h-20 object-cover flex-shrink-0 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Sarah Chen
                    </h3>
                    <p className="text-gray-600">Web Developer (fictional)</p>
                  </div>
                </div>
                <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                  &quot;I spent three months building a complete e-commerce
                  platform for a startup. The project was complex—custom
                  features, payment integration, the works. When I delivered
                  everything perfectly, they kept asking for &apos;small
                  changes&apos; and delayed payment for weeks. Eventually, they
                  disappeared completely. Three months of work, gone. That
                  project failure nearly ended my freelance career. I had to
                  take a part-time job just to pay rent while rebuilding my
                  client base.&quot;
                </blockquote>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <div className="flex items-start space-x-4 mb-6">
                  <AppImage
                    src="/images/freelancer-testimonial-2.jpg"
                    alt="Marcus Rodriguez"
                    width={80}
                    height={80}
                    rounded
                    variant="avatar"
                    className="w-20 h-20 object-cover flex-shrink-0 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Marcus Rodriguez
                    </h3>
                    <p className="text-gray-600">
                      Graphic Designer (fictional)
                    </p>
                  </div>
                </div>
                <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                  &quot;I had been working with this marketing agency for two
                  years. They were my biggest client—consistent work, good
                  relationship, always paid on time. Then their main client
                  pulled out and they hit financial trouble. They owed me
                  $28,000 for completed projects when they went under. Even good
                  clients can become bad debts through no fault of their own.
                  That taught me that even trusted relationships need
                  protection.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges Freelancers Face */}
      <Section>
        <div className="container px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Challenges Freelancers Face in Project Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding the key obstacles that impact freelance businesses
                worldwide
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="non-payment-risk"
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">Non-Payment Risk</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Freelancers often complete projects first and wait for
                    payment, leaving them vulnerable to clients who refuse to
                    pay or disappear after receiving the work. This can result
                    in significant financial losses, including weeks or months
                    of invested time and effort. Many freelancers have
                    experienced situations where clients simply vanish after
                    project completion, leaving them with substantial losses and
                    no practical way to recover their earnings.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="cash-flow-issues"
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <Banknote className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">Cash Flow Issues</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Even successful freelancers can face cash flow crises from
                    one bad client, leading to inability to pay bills or invest
                    in business growth. This risk is not limited to new
                    clients—existing clients can default due to their own
                    financial troubles. A single large unpaid project can create
                    serious financial stress, affecting the ability to cover
                    living expenses and business costs while waiting for
                    payment.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="payment-delays"
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <Timer className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">Payment Delays</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Payment delays plague freelancers from clients who pay late
                    due to cash flow issues, lengthy approval processes, or
                    simply poor payment practices. These delays disrupt personal
                    finances and make it difficult to plan for future projects.
                    Freelancers often find themselves in difficult positions
                    where they need to cover living expenses while waiting for
                    delayed payments from clients.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="platform-fees"
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">High Payment Fees</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Freelancers often face steep costs from payment processing,
                    currency conversion, and cross-border transfers, which can
                    significantly reduce earnings. These fees, along with
                    complex structures and withdrawal delays, make cash flow
                    unpredictable and can turn small projects unprofitable. This
                    pushes freelancers to raise rates to offset expenses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="trust-issues"
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <HandHeart className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">
                      Trust Issues with New Clients
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Building trust with new clients is difficult, especially
                    when working remotely across different time zones and
                    cultures. Freelancers often struggle to verify client
                    reliability without extensive research, which is
                    time-consuming. Without a proven track record with a client,
                    freelancers hesitate to take on larger projects, missing out
                    on valuable growth opportunities and higher-paying work.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="dispute-resolution"
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <Scale className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">
                      Dispute Resolution Challenges
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Disputes over project scope, quality, or payment are
                    difficult to resolve when working with remote clients.
                    Freelancers may spend significant time and resources on
                    conflicts with uncertain outcomes. The lack of clear dispute
                    resolution mechanisms often leaves freelancers with little
                    recourse when clients refuse to pay or demand excessive
                    revisions beyond the agreed scope.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Why Freelancers Choose Digital Escrow */}
      <Section>
        <div className="container px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Freelancers Choose Digital Escrow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure your payments and expand your freelance business with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Payment Secured Before Starting</CardTitle>
                <CardDescription>
                  Freelancers are protected from non-payment risks because funds
                  are held in secure escrow before work begins.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Immediate Payment on Completion</CardTitle>
                <CardDescription>
                  Payments are released instantly once work has been approved.
                  You receive your money within minutes, improving cash flow and
                  eliminating payment delays significantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Confidence with New and Existing Clients</CardTitle>
                <CardDescription>
                  Freelancers can work with new or unfamiliar clients
                  confidently, as the escrow secures payment upfront. Take on
                  bigger projects without payment risk.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Milestone-Based Payments</CardTitle>
                <CardDescription>
                  Flexible payment release based on project milestones,
                  completion stages, or mutual agreement. Customizable release
                  conditions that work for your project structure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Low Transaction Fees</CardTitle>
                <CardDescription>
                  Peer-to-peer transactions with digital currencies offer lower
                  fees than traditional cross-border payments, helping
                  freelancers and project owners maximize earnings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Scale className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fair Dispute Resolution</CardTitle>
                <CardDescription>
                  Built-in mediation system with neutral third-party arbitrators
                  for fair conflict resolution. Every project step is recorded
                  and verifiable, enabling faster and cheaper dispute
                  resolution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* Complete Protection for Freelancers */}
      <Section>
        <div className="container px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Complete Protection for Freelancers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your freelance project is secured and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Before Starting Work</CardTitle>
                <CardDescription className="text-base">
                  Payment is secured upfront
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Client deposits full payment into escrow",
                  "Funds are verified and locked securely",
                  "You receive confirmation before starting work",
                  "Work with new and existing clients confidently",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">
                  After Project Completion
                </CardTitle>
                <CardDescription className="text-base">
                  Instant payment release
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Project approval triggers automatic release",
                  "Funds received within minutes of approval",
                  "Complete transparency throughout the process",
                  "Built-in, neutral mediation if disputes arise",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Freelance Payments?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers who never worry about payment again.
              Start your first secure freelance project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Freelance Escrow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/freelancer/contacts">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                >
                  Talk to Freelance Specialist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </SectionProvider>
  )
}
