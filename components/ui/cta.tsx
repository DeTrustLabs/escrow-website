"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import React from "react"

type ButtonAction =
  | { href: string; onClick?: never; newTab?: boolean }
  | { href?: never; onClick: () => void; newTab?: never }

type CTAButtonProps = ButtonAction & {
  label: React.ReactNode
  variant?: "secondary" | "outline"
  className?: string
}

export type CTASectionProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  primary: CTAButtonProps
  secondary?: CTAButtonProps
  rounded?: "2xl" | "3xl"
  gradient?: "simple" | "vivid"
  size?: "lg" | "default"
  children?: React.ReactNode
}

export function CTASection({
  title,
  subtitle,
  primary,
  secondary,
  rounded = "3xl",
  gradient = "vivid",
  size = "lg",
  children,
}: CTASectionProps) {
  const wrapperRadius = rounded === "3xl" ? "rounded-3xl" : "rounded-2xl"
  const gradientClass =
    gradient === "vivid"
      ? "relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white overflow-hidden"
      : "bg-gradient-to-r from-primary to-primary/80 text-white"

  const btnSize = size

  const renderButton = (cfg: CTAButtonProps) => {
    const content = (
      <Button
        size={btnSize}
        variant={cfg.variant ?? "secondary"}
        className={cfg.className ?? "px-8 py-4"}
      >
        {cfg.label}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    )

    if ("href" in cfg && cfg.href) {
      const newTab = cfg.newTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}
      return (
        <Link href={cfg.href} {...newTab}>
          {content}
        </Link>
      )
    }
    if ("onClick" in cfg && cfg.onClick) {
      return React.cloneElement(content, { onClick: cfg.onClick })
    }
    return content
  }

  return (
    <section>
      <div className={`${gradientClass} ${wrapperRadius} p-12 text-center`}>
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
              {renderButton(primary)}
              {secondary && renderButton({ variant: "outline", ...secondary })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTASection
