"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function AGB() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      {/* Main Content */}
      <div className="ml-0 md:ml-64">
        <div className="py-20 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 1 Geltungsbereich</h2>
                  <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von Miguel Haesler im Bereich Performance Marketing. Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 2 Vertragsabschluss</h2>
                  <p>Der Vertrag kommt durch schriftliche Bestätigung des Auftrags zustande. Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 3 Leistungen</h2>
                  <p>Die Leistungen umfassen Beratung, Konzeption und Umsetzung von Performance Marketing-Strategien. Der Umfang der Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 4 Vergütung</h2>
                  <p>Die Vergütung erfolgt nach den vereinbarten Stundensätzen oder Pauschalpreisen. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug fällig.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 5 Haftung</h2>
                  <p>Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Bei leichter Fahrlässigkeit haftet Miguel Haesler nur bei Verletzung wesentlicher Vertragspflichten.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 6 Datenschutz</h2>
                  <p>Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO).</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">§ 7 Schlussbestimmungen</h2>
                  <p>Es gilt deutsches Recht. Gerichtsstand ist der Sitz von Miguel Haesler. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit des übrigen Vertrags unberührt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
