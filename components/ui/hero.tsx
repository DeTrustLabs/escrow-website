"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Play } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useLocale } from "next-intl"

interface HeroButton {
  label: string
  href?: string
  variant?: "default" | "outline" | "secondary"
  onClick?: () => void
  target?: "_blank" | "_self"
  rel?: string
}

interface TrustIndicator {
  text: string
  icon?: ReactNode
}

interface HeroProps {
  badge?: string
  title: string | ReactNode
  subtitle: string
  primaryButton?: HeroButton
  secondaryButton?: HeroButton
  trustIndicators?: TrustIndicator[]
  className?: string
  titleHighlight?: string
}

export function Hero({
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  trustIndicators,
  className = "",
  titleHighlight,
}: HeroProps) {
  const locale = useLocale()
  const prefixHref = (href?: string) => {
    if (!href) return href
    if (href.startsWith("http://") || href.startsWith("https://")) return href
    if (href.startsWith(`/${locale}`)) return href
    if (href.startsWith("/")) return `/${locale}${href}`
    return href
  }
  return (
    <section className={cn("text-center", className)}>
      {badge && (
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Badge variant="secondary" className="px-4 py-2">
            {badge}
          </Badge>
        </div>
      )}

      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
        {title}
        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          {titleHighlight}
        </span>
      </h1>

      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>

      {(primaryButton || secondaryButton) && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {primaryButton &&
            (primaryButton.href ? (
              <Link
                href={prefixHref(primaryButton.href) as string}
                target={primaryButton.target}
                rel={primaryButton.rel}
              >
                <Button size="lg" className="px-8 py-4">
                  {primaryButton.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                className="px-8 py-4"
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ))}

          {secondaryButton &&
            (secondaryButton.href ? (
              <Link
                href={prefixHref(secondaryButton.href) as string}
                target={secondaryButton.target}
                rel={secondaryButton.rel}
              >
                <Button
                  variant={secondaryButton.variant || "outline"}
                  size="lg"
                  className="px-8 py-4 bg-transparent"
                >
                  {secondaryButton.variant === "outline" &&
                  secondaryButton.label === "Watch Demo" ? (
                    <>
                      <Play className="mr-2 h-5 w-5" />
                      {secondaryButton.label}
                    </>
                  ) : (
                    secondaryButton.label
                  )}
                </Button>
              </Link>
            ) : (
              <Button
                variant={secondaryButton.variant || "outline"}
                size="lg"
                className="px-8 py-4 bg-transparent"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.variant === "outline" &&
                secondaryButton.label === "Watch Demo" ? (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    {secondaryButton.label}
                  </>
                ) : (
                  secondaryButton.label
                )}
              </Button>
            ))}
        </div>
      )}

      {trustIndicators && trustIndicators.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center space-x-2">
              {indicator.icon ?? (
                <CheckCircle className="h-4 w-4 text-primary" />
              )}
              <span>{indicator.text}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
