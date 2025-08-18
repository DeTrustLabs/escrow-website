import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  Code,
  Layers,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Building,
  CreditCard,
  FileText,
  Truck,
  Users,
  ShoppingCart,
  Database,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="https://escrow-protocol.com/">
              <Image
                src="/images/logo-main.png"
                alt="Escrow Protocol"
                width={180}
                height={40}
                className="h-8 w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
            <Badge variant="secondary">Integrations</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/support">
              <Button variant="ghost" className="text-sm font-medium">
                Support and Contact
              </Button>
            </Link>
            <Link href="https://app.escrow-protocol.com/">
              <Button size="sm">Start Escrow</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Open Ecosystem
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Build with the <span className="text-primary">Escrow Protocol</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Open ecosystem for everyone. Trade advisors, financial institutions, eCommerce platforms, traditional
              escrow service providers and developers can access and integrate the protocol in multiple ways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.escrow-protocol.com/">
                <Button size="lg" className="text-lg px-8">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Ecosystem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Open Ecosystem for Everyone</h2>
              <p className="text-xl text-muted-foreground mb-8">
                The protocol is designed to be permissionless and accessible to all types of businesses and developers.
                Build on top of it, integrate with it, or use it as-is.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Permissionless access - no approval needed</span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Open source smart contracts and frontend</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Comprehensive documentation and SDKs</span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Community support and developer resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How to Access the Protocol</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to interact with the decentralized Escrow Protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Direct Smart Contract Integration</CardTitle>
                <CardDescription>
                  Interact directly with the protocol's smart contracts on Internet Computer for maximum flexibility.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mb-4" />
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Use the RESTful API for easy integration into existing systems and applications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Frontend Solutions</CardTitle>
                <CardDescription>
                  Use the open-source frontend or build your own custom interface for your users.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Possibilities */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Integration Possibilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The protocol can be integrated with various types of systems and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <ShoppingCart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>eCommerce Platforms</CardTitle>
                <CardDescription>
                  eCommerce platforms can integrate escrow functionality for secure online payments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>KYC/KYB Providers</CardTitle>
                <CardDescription>Identity verification services for enhanced trust and compliance</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Invoice Creators</CardTitle>
                <CardDescription>Automated invoicing systems with escrow payment integration</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Trade Document Providers</CardTitle>
                <CardDescription>Bill of Lading, customs, and shipping document verification systems</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Building className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Financial Institutions</CardTitle>
                <CardDescription>
                  Banks and financial services offering escrow as a service. White label solutions are possible.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Traditional Escrow Providers</CardTitle>
                <CardDescription>Existing escrow companies adding digital currency capabilities</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Truck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Logistics Companies</CardTitle>
                <CardDescription>Shipping and freight companies with automated payment release</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle>ERP System Providers</CardTitle>
                <CardDescription>Enterprise resource planning systems with integrated escrow</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Payment Processors</CardTitle>
                <CardDescription>Payment gateways adding escrow functionality to their services</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start building with the escrow protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle>API Documentation</CardTitle>
                <CardDescription>
                  Complete REST API documentation with examples and interactive testing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/protocol">
                  <Button className="w-full">View API Docs</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Contract Interfaces</CardTitle>
                <CardDescription>Direct integration guides for Internet Computer canisters.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  View Contracts
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Open Source Frontend</CardTitle>
                <CardDescription>Ready-to-use frontend components and full application templates.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  GitHub Repository
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases for Integrators */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who Can Benefit</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Service Providers</CardTitle>
                <CardDescription className="text-base">
                  Businesses offering escrow as part of their services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Trade advisors and consultants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Banks and financial institutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Traditional escrow companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Legal and compliance firms</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Technology Companies</CardTitle>
                <CardDescription className="text-base">
                  Developers and platforms building integrated solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>eCommerce platform developers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Fintech and payment companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Enterprise software providers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Blockchain and DeFi developers</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build with the Protocol?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the growing ecosystem of developers and businesses building on the escrow protocol. Start integrating
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.escrow-protocol.com/">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Integration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/protocol#community">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
