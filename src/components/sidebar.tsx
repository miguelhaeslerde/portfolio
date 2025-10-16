"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { CalBooking } from "@/components/cal-booking"

export function Sidebar() {
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
  }
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-background border-r border-border flex-col z-50">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
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
        <CalBooking 
          username="miguel-haesler" 
          eventSlug="erstgespraech" 
        />
        
        <div className="space-y-2 text-xs text-muted-foreground">
          <Link href="/impressum" className="block hover:text-foreground transition-colors">
            Impressum
          </Link>
          <Link href="/agb" className="block hover:text-foreground transition-colors">
            Allgemeine Geschäftsbedingungen
          </Link>
          <Link href="/datenschutz" className="block hover:text-foreground transition-colors">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  )
}
