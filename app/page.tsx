import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lock,
  Play,
  Shield,
  Globe,
  Clock,
  Users,
  FileText,
  Handshake,
  Wallet,
  Package,
  Zap,
  Code,
  Building,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo-main.png"
              alt="Escrow Protocol"
              width={240}
              height={54}
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/support">
              <Button variant="ghost" className="text-sm font-medium">
                Support and Contact
              </Button>
            </Link>
            {/* Updated to use ICP canister URL */}
            <Link href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/">
              <Button size="sm">Start Escrow</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(78,205,196,0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2">
                Built on Internet Computer
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Digital Escrow for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Global Business
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Decentralized, non-custodial escrow protocol powered by smart contracts. Trade with confidence using
              digital currencies - no intermediaries, no custody, just code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {/* Updated to use ICP canister URL */}
              <Link href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Escrow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent hover:bg-primary/5">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Non-custodial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Open source</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Audited smart contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Cards - Explore the Escrow Protocol */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore the Escrow Protocol</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how the protocol serves different use cases and integration needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link href="https://trade.escrow-protocol.com/">
              <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg hover:border-2 hover:border-teal-500 border-2 border-transparent transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Globe className="h-16 w-16 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Trade</h3>
                <p className="text-gray-600">Secure international transactions</p>
              </div>
            </Link>

            <Link href="https://freelancer.escrow-protocol.com/">
              <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg hover:border-2 hover:border-teal-500 border-2 border-transparent transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Users className="h-16 w-16 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Freelance</h3>
                <p className="text-gray-600">Protected project payments</p>
              </div>
            </Link>

            <Link href="https://integrations.escrow-protocol.com/">
              <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg hover:border-2 hover:border-teal-500 border-2 border-transparent transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Code className="h-16 w-16 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrators</h3>
                <p className="text-gray-600">Build with the protocol</p>
              </div>
            </Link>

            <Link href="https://community.escrow-protocol.com/">
              <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg hover:border-2 hover:border-teal-500 border-2 border-transparent transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Building className="h-16 w-16 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">Join the ecosystem</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Features - Escrow Protocol Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Escrow Protocol Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for real-world business needs with enterprise-grade security and flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Security and Flexibility</CardTitle>
                <CardDescription>
                  Funds are protected until both parties fulfill their agreed terms, eliminating fraud and non-payment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>More Trust, More Deals</CardTitle>
                <CardDescription>
                  Payment security builds trust, reduces risks and drives more business opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Cross-Border Payments</CardTitle>
                <CardDescription>
                  Instant settlement with digital currencies. No intermediaries, no more delays.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Multi-Signature Approval</CardTitle>
                <CardDescription>
                  Flexible fund release mechanisms with automated approvals and customizable conditions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Decentralized smart contracts operate continuously, always available when you need them.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Automated Arbitration</CardTitle>
                <CardDescription>
                  Onchain storage of data and documents enable faster and cheaper dispute resolution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and transparent process for all parties involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Handshake,
                title: "Agree on Terms",
                description:
                  "Parties negotiate and agree on transaction terms, optionally uploading supporting documents.",
                color: "bg-primary",
              },
              {
                icon: Wallet,
                title: "Deposit Funds",
                description: "Buyer deposits digital currencies into the secure escrow protocol for safekeeping.",
                color: "bg-primary",
              },
              {
                icon: Package,
                title: "Deliver Service or Goods",
                description: "Seller delivers goods or services according to the agreed terms and conditions.",
                color: "bg-primary",
              },
              {
                icon: Zap,
                title: "Release Funds",
                description:
                  "Funds are automatically released when signing conditions are met or through dispute resolution.",
                color: "bg-primary",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Use Cases - Perfect for Your Business */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Perfect for Your Business</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for real-world business scenarios across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Global Trade</CardTitle>
                    <CardDescription className="text-base">For exporters and importers worldwide</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {[
                  "Security against Non-Payment or Non-Delivery",
                  "Speed and Global Accessibility",
                  "Cost Efficiency and Customizable Release Conditions",
                  "Automated Dispute Resolution Mechanism",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                <Link href="https://trade.escrow-protocol.com/">
                  <Button className="mt-6 w-full group-hover:shadow-lg transition-shadow">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <Lock className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Freelancer Services</CardTitle>
                    <CardDescription className="text-base">For service providers and clients</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {[
                  "Protection against Non-Payment",
                  "Milestone-based Payments",
                  "Fast and Low-Cost Transactions",
                  "Automated Dispute Resolution Mechanism",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                <Link href="https://freelancer.escrow-protocol.com/">
                  <Button className="mt-6 w-full group-hover:shadow-lg transition-shadow">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrators and Community Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Build and Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Integrate with the protocol or join the growing community of developers and users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                    <Code className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Integrators</CardTitle>
                    <CardDescription className="text-base">For developers and businesses</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {["Easy API Integration", "Developer-Friendly Documentation", "Scalable Infrastructure"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ),
                )}
                <Link href="https://integrations.escrow-protocol.com/">
                  <Button className="mt-6 w-full group-hover:shadow-lg transition-shadow">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                    <Building className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Community</CardTitle>
                    <CardDescription className="text-base">For protocol participants</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {["Active Community", "Developer Support", "Educational Resources"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                <Link href="https://community.escrow-protocol.com/">
                  <Button className="mt-6 w-full group-hover:shadow-lg transition-shadow">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20">
        <div className="container">
          <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-3xl p-12 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready for Secure Digital Trade?</h2>
              <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                Join businesses worldwide using this trustless escrow protocol for secure, transparent transactions with
                digital currencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Updated to use ICP canister URL */}
                <Link href="https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Start Your First Escrow
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Explore Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
