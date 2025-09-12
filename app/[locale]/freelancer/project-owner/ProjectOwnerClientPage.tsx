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
  Scale,
  Eye,
} from "lucide-react"
import Link from "next/link"
import { AppImage } from "@/components/app-image"
import SectionGroup from "@/components/section-group"

export default function ProjectOwnerClientPage() {
  return (
    <SectionGroup>
      <Hero
        badge="For Project Owners"
        title="Hire with Confidence, "
        titleHighlight="Every Time"
        subtitle={
          "Eliminate project risks and ensure quality delivery. Digital escrow protects you from non-delivery and ensures work meets your specifications."
        }
        primaryButton={{
          label: "Start Project Escrow",
          href: "https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondaryButton={{
          label: "Learn How It Works",
          href: "/workflow",
          variant: "outline",
        }}
      />

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/project-owner-testimonial-1.jpg"
                  alt="David Thompson"
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    David Thompson
                  </h3>
                  <p className="text-gray-600">Startup Founder (fictional)</p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;I hired a developer to build our mobile app MVP. Paid
                $15,000 upfront based on their portfolio and great
                communication. After two months of &apos;progress updates&apos;
                and excuses, I realized they had barely started. When I demanded
                to see the work, they disappeared completely. Lost the money and
                three months of critical development time. Had to start over
                with a new developer while our competitors gained ground.&quot;
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-start space-x-4 mb-6">
                <AppImage
                  src="/images/project-owner-testimonial-2.jpg"
                  alt="Lisa Park"
                  width={80}
                  height={80}
                  variant="avatar"
                  rounded
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Lisa Park
                  </h3>
                  <p className="text-gray-600">
                    Marketing Director (fictional)
                  </p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;We hired a designer for our rebranding project. The
                initial concepts looked promising, but the final deliverables
                were completely different from what we agreed on. When we asked
                for revisions to match the original brief, they demanded
                additional payment. We were stuck—either pay more for work that
                should have been done right the first time, or start over. Ended
                up paying twice for the same project.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Project Owners Face */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Challenges Project Owners Face When Hiring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the key obstacles that impact project success and
            business growth
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="non-delivery-risk"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">Non-Delivery Risk</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                Project owners often pay upfront and wait for delivery, leaving
                them vulnerable to freelancers who disappear or fail to complete
                work. This can result in significant financial losses and
                project delays. Many project owners have experienced situations
                where freelancers simply vanish after receiving payment, leaving
                them with no work and no recourse for recovery.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="quality-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  Quality and Scope Issues
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                Receiving work that doesn&apos;t match specifications,
                requirements, or quality expectations is a common problem.
                Project owners may end up with subpar deliverables that require
                extensive revisions or complete rework. This often leads to
                additional costs and delays, especially when freelancers demand
                extra payment for revisions that should have been included in
                the original scope.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="project-delays"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Timer className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">Project Delays</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                Missed deadlines and project delays can have serious business
                consequences, especially for time-sensitive projects or product
                launches. Freelancers may overcommit, underestimate project
                complexity, or simply lack proper project management skills.
                These delays can impact business operations, marketing
                campaigns, and competitive positioning in the market.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="communication-issues"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  Communication and Accountability Issues
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                Poor communication, lack of regular updates, and difficulty
                reaching freelancers can make project management challenging.
                Without clear accountability measures, it&apos;s hard to track
                progress and ensure projects stay on track. This lack of
                transparency often leads to surprises and disappointments when
                deadlines approach.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="trust-verification"
            className="border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <HandHeart className="h-5 w-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold">
                  Difficulty Verifying Freelancer Reliability
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                Assessing freelancer reliability, skills, and work quality
                before hiring is challenging. Portfolios can be misleading,
                reviews may be fake, and past performance doesn&apos;t guarantee
                future results. Project owners often struggle to make informed
                hiring decisions, leading to costly mistakes and project
                failures.
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
                  Limited Recourse for Disputes
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <p className="text-muted-foreground leading-relaxed">
                When projects go wrong, project owners often have limited
                options for dispute resolution. Traditional legal remedies are
                expensive and time-consuming, especially for smaller projects.
                Platform dispute systems may be biased or ineffective, leaving
                project owners with little recourse when freelancers fail to
                deliver or deliver substandard work.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Why Project Owners Choose Digital Escrow */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Project Owners Choose Digital Escrow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protect your projects and ensure quality delivery with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Pay Only for Completed Work</CardTitle>
              <CardDescription>
                Project owners are protected from non-delivery risks because
                payment is only released when work meets specifications. No more
                paying upfront and hoping for the best.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Quality Review Before Payment</CardTitle>
              <CardDescription>
                Review and approve work before payment is released. Ensure
                deliverables meet your requirements and quality standards before
                the freelancer receives payment.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Confidence with New Freelancers</CardTitle>
              <CardDescription>
                Hire talented freelancers without payment risk, as the escrow
                ensures work completion before payment. Access a broader talent
                pool without worrying about reliability.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Milestone-Based Control</CardTitle>
              <CardDescription>
                Release payments based on project milestones, deliverable
                approval, or completion stages. Maintain control over project
                progress and ensure accountability throughout.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Lower Project Costs</CardTitle>
              <CardDescription>
                Reduced transaction fees compared to traditional platforms mean
                more budget for actual project work. Direct payments eliminate
                platform middlemen and their associated costs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Scale className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Fair Dispute Resolution</CardTitle>
              <CardDescription>
                Built-in mediation system with neutral arbitrators for fair
                conflict resolution. Every project step is documented and
                verifiable, enabling faster and more effective dispute
                resolution.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Complete Protection for Project Owners */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Complete Protection for Project Owners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every aspect of your project hiring is secured and protected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">
                During Project Development
              </CardTitle>
              <CardDescription className="text-base">
                Your funds are protected
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Funds held securely until work is approved",
                "Review deliverables before payment release",
                "Request revisions if work doesn't meet specs",
                "Cancel project if freelancer fails to deliver",
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
              <CardTitle className="text-2xl">After Project Approval</CardTitle>
              <CardDescription className="text-base">
                Instant payment to freelancer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Approve work and release payment instantly",
                "Freelancer receives funds within minutes",
                "Complete project documentation and records",
                "Built-in feedback and rating system",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Hire with Complete Confidence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of project owners who never worry about project risks
            again. Start your first secure project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-4">
                Start Project Escrow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contacts">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent"
              >
                Talk to Project Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SectionGroup>
  )
}
