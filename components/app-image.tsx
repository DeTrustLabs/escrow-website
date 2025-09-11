"use client"

import Image, { ImageProps } from "next/image"
import clsx from "clsx"

type BaseProps = Omit<ImageProps, "src" | "alt" | "fill"> & {
  src: string
  alt: string
  /** Use when you want responsive fill inside an aspect-ratio wrapper */
  aspectRatio?: string | number
  /** If true, image will use fill layout inside wrapper */
  fill?: boolean
  /** Convenience shorthands */
  rounded?: boolean | string
  shadow?: boolean | string
  /** Common sizing patterns */
  variant?: "content" | "card" | "thumb" | "avatar" | "fullBleed"
}

// Default sizes map for responsive loading
const VARIANT_SIZES: Record<string, string> = {
  content: "(max-width: 768px) 100vw, 800px",
  card: "(max-width: 640px) 100vw, (max-width:1024px) 50vw, 25vw",
  thumb: "150px",
  avatar: "80px",
  fullBleed: "100vw",
}

export function AppImage({
  aspectRatio,
  className,
  fill,
  rounded,
  shadow,
  variant = "content",
  sizes,
  alt,
  src,
  width,
  height,
  priority,
  quality,
  ...rest
}: BaseProps) {
  const computedSizes = sizes || VARIANT_SIZES[variant] || VARIANT_SIZES.content

  const roundedClass =
    typeof rounded === "string"
      ? rounded
      : rounded
        ? "rounded-lg"
        : undefined
  const shadowClass =
    typeof shadow === "string"
      ? shadow
      : shadow
        ? "shadow-lg"
        : undefined

  // If aspectRatio provided we force fill inside a wrapper with aspect-ratio
  if (aspectRatio) {
    const ratioValue =
      typeof aspectRatio === "number" ? String(aspectRatio) : aspectRatio
    return (
      <div
        className={clsx(
          "relative w-full overflow-hidden",
          roundedClass,
          shadowClass,
          className
        )}
        style={{ aspectRatio: ratioValue }}
      >
        <Image
          src={src}
            alt={alt}
          fill
          sizes={computedSizes}
          priority={priority}
          quality={quality}
          className="object-cover"
          {...rest}
        />
      </div>
    )
  }

  // If fill explicitly requested (caller must provide a sized/relative parent)
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={computedSizes}
        priority={priority}
        quality={quality}
        className={clsx("object-cover", roundedClass, shadowClass, className)}
        {...rest}
      />
    )
  }

  // Standard width/height image
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={computedSizes}
      priority={priority}
      quality={quality}
      className={clsx(roundedClass, shadowClass, className)}
      {...rest}
    />
  )
}

export type { BaseProps as AppImageProps }
