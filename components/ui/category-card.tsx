"use client"

import { AppImage, AppImageProps } from "../app-image"
import clsx from "clsx"

export type CategoryCardProps = {
  image: {
    src: string
    alt: string
    aspectRatio?: string | number
  } & Omit<AppImageProps, "src" | "alt" | "aspectRatio">
  title: string
  description: string
  className?: string
}

export function CategoryCard({
  image,
  title,
  description,
  className,
}: CategoryCardProps) {
  return (
    <div className={clsx("bg-white rounded-lg shadow-lg", className)}>
      <div className="relative">
        <AppImage
          src={image.src}
          alt={image.alt}
          aspectRatio={image.aspectRatio ?? "4 / 3"}
          rounded
          variant="card"
          className="rounded-b-none"
        />
        <div className="absolute top-5 -left-2 z-10">
          <span
            className={clsx(
              "relative inline-block text-white font-semibold",
              "px-3 py-1 text-base md:text-sm",
              "bg-gradient-to-r from-primary to-primary/80",
              "rounded-r-md shadow-md ring-1 ring-black/5"
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-2 left-0 w-0 h-0 border-t-8 border-l-8 border-t-primary/80 border-l-transparent"
            />
            {title}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}
