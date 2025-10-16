"use client"

import Link from "next/link"
import { CalBooking } from "@/components/cal-booking"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto container-spacing py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Miguel Haesler
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Performance Marketing Experte für SaaS & Mobile Apps. 
              Ich helfe dir dabei, dein Business auf 8-stellige Jahresumsätze zu skalieren.
            </p>
            <CalBooking 
              username="miguel-haesler" 
              eventSlug="erstgespraech" 
            />
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/impressum" className="hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-primary transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Miguel Haesler. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Performance Marketing Expert</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span>Deutschland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
