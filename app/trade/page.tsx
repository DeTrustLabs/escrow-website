import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  Target,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Briefcase,
  DollarSign,
  FileText,
  Globe,
  Truck,
  Play,
  TrendingDown,
} from "lucide-react"
import Image from "next/image"

export default function TradePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Trade-specific Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/images/logo-main.png" alt="Escrow Protocol" width={180} height={40} className="h-8 w-auto" />
            <Badge variant="secondary">Global Trade</Badge>
          </div>
          <Button size="sm">Start Trade Escrow</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Global Trade Solution
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Secure Escrow for <span className="text-primary">Global Trade</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Eliminate payment risks in cross-border trade. Digital escrow holds funds securely until goods are
              delivered and verified, protecting both exporters and importers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Global Trade Escrow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Trailer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Because Trust Changes Everything</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch how digital escrow transforms international trade by eliminating payment risks and delays.
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

      {/* Trade Challenges */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">International Trade Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exporters worry about shipping goods without payment. Importers fear paying upfront without delivery
              guarantees. Digital escrow eliminates these risks for both parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Payment Risk</CardTitle>
                <CardDescription>
                  Exporters ship goods but never receive payment. Importers pay upfront but goods never arrive.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Banking Delays</CardTitle>
                <CardDescription>
                  Wire transfers take days or weeks. Letters of credit are expensive and complex to process.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Trust Issues</CardTitle>
                <CardDescription>
                  New trading partners require extensive due diligence. Small businesses struggle with credibility.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for International Commerce</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything exporters and importers need for secure, efficient cross-border transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Payment Security</CardTitle>
                <CardDescription>
                  Funds are held securely until goods are delivered and verified, eliminating non-payment and
                  non-delivery risks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Accessibility</CardTitle>
                <CardDescription>
                  Trade with partners worldwide using digital currencies (e.g. stablecoins), bypassing traditional
                  banking limitations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Instant Settlement</CardTitle>
                <CardDescription>
                  Automatic payment release upon delivery confirmation, eliminating weeks of payment delays.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Document Verification & Multi-Party Approval</CardTitle>
                <CardDescription>
                  Automated verification of Bills of Lading and shipping documents with flexible approval mechanisms
                  involving multiple parties.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingDown className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Lower Fees</CardTitle>
                <CardDescription>
                  Eliminating intermediaries and using digital cross-border payments cuts costs drastically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Dispute Resolution</CardTitle>
                <CardDescription>
                  Built-in arbitration system with trade experts for fair resolution of commercial disputes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works for Trade */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">International Trade Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined process that protects both exporters and importers throughout the trade cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escrow Agreement</h3>
              <p className="text-muted-foreground">Negotiate escrow amount, funding date and release mechanism.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">
                Importer deposits digital currencies into escrow before goods are shipped.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ship & Track</h3>
              <p className="text-muted-foreground">
                Exporter ships goods and uploads delivery documents for verification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automatic Release</h3>
              <p className="text-muted-foreground">
                Funds released automatically upon delivery confirmation or document verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Release Mechanisms */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Payment Release Conditions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple automated ways to release payments based on trade requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Delivery Confirmation</CardTitle>
                <CardDescription>
                  Payment released when importer confirms receipt of goods in acceptable condition within agreed
                  timeframe.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Third-Party Inspection</CardTitle>
                <CardDescription>
                  Release triggered by independent quality inspectors, customs or logistics providers confirming
                  delivery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Time-Based Release</CardTitle>
                <CardDescription>
                  Automatic payment after specified period if no disputes are raised, protecting against payment delays.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Automated Release</CardTitle>
                <CardDescription>
                  Automated verification of trading documents such as Bill of Lading through smart contract integration
                  with shipping and customs systems.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Perfect for Every Trade Type</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">For Exporters</CardTitle>
                <CardDescription className="text-base">Secure your international sales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Funds secured before shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Instant payment upon delivery confirmation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Protection against non-payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Trade with new partners confidently</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Eliminate letter of credit complexity</span>
                </div>
                <Button className="w-full mt-4">
                  Start Escrow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">For Importers</CardTitle>
                <CardDescription className="text-base">Import with confidence and control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Pay only when goods meet specifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Quality inspection before payment release</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Protection against non-delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Dispute resolution for quality issues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Access to global supplier network</span>
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

      {/* Trade Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Supporting All Trade Industries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The escrow protocol works perfectly for any type of international trade across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Electronics & Technology", description: "Semiconductors, computers, mobile devices" },
              { category: "Textiles & Apparel", description: "Clothing, fabrics, fashion accessories" },
              { category: "Machinery & Equipment", description: "Industrial machines, tools, manufacturing equipment" },
              { category: "Raw Materials", description: "Metals, minerals, chemical compounds" },
              { category: "Food & Agriculture", description: "Agricultural products, processed foods, beverages" },
              { category: "Automotive Parts", description: "Car components, spare parts, accessories" },
              { category: "Medical Equipment", description: "Healthcare devices, pharmaceutical products" },
              { category: "Construction Materials", description: "Building supplies, cement, steel" },
              { category: "Energy & Oil", description: "Petroleum products, renewable energy equipment" },
              { category: "Consumer Goods", description: "Home appliances, furniture, personal items" },
              { category: "Chemicals & Plastics", description: "Industrial chemicals, plastic materials" },
              { category: "Luxury Goods", description: "High-end products, jewelry, premium items" },
            ].map((industry) => (
              <Card key={industry.category} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{industry.category}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trade Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to optimize your international trade with digital escrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Setting Up Trade Escrow</CardTitle>
                <CardDescription>
                  Complete guide to creating secure escrow agreements with smart contracts.
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
                <CardTitle>Digital vs Traditional Trade Finance</CardTitle>
                <CardDescription>
                  Compare letters of credit, wire transfers, and digital escrow for international trade.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Managing Trade Disputes</CardTitle>
                <CardDescription>
                  How smart contracts and automated arbitration resolve international trade conflicts.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Secure Your International Trade?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join exporters and importers worldwide who are eliminating payment risks with digital escrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Your First Trade
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Contact Trade Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
