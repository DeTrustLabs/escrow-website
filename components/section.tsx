"use client"

import React, { createContext, useContext } from "react"
import { cn } from "@/lib/utils"

type SectionContextValue = {
  getIndex: () => number
  palette: string[]
}

const SectionContext = createContext<SectionContextValue | null>(null)

export function SectionProvider({
  children,
  startIndex = 0,
  palette = ["bg-gray-50", "bg-white"],
}: {
  children: React.ReactNode
  startIndex?: number
  palette?: string[]
}) {
  let i = startIndex
  const value: SectionContextValue = {
    getIndex: () => ++i,
    palette,
  }
  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  )
}

const defaultPalette = ["bg-gray-50", "bg-white"]

export function Section({
  className,
  children,
  as,
  ...rest
}: {
  className?: string
  children: React.ReactNode
  as?: React.ElementType
} & React.HTMLAttributes<HTMLElement>) {
  const Tag: React.ElementType = as || "section"
  const ctx = useContext(SectionContext)
  const order = ctx ? ctx.getIndex() : 1
  const pal = ctx?.palette || defaultPalette
  const bg = pal[(order - 1) % pal.length]
  return (
    <Tag className={cn("py-20", bg, className)} {...rest}>
      {children}
    </Tag>
  )
}
