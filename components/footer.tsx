import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/images/logo-main.png" alt="Escrow Protocol" width={180} height={40} className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Decentralized escrow protocol for secure B2B transactions. Because trust changes everything.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold">Solutions</h4>
            <div className="space-y-2 text-sm">
              <Link href="/global-trade" className="block text-muted-foreground hover:text-primary">
                Global Trade
              </Link>
              <Link href="/freelancer" className="block text-muted-foreground hover:text-primary">
                Freelancer Services
              </Link>
              <Link href="/integrations" className="block text-muted-foreground hover:text-primary">
                Integrations
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/support" className="block text-muted-foreground hover:text-primary">
                Documentation
              </Link>
              <Link href="/support" className="block text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link href="/protocol" className="block text-muted-foreground hover:text-primary">
                Community
              </Link>
              <Link href="/support" className="block text-muted-foreground hover:text-primary">
                Support
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates on protocol development and features.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Escrow Protocol. All rights reserved.</p>
          <div className="flex space-x-4 text-sm text-muted-foreground mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
