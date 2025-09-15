import { cn } from "@/lib/utils"

// Server Component: pure Tailwind alternating wrapper (no client state)
export default function SectionGroup({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "[&_section>*]:max-w-7xl [&_section>*]:mx-auto [&_section>*]:w-full [&_section>*]:px-4",
        "[&_section:nth-of-type(even)]:bg-primary/8",
        "[&_section:nth-of-type(odd)]:bg-background",
        "[&_section]:p-8 [&_section]:md:p-16 [&_section]:lg:p-20 [&_section]:xl:p-24",
        className
      )}
    >
      {children}
    </div>
  )
}
