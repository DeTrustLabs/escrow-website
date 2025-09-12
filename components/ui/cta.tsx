"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import React from "react"

export type CTAButton = {
  label: React.ReactNode
  href: string
  newTab?: boolean
}

export type CTASectionProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  primary?: CTAButton
  secondary?: CTAButton
  children?: React.ReactNode
}

export function CTASection({
  title,
  subtitle,
  primary,
  secondary,
  children,
}: CTASectionProps) {
  const renderButton = (
    cfg: CTAButton,
    variant: "primary" | "secondary" = "primary"
  ) => {
    const newTab = cfg.newTab
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {}
    return (
      <Link href={cfg.href} {...newTab}>
        <Button
          size="lg"
          variant={variant === "primary" ? "secondary" : "outline"}
          className="px-8 py-4"
        >
          {cfg.label}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    )
  }

  return (
    <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-center text-background overflow-hidden">
      <div className="relative">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children ? (
          <div className="flex items-center justify-center">{children}</div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primary && renderButton(primary, "primary")}
            {secondary && renderButton(secondary, "secondary")}
          </div>
        )}
      </div>
    </section>
  )
}

export default CTASection
