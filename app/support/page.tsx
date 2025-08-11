import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  HelpCircle,
  BookOpen,
  MessageCircle,
  Mail,
  ArrowRight,
  Search,
  FileText,
  Video,
  Users,
  Calendar,
  UserPlus,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Support & Contact
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              How Can We <span className="text-primary">Help You?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers to your questions, explore the documentation, or get in touch with the support team.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search for help..." className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Invite-Only Access
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join the Early Access Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are currently working on an invite-only basis. We welcome exporters, importers, trade advisors, and
              freelancers to leave their contact details and we will reach out to discuss how the protocol can benefit
              your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Early Access Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <UserPlus className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">Request Early Access</CardTitle>
                <CardDescription>
                  Tell us about your business and we'll reach out to discuss how the escrow protocol can help you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="accessFirstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input id="accessFirstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label htmlFor="accessLastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input id="accessLastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="accessEmail" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <Input id="accessEmail" type="email" placeholder="Enter your business email" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div>
                    <label htmlFor="userType" className="block text-sm font-medium mb-2">
                      I am a... *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exporter">Exporter</SelectItem>
                        <SelectItem value="importer">Importer</SelectItem>
                        <SelectItem value="trade-advisor">Trade Advisor</SelectItem>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="service-provider">Service Provider</SelectItem>
                        <SelectItem value="financial-institution">Financial Institution</SelectItem>
                        <SelectItem value="developer">Developer/Integrator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="businessDescription" className="block text-sm font-medium mb-2">
                      Tell us about your business
                    </label>
                    <textarea
                      id="businessDescription"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="What type of transactions do you handle? What challenges are you facing?"
                    />
                  </div>
                  <div>
                    <label htmlFor="monthlyVolume" className="block text-sm font-medium mb-2">
                      Estimated Monthly Transaction Volume
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select volume range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                        <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                        <SelectItem value="250k-1m">$250,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    Request Early Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll review your application and reach out within 48 hours.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Calendar Booking */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">Schedule a Call</CardTitle>
                <CardDescription>
                  Book a 30-minute consultation to discuss your specific needs and learn how the escrow protocol can
                  benefit your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Calendar Placeholder */}
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-600 mb-2">Interactive Calendar</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Select your preferred date and time for a consultation call.
                    </p>
                    <Button className="w-full">
                      Open Calendar Booking
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Call Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">What to expect in your call:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Personalized demo of the escrow protocol</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Discussion of your specific use cases</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Integration options and timeline</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Q&A session with our experts</span>
                      </div>
                    </div>
                  </div>

                  {/* Available Times */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Available Times</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Monday - Friday: 9:00 AM - 6:00 PM (UTC)</div>
                      <div>Duration: 30 minutes</div>
                      <div>Format: Video call (Google Meet/Zoom)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Newsletter */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Have a specific question or need personalized help? Send us a message and we'll get back to you within
                  24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest updates on protocol development, new features, and important announcements delivered
                    to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="newsletterEmail" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input id="newsletterEmail" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">What interests you most? (Optional)</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">Protocol updates and new features</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">Integration guides and tutorials</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">Community events and webinars</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">Industry news and insights</span>
                        </label>
                      </div>
                    </div>
                    <Button className="w-full">
                      Subscribe to Newsletter
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-0 shadow-lg bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Join Our Community</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">5,000+</div>
                      <div className="text-sm text-muted-foreground">Newsletter Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24h</div>
                      <div className="text-sm text-muted-foreground">Average Response Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get Help Fast</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to get the support you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Comprehensive guides and API references</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Browse Docs</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Video className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step video guides for common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Get instant help from the support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send a detailed message for complex issues</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to the most common questions about the escrow protocol.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How does the escrow protocol ensure my funds are safe?
                </AccordionTrigger>
                <AccordionContent>
                  The protocol uses smart contracts on the Internet Computer blockchain to hold funds securely. The
                  protocol is a technology - there is no company behind it that is holding or touching your funds. The
                  funds are non-custodial, meaning no third party can access them. They're only released when
                  predetermined conditions are met, such as mutual agreement, time-based release, or document
                  verification.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">What are digital currencies?</AccordionTrigger>
                <AccordionContent>
                  Digital currencies are electronic forms of money that exist only in digital form. Unlike traditional
                  cash, they can be sent instantly across borders without banks. Examples include USDC and USDT, which
                  are stablecoins issued by licensed companies and backed by real US dollars. This means 1 USDC or 1
                  USDT always equals approximately $1 USD, making them perfect for business transactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">What digital currencies are supported?</AccordionTrigger>
                <AccordionContent>
                  The protocol starts with the largest and most liquid stablecoins such as USDT and USDC. In general,
                  all stablecoins from different blockchains can be added. Moreover, the protocol will provide digital
                  currencies of governments, so called CBDCs (Central Bank Digital Currencies), like for example the
                  eNaira or eCedi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How do milestone payments work for long-term projects?
                </AccordionTrigger>
                <AccordionContent>
                  Milestone payments allow you to break large projects into smaller, manageable phases. Each milestone
                  has specific deliverables and approval conditions. Funds are released incrementally as each milestone
                  is completed and approved, providing security for both parties throughout the project lifecycle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What happens if there's a dispute between parties?
                </AccordionTrigger>
                <AccordionContent>
                  The protocol includes a built-in dispute resolution mechanism. If parties can't reach agreement, they
                  can involve an optional mediator or arbitrator. The system supports evidence submission, document
                  review, and fair resolution processes to protect all parties involved.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">How does document verification work?</AccordionTrigger>
                <AccordionContent>
                  Document verification is not yet implemented, but the protocol is working on directly automating the
                  verification of Bills of Lading. When implemented, these documents will be uploaded and verified by
                  authorized parties or systems, and the smart contract will automatically release funds upon successful
                  verification, streamlining the entire trade process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Can I integrate the escrow protocol into my existing platform?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! The protocol offers comprehensive APIs and SDKs for easy integration. You can embed the escrow
                  widget into your platform or build custom solutions using the smart contract interfaces. White-label
                  solutions are also available for businesses that want to offer escrow services under their own brand.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Documentation Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive documentation organized by topic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Basic setup, wallet connection, and your first escrow transaction.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  View Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>User Guides</CardTitle>
                <CardDescription>Detailed guides for freelancers, traders, and business users.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Browse Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Complete API documentation for developers and integrators.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  API Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>Common issues and solutions for technical problems.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best Practices</CardTitle>
                <CardDescription>Security tips and recommended workflows for safe transactions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Video className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step video guides for visual learners.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Watch Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              The support team is here to help you succeed. Get in touch and receive a response within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
