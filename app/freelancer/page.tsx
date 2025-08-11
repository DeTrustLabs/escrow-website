import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Shield, ArrowRight, CheckCircle, Briefcase, DollarSign, FileText, Play, TrendingDown, Globe } from 'lucide-react'

export default function FreelancerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Freelancer & Service Provider Solution
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Ensure Project Payments with <span className="text-primary">Freelance Escrow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Perfect for global freelancing - clients deposit funds into escrow upfront, and you get paid automatically
              when you complete the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Secure Your Next Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Because Trust Changes Everything</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch how digital escrow transforms freelancing by eliminating payment risks and building trust with
              global clients.
            </p>
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Play className="mr-2 h-6 w-6" />
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Freelancer Payment Problems</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Freelancers worry about completing work without getting paid. Clients fear paying upfront without delivery
              guarantees. Digital escrow eliminates these risks for both parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Non-Payment Risk</CardTitle>
                <CardDescription>
                  Complete work but never get paid. Clients disappear or make excuses after delivery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Payment Delays</CardTitle>
                <CardDescription>
                  Wait weeks or months for payment. Clients use "processing" or "approval" delays as excuses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">High Fees</CardTitle>
                <CardDescription>
                  International wire transfers are expensive and take days. Payment processors charge high fees for
                  cross-border transactions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Modern Freelancing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything freelancers and clients need for secure, transparent project payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Payment Protection</CardTitle>
                <CardDescription>
                  Funds are secured in escrow before work begins, ensuring payment for completed work.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Milestone Payments</CardTitle>
                <CardDescription>
                  Break projects into milestones with automatic payments upon completion and approval.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Work Documentation</CardTitle>
                <CardDescription>
                  Upload deliverables and project documentation directly to the escrow contract.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Accessibility</CardTitle>
                <CardDescription>
                  Work with clients worldwide using digital currencies, eliminating international payment barriers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingDown className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Lower Fees</CardTitle>
                <CardDescription>
                  Eliminate expensive international wire transfers and payment processor fees with digital currencies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Dispute Resolution</CardTitle>
                <CardDescription>
                  Built-in mediation system with optional third-party arbitrators for fair conflict resolution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works for Freelancers */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Freelancer Project Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure process that protects both freelancers and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Agreement</h3>
              <p className="text-muted-foreground">
                Define project scope, milestones, and payment terms with your client.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Funds Secured</h3>
              <p className="text-muted-foreground">Client deposits full payment into escrow before work begins.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Milestones</h3>
              <p className="text-muted-foreground">
                Deliver work according to agreed milestones and upload deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p className="text-muted-foreground">
                Receive automatic payments as milestones are approved or time conditions are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Release Mechanisms */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How You Get Paid</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways how the escrow could release your funds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Milestone Completion</CardTitle>
                <CardDescription>
                  Complete agreed milestones, upload deliverables. Get paid automatically when client approves or time
                  expires.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Automatic Time Release</CardTitle>
                <CardDescription>
                  Set review periods (e.g., 7 days). If client doesn't dispute, smart contract releases payment
                  automatically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Mutual Approval</CardTitle>
                <CardDescription>
                  Both parties confirm work is complete and satisfactory. Instant payment release with both approvals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Dispute Resolution</CardTitle>
                <CardDescription>
                  If there's disagreement, neutral arbitrators review evidence and decide payment fairly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Perfect for Every Service Type</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">For Freelancers</CardTitle>
                <CardDescription className="text-base">Get paid securely for your expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Funds secured before starting work</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Milestone-based payments for long projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Protection against non-payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Instant payments in digital currencies / stablecoins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Global client access without payment barriers</span>
                </div>
                <Button className="w-full mt-4">
                  Start Escrow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">For Clients</CardTitle>
                <CardDescription className="text-base">Hire with confidence and pay for results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Pay only when work meets your standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Milestone approval before payment release</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Dispute resolution if work doesn't meet specs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Full project transparency and documentation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Access to global talent pool</span>
                </div>
                <Button className="w-full mt-4">
                  Start Escrow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Freelancers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  "I never worry about getting paid anymore. The USDC is locked in the smart contract before I start
                  work. No more chasing clients for payment."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SP</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah P.</p>
                    <p className="text-sm text-muted-foreground">Web Developer, Canada</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  "The automatic release after 7 days is perfect. Clients can't hold my payment hostage anymore. If they
                  don't respond, I get paid anyway."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Miguel R.</p>
                    <p className="text-sm text-muted-foreground">Graphic Designer, Mexico</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  "Milestone payments changed everything. I get paid as I complete each phase instead of waiting until
                  the end of a 3-month project."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">LK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Lisa K.</p>
                    <p className="text-sm text-muted-foreground">Marketing Consultant, Australia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Supporting All Service Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The escrow protocol works perfectly for any type of freelance or service work across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Web Development", description: "Frontend, backend, full-stack development projects" },
              { category: "Graphic Design", description: "Logos, branding, marketing materials, illustrations" },
              { category: "Content Writing", description: "Blog posts, copywriting, technical documentation" },
              { category: "Digital Marketing", description: "SEO, social media, advertising campaigns" },
              { category: "Consulting", description: "Business strategy, technical consulting, advisory services" },
              { category: "Translation", description: "Document translation, localization, interpretation" },
              { category: "Video Production", description: "Video editing, animation, motion graphics" },
              { category: "Software Development", description: "Mobile apps, desktop software, custom solutions" },
              { category: "UI/UX Design", description: "User interface design, user experience optimization" },
              { category: "Data Analysis", description: "Data science, analytics, reporting, visualization" },
              { category: "Virtual Assistance", description: "Administrative support, customer service, research" },
              { category: "Legal Services", description: "Contract review, legal research, compliance consulting" },
            ].map((service) => (
              <Card key={service.category} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.category}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Freelancer Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to protect yourself and get paid reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Setting Up Your First Escrow</CardTitle>
                <CardDescription>
                  Simple guide to creating milestone-based payments with smart contracts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="bg-transparent">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Why Stablecoins Are Better</CardTitle>
                <CardDescription>Compare traditional payments with digital currencies for freelancers.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Handling Difficult Clients</CardTitle>
                <CardDescription>
                  How smart contracts protect you from scope creep and payment disputes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="bg-transparent">
                  Read Tips
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Secure Your Freelance Income?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of freelancers and service providers who never worry about getting paid again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Your First Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
