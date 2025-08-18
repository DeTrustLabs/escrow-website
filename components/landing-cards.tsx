"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Globe, Users, Code, Building } from 'lucide-react'

const landingCards = [
  {
    title: "Global Trade",
    href: "/global-trade",
    icon: Globe,
    description: "Secure international transactions",
  },
  {
    title: "Freelance",
    href: "/freelancer",
    icon: Users,
    description: "Protected project payments",
  },
  {
    title: "Integrators",
    href: "/integrations",
    icon: Code,
    description: "Build with the protocol",
  },
  {
    title: "Community",
    href: "/protocol",
    icon: Building,
    description: "Join the ecosystem",
  },
]

export function LandingCards() {
  const handleClick = () => {
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {landingCards.map((card, index) => {
        const Icon = card.icon
        return (
          <Link key={index} href={card.href} onClick={handleClick}>
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
