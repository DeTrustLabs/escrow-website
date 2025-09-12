import { cn } from "@/lib/utils"

type Padding = "none" | "sm" | "md" | "lg" | "xl"
type Palette = "neutral" | "zinc" | "slate" | "none"

const paddingMap: Record<Padding, string> = {
  none: "",
  sm: "[&_section]:p-12",
  md: "[&_section]:p-16",
  lg: "[&_section]:p-20",
  xl: "[&_section]:p-24",
}

const paletteMap: Record<Palette, { odd: string; even: string }> = {
  neutral: {
    odd: "[&_section:nth-of-type(odd)]:bg-gray-50",
    even: "[&_section:nth-of-type(even)]:bg-white",
  },
  zinc: {
    odd: "[&_section:nth-of-type(odd)]:bg-zinc-50",
    even: "[&_section:nth-of-type(even)]:bg-white",
  },
  slate: {
    odd: "[&_section:nth-of-type(odd)]:bg-slate-50",
    even: "[&_section:nth-of-type(even)]:bg-white",
  },
  none: {
    odd: "",
    even: "",
  },
}

// Server Component: pure Tailwind alternating wrapper (no client state)
export default function SectionGroup({
  children,
  className,
  padding = "lg",
  palette = "neutral",
}: {
  children: React.ReactNode
  className?: string
  padding?: Padding
  palette?: Palette
}) {
  const p = paddingMap[padding]
  const pal = paletteMap[palette]
  return <div className={cn(p, pal.odd, pal.even, className)}>{children}</div>
}
