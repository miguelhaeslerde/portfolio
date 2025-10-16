"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      {/* Main Content */}
      <div className="ml-0 md:ml-64">
        <div className="py-20 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Datenschutzerklärung
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Datenerfassung auf dieser Website</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Hosting</h2>
                  <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Hosting-Anbieter]. Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich im Geltungsbereich der EU.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Datenschutz</h3>
                  <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                  Miguel Haesler<br />
                  Philosophenweg 8<br />
                  34121 Kassel<br />
                  Telefon: +49 176 64805066<br />
                  E-Mail: kontakt@miguelhaesler.de</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Datenerfassung auf dieser Website</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Server-Log-Dateien</h3>
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Kontaktformular</h2>
                  <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Ihre Rechte</h2>
                  <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
