"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"
import { TrendingUp, Users, Shield } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: 2.5,
    suffix: "M+",
    label: "Escrow Volume Secured",
    description: "Total value protected in early adoption",
    color: "text-primary",
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Active Users",
    description: "Early adopters testing the protocol",
    color: "text-primary",
  },
  {
    icon: Shield,
    value: 85,
    suffix: "+",
    label: "Transactions",
    description: "Successfully completed escrows",
    color: "text-primary",
  },
]

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
