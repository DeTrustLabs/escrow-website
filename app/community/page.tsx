"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  CheckCircle,
  Users,
  MessageSquare,
  BookOpen,
  Code,
  Globe,
  Github,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CommunityPage() {
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
            <Badge variant="secondary">Community</Badge>
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
              Protocol & Community
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Join the <span className="text-primary">Escrow Protocol</span> Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with developers, businesses, and contributors building the future of decentralized escrow
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.escrow-protocol.com/">
                <Button size="lg" className="text-lg px-8">
                  Start Escrow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
                onClick={() => document.getElementById("discord-community")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Community Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get started with the Escrow Protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg" id="discord-community">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Discord Community</CardTitle>
                <CardDescription>
                  Join our active Discord server for real-time discussions, support, and updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://discord.gg/YourDiscordInvite">
                  <Button className="w-full">
                    Join Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Comprehensive guides, API references, and technical documentation.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-white text-gray-400 border-gray-200 cursor-not-allowed">
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Github className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Open Source</CardTitle>
                <CardDescription>Contribute to the protocol development on GitHub.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-white text-gray-400 border-gray-200 cursor-not-allowed">
                  GitHub Repository
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protocol Information */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Protocol Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about the technical architecture and capabilities of the Escrow Protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Contracts</CardTitle>
                <CardDescription>Decentralized escrow logic built on Internet Computer blockchain.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Access</CardTitle>
                <CardDescription>24/7 availability with instant settlement using digital currencies.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Multi-Signature</CardTitle>
                <CardDescription>Flexible approval mechanisms with customizable release conditions.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Getting Started</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path to start using or building with the Escrow Protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">For Users</CardTitle>
                <CardDescription className="text-base">
                  Start using escrow services for secure transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Create your first escrow transaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Learn about digital currency payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Understand dispute resolution</span>
                </div>
                <Link href="https://app.escrow-protocol.com/">
                  <Button className="w-full mt-4">
                    Start Your First Escrow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">For Developers</CardTitle>
                <CardDescription className="text-base">
                  Build applications and integrations with the protocol
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Explore API documentation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Access smart contract interfaces</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Join developer community</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                >
                  View Documentation
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Join the Community?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with other users, developers, and contributors building the future of decentralized escrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://discord.gg/YourDiscordInvite">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Join Discord Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://app.escrow-protocol.com/">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Start Escrow
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
