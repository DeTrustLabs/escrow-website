"use client"

import { AppImage, AppImageProps } from "./app-image"
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
    <div
      className={clsx(
        "bg-white rounded-lg shadow-lg overflow-hidden",
        className
      )}
    >
      <div className="relative">
        <AppImage
          src={image.src}
          alt={image.alt}
          aspectRatio={image.aspectRatio ?? "4 / 3"}
          rounded
          shadow
          variant="card"
        />
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-primary text-white font-bold px-3 py-1 rounded text-sm break-words max-w-[calc(100%-2rem)]">
            {title}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}
