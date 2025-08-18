import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Escrow Protocol - Secure Business Transactions",
  description:
    "Decentralized escrow protocol for international trade and freelancing. Non-custodial, secure, and available 24/7. Because trust changes everything.",
  keywords: "escrow, blockchain, international trade, freelancing, smart contracts, Internet Computer, secure payments",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
