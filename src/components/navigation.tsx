"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold">
              Miguel
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                Über mich
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projekte
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          <Button asChild>
            <Link href="#contact">
              Kontakt aufnehmen
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
