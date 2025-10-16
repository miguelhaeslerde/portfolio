"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { CalBooking } from "@/components/cal-booking"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const currentPath = window.location.pathname
    
    if (currentPath === '/') {
      // Wenn bereits auf der Startseite, smooth scroll zur Home-Sektion
      const homeSection = document.getElementById('home')
      if (homeSection) {
        homeSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // Wenn auf einer anderen Seite, zur Startseite navigieren
      router.push('/')
    }
    setOpen(false)
  }

  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menü öffnen</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 p-0">
          <div className="flex flex-col h-full">
            {/* Logo/Brand */}
            <div className="p-6 border-b border-border">
              <Link 
                href="/" 
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Miguel Haesler
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Performance Marketing
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6 space-y-2">
              <button 
                onClick={handleHomeClick}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors group w-full text-left"
              >
                <Home className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                <span className="text-sm font-medium">Home</span>
              </button>
            </nav>

            {/* Contact & Legal */}
            <div className="p-6 border-t border-border space-y-4">
              <div onClick={() => setOpen(false)}>
                <CalBooking 
                  username="miguel-haesler" 
                  eventSlug="erstgespraech" 
                />
              </div>
              
              <div className="space-y-2 text-xs text-muted-foreground">
                <Link 
                  href="/impressum" 
                  className="block hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Impressum
                </Link>
                <Link 
                  href="/agb" 
                  className="block hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Allgemeine Geschäftsbedingungen
                </Link>
                <Link 
                  href="/datenschutz" 
                  className="block hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Datenschutzerklärung
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
