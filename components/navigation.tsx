"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    setIsOpen(false)
  }

  const navItems = [
    {
      href: "/global-trade",
      label: "Global Trade",
      description: "For exporters and importers",
    },
    {
      href: "/freelancer",
      label: "Freelancer",
      description: "For service providers",
    },
    {
      href: "/integrations",
      label: "Integrations",
      description: "Build with the protocol",
    },
    {
      href: "/protocol",
      label: "Protocol & Community",
      description: "Technical docs and community",
    },
    {
      href: "/support",
      label: "Support and Contact",
      description: "Help and documentation",
    },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 group" onClick={handleNavClick}>
          <Image
            src="/images/logo-main.png"
            alt="Escrow Protocol"
            width={240}
            height={54}
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 ml-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={handleNavClick}>
              <Button variant="ghost" className="text-sm font-medium h-auto p-3 hover:bg-primary/5">
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 ml-auto">
          <Button size="sm" className="hidden sm:flex">
            Start Escrow
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={handleNavClick}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.description}</span>
                  </Link>
                ))}
                <Button className="mt-4">Start Escrow</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
