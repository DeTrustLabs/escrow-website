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
  Handshake,
  Zap,
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  DollarSign,
  Smartphone,
  Lock,
  Unlock,
  Settings,
  User,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { SITE_URL } from "@/lib/urls"

export const metadata = {
  title:
    "Digital Escrow Workflow for Freelancers - Secure Project Payments | Escrow Protocol",
  description:
    "Learn how digital escrow works for freelance projects. Step-by-step guide to secure payments, milestone verification, and dispute resolution for freelancers and clients.",
  keywords:
    "digital escrow for freelancers, secure freelance payments, escrow workflow for projects, freelance payment protection, secure project workflow",
  alternates: { canonical: `${SITE_URL}/freelancer/workflow` },
  openGraph: {
    title: "Digital Escrow Workflow for Freelancers - Secure Project Payments",
    description:
      "Complete guide to digital escrow for freelance projects. Secure payments, milestone verification, and dispute resolution.",
    url: `${SITE_URL}/freelancer/workflow`,
  },
}

export default function FreelancerWorkflowPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Digital Escrow Protocol for Freelance Projects",
    description:
      "A decentralized peer-to-peer platform for secure freelance project payments, holding funds until milestones are completed.",
    url: `${SITE_URL}/freelancer/workflow`,
    applicationCategory: "BusinessApplication",
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="px-4 py-2 mb-6">
              Secure Freelance Workflow
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Freelance{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Escrow Workflow
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Eliminate payment risks, protect your work, and build trust with
              clients using digital escrow. Both freelancers and project owners
              are protected throughout the entire project lifecycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Payment Security</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Zap className="h-5 w-5 text-primary" />
                <span>Milestone-Based Release</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <DollarSign className="h-5 w-5 text-primary" />
                <span>Lower Transaction Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps of the Escrow */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              4 Steps of the Freelance Escrow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A step-by-step breakdown of the secure digital escrow process for
              freelance projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                1. Project Agreement
              </h3>
              <p className="text-muted-foreground">
                Define project scope, milestones, payment amount and delivery
                timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                2. Secure Funding
              </h3>
              <p className="text-muted-foreground">
                Client deposits full payment into escrow before work begins
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                3. Complete Milestones
              </h3>
              <p className="text-muted-foreground">
                Deliver work according to agreed milestones and upload
                deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                4. Get Paid
              </h3>
              <p className="text-muted-foreground">
                Receive automatic payments as milestones are approved or time
                conditions are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a Digital Escrow Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              How Digital Escrow Works for Freelancers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the complete digital escrow process for secure
              freelance project payments
            </p>
          </div>

          <div className="mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escrw%20Freelance%20STP%203%20%284%29.png-2ogWHJ41ekTJ4oOHM9qAlUJOqeoUly.jpeg"
              alt="Digital Escrow Process Illustration for Freelance Projects"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {/* Step 1: Onboarding */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Onboarding
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      The secure escrow process begins with a simple online
                      setup completed within minutes. Both freelancer and client
                      create a digital wallet — a secure digital account for
                      sending and receiving digital currencies like USD or EUR.
                      This wallet acts like a digital bank account, keeping
                      everything private and secure. The setup requires no
                      traditional banks and gives you complete control over your
                      assets. Once established, you can easily participate in
                      freelance project escrows with full privacy and security,
                      ensuring your payments are protected.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Sign-in and create a digital wallet
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          No banks required, full asset control
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Ready for secure freelance projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Project Agreement */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Project Agreement
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      To begin, you create a new project escrow, invite your
                      client and define together the terms of the project
                      including scope, milestones, payment amount, and delivery
                      timeline. If you need support, you can involve a project
                      advisor who can help prepare the escrow but has no access
                      to escrow funds. You also choose an arbitration service
                      from the start for any disputes—this service only gets
                      involved if needed and can't see the transaction
                      otherwise. This digital contract focuses specifically on
                      payment security and milestone completion. Both parties
                      digitally sign the escrow agreement, creating a binding
                      contract that ensures fairness throughout the project
                      lifecycle.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Define project scope and milestones
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Project advisor available for guidance
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Digital signatures create binding contract
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Secure Funding */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Secure Funding
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      The client deposits the agreed project amount using
                      digital currencies within the specified timeframe. Once
                      deposited, both parties receive immediate confirmation
                      that funds are secured and protected. The escrow holds
                      these funds neutrally until project milestones are
                      completed, eliminating risks of non-payment for
                      freelancers and ensuring work completion for clients. This
                      gives freelancers confidence to start work knowing payment
                      is guaranteed.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Client deposits project payment
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Instant funding verification
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Payment guaranteed for completed work
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Work Delivery */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Work Delivery
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      Following funding confirmation, the freelancer begins work
                      on the project. Key deliverables and milestone completions
                      are uploaded to track progress, while work samples and
                      final deliverables provide proof of completion. The
                      transparent documentation system keeps both parties
                      informed throughout the project lifecycle, reducing
                      uncertainty and maintaining trust until all work is
                      completed to satisfaction.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Funding confirmation triggers work start
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Upload deliverables and milestones
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Transparent progress tracking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Payment Release */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Unlock className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Payment Release
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      Payment release occurs through pre-selected mechanisms
                      including client approval, milestone completion,
                      time-based release, or third-party review. These flexible
                      options accommodate different project requirements while
                      ensuring freelancers receive prompt payment for completed
                      work and clients receive quality deliverables according to
                      their specific project agreement terms.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Multiple release mechanisms
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Milestone-based payments
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Flexible options for different projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6: Project Adjustments */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Settings className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Project Adjustments
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      The escrow accommodates real-world project changes through
                      flexible adjustment mechanisms. When scope changes
                      arise—such as additional features, timeline extensions, or
                      budget modifications—both parties can propose solutions
                      including deadline adjustments or payment changes. All
                      modifications require digital signatures from both
                      freelancer and client to become legally binding, ensuring
                      transparency and mutual agreement throughout the project
                      development process.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Flexible project scope adjustments
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Available until payment release
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Mutual consent required for changes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7: Dispute Resolution */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Dispute Resolution
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">
                      When disagreements occur regarding work quality, scope, or
                      deliverables, either party can initiate a dispute that
                      immediately freezes funds to protect both parties. All
                      project documentation, communications, and deliverables
                      are encrypted and saved, helping to quickly reconstruct
                      the project history. Both parties have time to resolve
                      issues bilaterally through negotiation, such as revisions,
                      partial payments, or timeline adjustments. If bilateral
                      resolution fails, the dispute escalates to a pre-defined
                      neutral arbitrator who has access to all project data to
                      make informed decisions based on clear documentation
                      rather than conflicting claims.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Funds locked immediately for protection
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Bilateral negotiation encouraged first
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Neutral arbitrator escalation available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Release Mechanisms */}
      <section
        id="flexible-payment-release-options"
        className="py-20 bg-gray-50"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Flexible Payment Release Options
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to trigger payment release based on your specific
                project requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Client Approval</CardTitle>
                  <CardDescription>
                    Funds are released when the client reviews and approves the
                    completed work or milestone deliverables.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <User className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Third Party Review</CardTitle>
                  <CardDescription>
                    Release triggered after successful quality review by
                    independent third-party reviewers or project evaluators.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">
                    Milestone Completion
                  </CardTitle>
                  <CardDescription>
                    Automatic release upon submission and verification of
                    required project deliverables and milestones.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Handshake className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Mutual Agreement</CardTitle>
                  <CardDescription>
                    Both parties must explicitly agree to release funds,
                    providing maximum control over the project completion.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Project Dispute Resolution
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fair and transparent resolution when issues arise during
                freelance projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl">
                    When Project Disputes Occur
                  </CardTitle>
                  <CardDescription className="text-base">
                    Funds are immediately locked for protection
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    When either party raises a dispute about work quality, scope
                    changes, or deliverables, funds are immediately frozen to
                    protect both sides. All project documentation,
                    communications, and deliverables between parties are saved
                    (encrypted) and help to quickly reconstruct the project
                    history and agreements.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Funds locked immediately upon dispute",
                      "All project communications encrypted and saved",
                      "Complete project history available",
                      "Deliverables and milestones preserved for review",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <Scale className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Resolution Options</CardTitle>
                  <CardDescription className="text-base">
                    Multiple paths to fair project resolution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Parties have time to solve disputes themselves through
                    negotiation (such as work revisions, partial payments, or
                    timeline extensions). If bilateral resolution isn't
                    possible, the dispute can be escalated to a pre-defined
                    neutral arbitrator who reviews all project data to make
                    informed decisions.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Direct negotiation between parties",
                      "Flexible solutions (revisions, partial payments)",
                      "Neutral arbitrator escalation",
                      "Access to all project documentation",
                    ].map((option, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Handshake className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{option}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Important: Arbitrator Costs
                  </h4>
                  <p className="text-yellow-700">
                    The arbitrator is pre-defined at the beginning of the
                    project escrow and remains neutral throughout the process.
                    They have access to all project information and data to make
                    informed decisions.
                    <strong>
                      {" "}
                      Please note that arbitrator fees are deducted from the
                      escrow funds, reducing the total amount paid out to both
                      parties.
                    </strong>{" "}
                    This encourages bilateral resolution whenever possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="digital-payments-for-freelancers"
        className="py-20 bg-gray-50"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Digital Payments for Freelancers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding digital currencies, wallets, and payment providers
                for secure freelance project payments
              </p>
            </div>

            <div className="space-y-16">
              {/* What Are Digital Currencies */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <img
                    src="/stablecoins-overview.png"
                    alt="USD Stablecoins and Digital Currencies Overview"
                    className="w-full max-w-sm rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    What Are Digital Currencies?
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A digital currency, also known as a stablecoin, is a digital
                    representation of traditional money (FIAT currency) like the
                    US dollar. A digital USD is pegged 1:1 to the paper USD,
                    reflecting its value while offering the advantages of
                    blockchain technology. Stablecoins are issued by (regulated)
                    institutions and backed by collateral, ensuring their
                    stability and trustworthiness. The largest stablecoins are
                    currently USDT and USDC, issued by Tether and Circle.
                    Stablecoins are perfect for freelance payments since they
                    settle instantly and are cheap to send, making international
                    project payments more efficient and cost-effective for both
                    freelancers and clients.
                  </p>
                </div>
              </div>

              {/* What Is a Wallet */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <img
                    src="/digital-wallet-interface.png"
                    alt="Digital Wallet Interface showing USDT, USDC, and other stablecoin balances"
                    className="w-full max-w-sm rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    What Is a Digital Wallet?
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A digital wallet is like a secure digital bank account that
                    you control completely. It's an app on your phone or
                    computer where you can store, send, and receive digital
                    currencies like stablecoins. Think of it as your personal
                    digital safe - only you have the key (password), and no bank
                    or third party can access your funds. For freelancers, a
                    wallet provides direct control over project payments without
                    needing traditional banks. Once ready, you can participate
                    in secure escrow transactions with clients worldwide,
                    keeping your earnings private and under your complete
                    control.
                  </p>
                </div>
              </div>

              {/* How can I change FIAT into Stablecoins */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <img
                    src="/fiat-conversion-process.png"
                    alt="FIAT to Digital Currency Conversion Process"
                    className="w-full max-w-sm rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    How to Convert FIAT to Digital Currency?
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    You can use an exchange or an on-ramp provider to convert
                    traditional money into digital currencies.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Exchanges</strong> like Coinbase and Binance are
                    platforms where you can buy, sell, and trade various digital
                    currencies including stablecoins.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>
                      An On-ramp Provider or Digital Money Converter
                    </strong>{" "}
                    is a licensed provider that exchanges traditional money
                    (FIAT) for digital currencies like stablecoins, ensuring
                    secure and compliant transactions.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    For both, you send them FIAT money via bank transaction,
                    mobile payment, or credit card, and they credit your wallet
                    with the equivalent stablecoin. For example, if you send 100
                    USD (FIAT) to them - they exchange it to 100 USDT
                    (stablecoin) in your digital wallet. These providers handle
                    the KYC/KYB (Know Your Customer/Business) verification
                    process to ensure compliance with financial regulations,
                    making the conversion process both secure and legally
                    compliant for freelance work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Freelance Projects?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers and clients who trust digital escrow
              for their project payments. Experience secure, milestone-based
              payments today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Your Project Escrow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/freelancer/contacts">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                >
                  Talk to Project Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
