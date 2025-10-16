"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      {/* Main Content */}
      <div className="ml-0 md:ml-72">
        <div className="py-20 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Impressum
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                  <p>Miguel Haesler<br />
                  Performance Marketing<br />
                  Philosophenweg 8<br />
                  34121 Kassel</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kontakt:</h3>
                  <p>Telefon: +49 176 64805066<br />
                  E-Mail: kontakt@miguelhaesler.de</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Umsatzsteuer-ID:</h3>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [USt-IdNr. folgt in Kürze]</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle:</h3>
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Haftung für Inhalte:</h3>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Haftung für Links:</h3>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
