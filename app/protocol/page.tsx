import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code, Users, Vote, BookOpen, ArrowRight, CheckCircle, Github, MessageSquare, Shield, Globe, Cpu } from 'lucide-react'

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Protocol & Community
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Built on <span className="text-primary">Internet Computer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the smart contract architecture, join our developer community, and help build the future of
              trustless escrow infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Read Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="community" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="protocol">Protocol</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="developers">Developers</TabsTrigger>
            </TabsList>

            <TabsContent value="protocol" className="mt-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Smart Contract Architecture</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Trustless escrow infrastructure built on Internet Computer with Chain Fusion for multi-chain
                  interoperability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Cpu className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Canister Smart Contracts</CardTitle>
                    <CardDescription>
                      Escrow logic runs in IC canisters with deterministic execution and cryptographic state
                      verification.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Globe className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Chain Fusion Integration</CardTitle>
                    <CardDescription>
                      Native Bitcoin and Ethereum integration via threshold ECDSA and HTTPS outcalls for cross-chain
                      escrow.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Cryptographic Guarantees</CardTitle>
                    <CardDescription>
                      Multi-signature schemes and time-locked contracts ensure trustless execution without custodial
                      risk.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">Smart Contract Release Mechanisms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Automated Release Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Multi-signature threshold schemes (m-of-n)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Time-locked release with block height verification</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Oracle integration for external data verification</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Document hash verification and IPFS storage</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Advanced Contract Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Milestone-based state transitions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Programmable approval conditions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Dispute resolution with arbitrator DAOs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Gas-efficient batch operations</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-12" id="community">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Community</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Connect with users, developers, and contributors building the future of decentralized escrow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <MessageSquare className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Discord Community</CardTitle>
                    <CardDescription>
                      Join our active Discord server for real-time discussions, support, and updates.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://discord.gg/Gdz5zFfYXjOpen" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Join Discord</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Vote className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Governance Forum</CardTitle>
                    <CardDescription>
                      Participate in protocol governance and vote on important proposals and upgrades.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Visit Forum
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Telegram Group</CardTitle>
                    <CardDescription>Connect with other users and get quick answers to your questions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://t.me/your-telegram-group" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Join Telegram
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">Community Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                    <p className="text-muted-foreground">Community Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                    <p className="text-muted-foreground">Volume Secured</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                    <p className="text-muted-foreground">Transactions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <p className="text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="developers" className="mt-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Build with Our Protocol</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Integrate escrow functionality into your platform or build new applications on top of our protocol.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Code className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>API Documentation</CardTitle>
                    <CardDescription>
                      Comprehensive API docs and SDKs for integrating escrow into your applications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">View API Docs</Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Github className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Open Source</CardTitle>
                    <CardDescription>
                      Explore our open-source codebase and contribute to protocol development.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Developer Guides</CardTitle>
                    <CardDescription>
                      Step-by-step tutorials and examples to get you started building quickly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Read Guides
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">Integration Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Embed Escrow Widget</CardTitle>
                      <CardDescription>
                        Add escrow functionality to your existing platform with our embeddable widget.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Easy integration with any website</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Customizable UI to match your brand</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Full API access and webhooks</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Build Custom Solutions</CardTitle>
                      <CardDescription>
                        Use our smart contract interfaces to build completely custom escrow solutions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Direct smart contract interaction</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Custom business logic support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>White-label solutions available</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build the Future?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of developers, users, and contributors building the next generation of decentralized
              business tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Start Building
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
