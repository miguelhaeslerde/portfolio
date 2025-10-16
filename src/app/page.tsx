"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { Vortex } from "@/components/vortex"
import { CalBooking } from "@/components/cal-booking"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [exclusionGlow, setExclusionGlow] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
      
      // Check if exclusion section is in view
      const exclusionSection = document.querySelector('[data-section="exclusion"]')
      if (exclusionSection) {
        const rect = exclusionSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const isInView = rect.top < windowHeight && rect.bottom > 0
        
        if (isInView) {
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
          setExclusionGlow(progress)
        } else {
          setExclusionGlow(0)
        }
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      {/* Main Content */}
      <div className="ml-0 md:ml-64">
        {/* Hero Section */}
        <section id="home" className="w-full h-screen relative">
          <Vortex
            backgroundColor="hsl(var(--background))"
            className="absolute inset-0"
            containerClassName="absolute inset-0"
            particleCount={200}
            rangeY={300}
            baseHue={340}
            baseSpeed={0.2}
            rangeSpeed={0.5}
            baseRadius={0.5}
            rangeRadius={1}
          />
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center space-y-4 px-2 md:px-10 py-4">
                <div className="space-y-3">
                  <div className="inline-block bg-muted/30 border border-border/30 rounded-full px-4 py-2">
                    <p className="text-sm text-muted-foreground font-medium">
                      Für Webanwendungen und Mobile Apps
                    </p>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-6xl mx-auto">
                    Performance Marketing, was deine Software auf{" "}
                    <span className="bg-gradient-to-r from-foreground via-red-500 to-foreground bg-clip-text text-transparent animate-gradient-x">
                      8- bis 9-stellige Jahresumsätze
                    </span>{" "}
                    skaliert...
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-12">
                    Kontinuierlicher Wachstum, der 6-stellige Monatsumsätze übersteigt wird durch explizite Marketing-Strategien und enges Tracking ermöglicht.
                  </p>
                </div>
                <div className="space-y-6">
                  <CalBooking 
                    username="miguel-haesler" 
                    eventSlug="erstgespraech"
                    variant="main"
                  />
                  <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                    Nachweisbare, monatliche Marketing-Budgetverwaltung in 8-stelligem Bereich. Und bald auch deine?
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20 px-4 md:px-10 relative overflow-hidden">
          {/* Scroll Progress Bar */}
          <div className="fixed left-0 top-0 w-1 h-full bg-gray-300 dark:bg-gray-700 z-10">
            <div 
              className="w-full bg-red-500 transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress}%`
              }}
            />
          </div>
          
          {/* Subtle Spotlight Effect - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-80 h-80 opacity-40" 
               style={{
                 background: 'radial-gradient(circle at 100% 100%, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 40%, transparent 70%)'
               }} />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-8">
                <span className="text-red-500 font-semibold text-xs md:text-sm uppercase tracking-wide">
                  Die Wahrheit
                </span>
              </div>
              
              <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-foreground via-red-500 to-foreground bg-clip-text text-transparent">
                Es liegt nicht an dir
              </h2>
              
              <div className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-6">
                <p>
                  Um in der heutigen Zeit eine eigene Anwendung komplett erfolgreich auf den Markt zu bringen, benötigt man neben Kreativität und Copywriting-Skills vor allem Fachwissen, welches dafür sorgt, dass man die persönliche Traumzielgruppe auf korrektem Wege adressieren kann.
                </p>
                
                <p>
                  Du kannst noch so gute und professionelle Videos und schöne Kampagnen haben, wenn du das Ganze nicht über 10.000€ Adspend pro Tag skalieren kannst, ohne, dass deine komplette Kampagne einbricht oder du nicht weißt, wie du deine spezielle App auf allen Plattformen gelaunched bekommst, ohne auf Grund deiner speziellen Nische oder deinem Anwendungsbereich gesperrt zu werden, <span className="text-red-500 font-semibold">bin ich dein Partner.</span>
                </p>
                
                <p>
                  Gesundheit, Steuern, große Geld-Claims und Erwachsenenindustrie – ich kenne alles und habe alles bereits mit hohen Adspends versehen.
                </p>
                
                <p>
                  Entsprechend kenne ich alle Wege und Möglichkeiten, damit wir auch dein Produkt am Markt launchen, ohne, dass dein Werbekonto gesperrt wird oder deine Kampagnen ab einem gewissen Punkt einen Bottleneck erfahren.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
              {/* Card 1 */}
              <div className="group relative">
                <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                    🎯
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Falsche Zielgruppe</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Du richtest dich an die falschen Menschen. Deine Botschaft erreicht nicht die, 
                    die wirklich bereit sind zu kaufen.
                  </p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group relative">
                <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                    📢
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Schwache Botschaft</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Deine Werbung spricht nicht die wahren Schmerzen an. Sie überzeugt nicht, 
                    weil sie nicht die richtigen Emotionen trifft.
                  </p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="group relative">
                <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                    🔄
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Keine Optimierung</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Du testest nicht systematisch. Du optimierst nicht kontinuierlich. 
                    Du verschwendest Budget ohne zu lernen.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Message */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-500/20 rounded-2xl p-4 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-3 md:mb-4">
                  Das ist das wahre Problem
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Nicht dein Produkt. Nicht deine Idee. Nicht du. 
                  <strong className="text-foreground">Sondern dein Marketing.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Exclusion Section */}
        <section data-section="exclusion" className="py-20 px-4 md:px-10 relative overflow-hidden">
          {/* Animated Red Glow Background */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 50%, transparent 100%)',
              opacity: exclusionGlow
            }}
          />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">
              Welche Kunden nehme ich nicht an?
            </h2>
            
            <div className="space-y-8">
              {/* Main Category Card */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-2xl">
                      🏃‍♂️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-red-500 mb-4">
                        Gesundheits-, Sport- & Food-Industrie
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Ich bin meinen Kunden loyal gegenüber und unterstütze keine Konkurrenz. 
                        Falls dein Produkt oder deine Anwendung auch nur im Ansatz in diese Richtung geht 
                        oder Features geplant sind, die in diese Richtung gehen, bin ich die falsche Ansprechperson.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Grid Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '🔫', title: 'Waffenindustrie', desc: 'Falls sich dein Unternehmen auf Waffenhandel fokussiert, bin ich die falsche Ansprechperson.' },
                  { icon: '🚬', title: 'Tabakwaren', desc: 'Ich vertreibe und vermarkte keine Tabakwaren.' },
                  { icon: '🍷', title: 'Alkohol', desc: 'Ich vertreibe und vermarkte keinen Alkohol.' },
                  { icon: '🌿', title: 'Cannabis', desc: 'Ich vertreibe und vermarkte keine Cannabis-Produkte.' }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-card/60 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/40">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-xl">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-red-500 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Message */}
              <div className="mt-12 p-8 bg-muted/20 backdrop-blur-sm border border-border/30 rounded-2xl">
                <p className="text-center text-lg text-muted-foreground">
                  <strong className="text-foreground">Transparenz schafft Vertrauen.</strong> Diese klaren Ausschlusskriterien 
                  helfen uns beiden Zeit zu sparen und sicherzustellen, dass wir perfekt zusammenpassen.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
