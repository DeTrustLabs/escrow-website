"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Globe, Users, FileText, Zap } from "lucide-react"

const features = [
  {
    id: "security",
    icon: Shield,
    title: "Non-Custodial Security",
    description:
      "Smart contracts hold funds transparently. No one can access, freeze, or control your digital currencies except you.",
    details:
      "Built on Internet Computer with cryptographic guarantees and multi-signature schemes for maximum security.",
    color: "bg-green-50 border-green-200",
  },
  {
    id: "payments",
    icon: Globe,
    title: "Cross-Border Payments",
    description: "Instant settlement with stablecoins like USDC, USDT, and DAI. No banks, no delays, no borders.",
    details: "Support for major stablecoins with automatic conversion and real-time settlement across 180+ countries.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: "availability",
    icon: Clock,
    title: "24/7 Availability",
    description: "Decentralized smart contracts operate continuously without downtime or maintenance windows.",
    details: "99.9% uptime guaranteed with redundant infrastructure and automatic failover mechanisms.",
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: "signatures",
    icon: Users,
    title: "Multi-Signature Approval",
    description: "Flexible approval mechanisms with buyer, seller, and optional mediator signatures.",
    details: "Customizable m-of-n signature schemes with role-based permissions and time-locked conditions.",
    color: "bg-orange-50 border-orange-200",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Document Support",
    description: "Upload and verify documents like eBill of Lading for automated release conditions.",
    details: "IPFS storage with hash verification, OCR processing, and integration with major shipping providers.",
    color: "bg-pink-50 border-pink-200",
  },
  {
    id: "milestones",
    icon: Zap,
    title: "Milestone Payments",
    description: "Customizable release conditions and milestone-based payments for complex projects.",
    details: "Advanced workflow engine with conditional logic, automated triggers, and progress tracking.",
    color: "bg-yellow-50 border-yellow-200",
  },
]

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState("security")

  const active = features.find((f) => f.id === activeFeature) || features[0]
  const Icon = active.icon

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Feature List */}
      <div className="space-y-4">
        {features.map((feature) => {
          const FeatureIcon = feature.icon
          const isActive = feature.id === activeFeature

          return (
            <Card
              key={feature.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                isActive ? "ring-2 ring-primary shadow-lg" : "hover:shadow-sm"
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${isActive ? "bg-primary text-white" : "bg-gray-100"}`}>
                    <FeatureIcon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Active Feature Details */}
      <div className="lg:sticky lg:top-24">
        <Card className={`border-2 ${active.color} transition-all duration-500`}>
          <CardHeader>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-4 bg-primary text-white rounded-xl">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  Featured
                </Badge>
                <CardTitle className="text-2xl">{active.title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">{active.description}</p>
            <p className="text-sm leading-relaxed">{active.details}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
