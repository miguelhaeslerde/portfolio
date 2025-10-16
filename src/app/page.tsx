"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { Vortex } from "@/components/vortex"
import { CalBooking } from "@/components/cal-booking"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [exclusionGlow, setExclusionGlow] = useState(0)

  useEffect(() => {
    let ticking = false
    
    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
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
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      {/* Main Content */}
      <div className="ml-0 md:ml-72">
        {/* Hero Section */}
        <section id="home" className="w-full h-screen relative overflow-hidden">
          <Vortex
            backgroundColor="hsl(var(--background))"
            className="absolute inset-0"
            containerClassName="absolute inset-0"
            particleCount={75}
            rangeY={150}
            baseHue={264}
            baseSpeed={0.05}
            rangeSpeed={0.15}
            baseRadius={0.2}
            rangeRadius={0.5}
          />
          
          <div className="relative z-10 flex items-center justify-center h-full container-spacing">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                  <p className="text-sm font-medium text-primary">
                    Performance Marketing für SaaS & Mobile Apps
                  </p>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Performance Marketing, das deine Software auf{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    8- bis 9-stellige Jahresumsätze
                  </span>{" "}
                  skaliert
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Kontinuierliches Wachstum durch strategische Marketing-Ansätze und präzises Tracking. 
                  Von 6-stelligen Monatsumsätzen zu 8-stelligen Jahresumsätzen.
                </p>
              </div>
              
              <div className="space-y-8">
                <CalBooking 
                  username="miguel-haesler" 
                  eventSlug="erstgespraech"
                  variant="main"
                />
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>8-stellige Budgets verwaltet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Nachweisbare Ergebnisse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="section-spacing relative overflow-hidden">
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Der Haesler-Ansatz
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Der einzige Abschluss der zählt ist das Geld auf deinem Konto
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Wir helfen Gründern und CEOs dabei, ihre Unternehmen auf 8-stellige Umsätze zu skalieren, 
                ohne den typischen Agentur-Bullshit.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    Du hast 1M+ Jahresumsatz erreicht – aber du fühlst dich gefangener denn je
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Du generierst großartige Umsätze, aber arbeitest 80-Stunden-Wochen, 
                    bekämpfst ständig Brände und dein Business fühlt sich wie ein goldener Käfig an.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Operational Bottlenecks</h4>
                      <p className="text-muted-foreground">
                        Dein Team ist überfordert, Prozesse brechen zusammen und du bist der Flaschenhals für jede Entscheidung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Unvorhersagbares Wachstum</h4>
                      <p className="text-muted-foreground">
                        Du jagst ständig neuen Leads hinterher, aber dein Wachstum ist inkonsistent und abhängig von deinem persönlichen Einsatz.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Marketing das nicht skaliert</h4>
                      <p className="text-muted-foreground">
                        Du hast Agenturen und Berater probiert, aber sie liefern Vanity-Metriken statt vorhersagbarem, profitablen Wachstum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm shadow-professional">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Der Haesler-Ansatz
                </h3>
                <p className="text-xl text-foreground font-semibold mb-4">
                  Dein Markt kauft keine Produkte. Sie kaufen Ergebnisse & Resultate.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Die meisten Unternehmen treffen auf eine "Umsatz-Decke" um 1-5M€, 
                  weil sie sich auf die falschen Dinge konzentrieren. Mit dem Haesler-System durchbrichst du sie.
                </p>
                
                <div className="mt-8">
                  <CalBooking 
                    username="miguel-haesler" 
                    eventSlug="erstgespraech"
                    variant="main"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-spacing relative overflow-hidden">
          {/* Scroll Progress Bar */}
          <div className="fixed left-0 top-0 w-1 h-full bg-muted z-10">
            <div 
              className="w-full bg-primary transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress}%`
              }}
            />
          </div>
          
          {/* Subtle Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Die Wahrheit über Marketing
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Es liegt nicht an dir
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Um in der heutigen Zeit eine eigene Anwendung erfolgreich auf den Markt zu bringen, benötigt man neben Kreativität und Copywriting-Skills vor allem strategisches Fachwissen, das die richtige Zielgruppe präzise adressiert.
                </p>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Du kannst noch so gute und professionelle Videos und schöne Kampagnen haben, wenn du das Ganze nicht über <span className="text-primary font-semibold">10.000€ Adspend pro Tag skalieren</span> kannst, ohne dass deine komplette Kampagne einbricht oder du nicht weißt, wie du deine spezielle App auf allen Plattformen launchen kannst, ohne gesperrt zu werden.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Meine Expertise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gesundheit, Steuern, große Geld-Claims und Erwachsenenindustrie – ich kenne alle Nischen und habe bereits hohe Adspends erfolgreich verwaltet.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Mein Versprechen</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ich kenne alle Wege und Möglichkeiten, damit wir dein Produkt am Markt launchen, ohne dass dein Werbekonto gesperrt wird oder deine Kampagnen einen Bottleneck erfahren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
                    🎯
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Falsche Zielgruppe</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Du richtest dich an die falschen Menschen. Deine Botschaft erreicht nicht die, 
                    die wirklich bereit sind zu kaufen.
                  </p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
                    📢
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Schwache Botschaft</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deine Werbung spricht nicht die wahren Schmerzen an. Sie überzeugt nicht, 
                    weil sie nicht die richtigen Emotionen trifft.
                  </p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
                    🔄
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Keine Optimierung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Du testest nicht systematisch. Du optimierst nicht kontinuierlich. 
                    Du verschwendest Budget ohne zu lernen.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Message */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm shadow-professional">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Das ist das wahre Problem
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Nicht dein Produkt. Nicht deine Idee. Nicht du. 
                  <strong className="text-foreground">Sondern dein Marketing.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Exclusion Section */}
        <section data-section="exclusion" className="section-spacing relative overflow-hidden">
          {/* Animated Background Effect */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.05) 50%, transparent 100%)',
              opacity: exclusionGlow
            }}
          />
          
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-destructive font-semibold text-sm uppercase tracking-wide">
                  Transparenz & Klarheit
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Welche Kunden nehme ich nicht an?
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transparenz schafft Vertrauen. Diese klaren Ausschlusskriterien helfen uns beiden Zeit zu sparen und sicherzustellen, dass wir perfekt zusammenpassen.
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Main Category Card */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-destructive/30 rounded-2xl p-8 shadow-professional-lg hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.01]">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center text-3xl">
                      🏃‍♂️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-destructive mb-6">
                        Gesundheits-, Sport- & Food-Industrie
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        Ich bin meinen Kunden loyal gegenüber und unterstütze keine Konkurrenz. 
                        Falls dein Produkt oder deine Anwendung auch nur im Ansatz in diese Richtung geht 
                        oder Features geplant sind, die in diese Richtung gehen, bin ich die falsche Ansprechperson.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Grid Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: '🔫', title: 'Waffenindustrie', desc: 'Falls sich dein Unternehmen auf Waffenhandel fokussiert, bin ich die falsche Ansprechperson.' },
                  { icon: '🚬', title: 'Tabakwaren', desc: 'Ich vertreibe und vermarkte keine Tabakwaren.' },
                  { icon: '🍷', title: 'Alkohol', desc: 'Ich vertreibe und vermarkte keinen Alkohol.' },
                  { icon: '🌿', title: 'Cannabis', desc: 'Ich vertreibe und vermarkte keine Cannabis-Produkte.' }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-card/60 backdrop-blur-sm border border-destructive/20 rounded-xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-destructive/40">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-2xl">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-destructive mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Message */}
              <div className="mt-16 p-8 bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl shadow-professional">
                <p className="text-center text-xl text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Transparenz schafft Vertrauen.</strong> Diese klaren Ausschlusskriterien 
                  helfen uns beiden Zeit zu sparen und sicherzustellen, dass wir perfekt zusammenpassen.
                </p>
                
                <div className="flex justify-center">
                  <CalBooking 
                    username="miguel-haesler" 
                    eventSlug="erstgespraech"
                    variant="main"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="section-spacing relative overflow-hidden">
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Referenzen & Erfolge
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Vertrauen durch nachweisbare Ergebnisse
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meine Kunden vertrauen mir ihre wertvollsten Marketing-Budgets an. 
                Hier sind einige der Projekte, die ich erfolgreich zum Wachstum geführt habe.
              </p>
              
              <div className="mt-8">
                <CalBooking 
                  username="miguel-haesler" 
                  eventSlug="erstgespraech"
                  variant="main"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reference Card 1 - Steuerbot */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                    🤖
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Steuerbot</h3>
                </div>
              </div>

              {/* Reference Card 2 - Fastic */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                    🍎
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Fastic</h3>
                </div>
              </div>

              {/* Reference Card 3 - Go-Remote */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                    🌍
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Go-Remote</h3>
                </div>
              </div>

              {/* Reference Card 4 - FlexiUhr */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                    ⏰
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">FlexiUhr</h3>
                </div>
              </div>

              {/* Reference Card 5 - The Advertising Collective */}
              <div className="group relative">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                    🎯
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Advertising Collective</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems & Processes Section */}
        <section id="systems" className="section-spacing relative overflow-hidden bg-muted/20">
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Unsere bewährten Systeme & Prozesse
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Wie wir deinen Wettbewerbsvorteil entwickeln
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Accelerate & Scale */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Accelerate & Scale</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Lerne das Haesler Marketing System - ein umfassendes Framework für vorhersagbares, profitables Wachstum.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Strategieentwicklung & Marktanalyse",
                    "Performance Marketing Optimierung", 
                    "Sales Funnel Engineering",
                    "Content Marketing System",
                    "Conversion Rate Optimierung",
                    "Reporting & Datenanalyse",
                    "Skalierung & Team-Training",
                    "Kontinuierlicher Support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Coaching & Training */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Coaching & Training</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Individuelles Coaching und Team-Training für nachhaltigen Erfolg und langfristige Partnerschaften.
                </p>
                
                <div className="space-y-3">
                  {[
                    "1:1 Executive Coaching",
                    "Team Workshops & Training",
                    "Live Q&A Sessions",
                    "Ressourcen-Bibliothek",
                    "Community-Zugang",
                    "Zertifizierungsprogramme",
                    "Strategische Beratung",
                    "Langfristige Betreuung"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Behaviors Section */}
        <section id="values" className="section-spacing relative overflow-hidden">
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Unsere Werte
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transparenz, Ehrlichkeit und messbare Ergebnisse stehen im Mittelpunkt unserer Arbeit.
                  </p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional">
                  <h3 className="text-2xl font-bold text-primary mb-6">Programmatic Behaviors</h3>
                  <div className="space-y-4">
                    {[
                      "1. Fokus auf Ergebnisse, nicht auf Aktivitäten",
                      "2. Datengetriebene Entscheidungen",
                      "3. Kontinuierliche Optimierung",
                      "4. Langfristige Partnerschaften"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                          {index + 1}
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Mit wem wir NICHT arbeiten
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transparenz schafft Vertrauen. Diese klaren Kriterien helfen uns beiden Zeit zu sparen.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Wenn du kein Performance Marketing Professional bist",
                    "Wenn du nicht bereit bist, langfristig zu investieren", 
                    "Wenn du keine messbaren Ergebnisse willst",
                    "Wenn du nicht bereit bist, dein Team zu entwickeln"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="section-spacing relative overflow-hidden bg-muted/20">
          <div className="max-w-6xl mx-auto container-spacing relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Messbare Ergebnisse
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Zahlen, die für sich sprechen
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">€50M+</div>
                <p className="text-lg text-muted-foreground">Verwaltete Marketing-Budgets</p>
              </div>
              
              {/* Stat 2 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">4.2x</div>
                <p className="text-lg text-muted-foreground">Durchschnittlicher ROAS</p>
              </div>
              
              {/* Stat 3 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">150+</div>
                <p className="text-lg text-muted-foreground">Erfolgreiche Kampagnen</p>
              </div>
              
              {/* Stat 4 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">95%</div>
                <p className="text-lg text-muted-foreground">Kundenzufriedenheit</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="section-spacing relative overflow-hidden">
          <div className="max-w-4xl mx-auto container-spacing relative z-10 text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Bereit für <span className="text-primary">8-stellige Umsätze</span>?
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Lass uns in einem kostenlosen Erstgespräch herausfinden, wie ich dein Business auf das nächste Level bringen kann.
              </p>
              
              <div className="space-y-6">
                <CalBooking 
                  username="miguel-haesler" 
                  eventSlug="erstgespraech"
                  variant="main"
                />
                
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Kostenloses Erstgespräch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Keine Verpflichtungen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>30 Minuten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
