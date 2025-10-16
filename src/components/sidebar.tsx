"use client"

import Link from "next/link"
import { Home, User, XCircle, Award, TrendingUp, Target, Lightbulb, Settings, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { CalBooking } from "@/components/cal-booking"

export function Sidebar() {
  const router = useRouter()

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const currentPath = window.location.pathname
    
    if (currentPath === '/') {
      // Wenn bereits auf der Startseite, smooth scroll zur gewünschten Sektion
      const targetSection = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`)
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // Wenn auf einer anderen Seite, zur Startseite navigieren und dann zur Sektion scrollen
      router.push('/')
      // Nach dem Navigieren zur Startseite scrollen
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`)
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full w-72 bg-background/95 backdrop-blur-sm border-r border-border/50 flex-col z-40 shadow-professional">
      {/* Logo/Brand */}
      <div className="p-8 border-b border-border/50">
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          Miguel Haesler
        </Link>
        <p className="text-sm text-muted-foreground mt-2 font-medium">
          Performance Marketing
        </p>
        <div className="mt-3 w-12 h-0.5 bg-primary rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-3">
        <button 
          onClick={(e) => handleSectionClick(e, 'home')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <Home className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Home</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'philosophy')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <Lightbulb className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Haesler-Ansatz</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'about')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <User className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Über mich</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'exclusion')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <XCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Ausschlüsse</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'references')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <Award className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Referenzen</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'systems')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <Settings className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Systeme</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'values')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <Heart className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Werte</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'results')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <TrendingUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Ergebnisse</span>
        </button>
        
        <button 
          onClick={(e) => handleSectionClick(e, 'cta')}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group w-full text-left hover:shadow-professional"
        >
          <Target className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Kontakt</span>
        </button>
      </nav>

      {/* Contact & Legal */}
      <div className="p-6 border-t border-border/50 space-y-6">
        <CalBooking 
          username="miguel-haesler" 
          eventSlug="erstgespraech" 
        />
        
        <div className="space-y-3 text-xs text-muted-foreground">
          <Link href="/impressum" className="block hover:text-primary transition-colors py-1">
            Impressum
          </Link>
          <Link href="/agb" className="block hover:text-primary transition-colors py-1">
            Allgemeine Geschäftsbedingungen
          </Link>
          <Link href="/datenschutz" className="block hover:text-primary transition-colors py-1">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  )
}
