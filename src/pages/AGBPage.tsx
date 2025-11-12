// AGBPage.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AGBPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 md:px-8 py-16 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          AGB
        </h1>

        <p>Allgemeine Geschäftsbedingungen von Artyom Afoshin Fotograf / Videograf (Einzelunternehmen)</p>

        <section className=" text-black">
          <div>
            <p>1. Allgemeine Grundlagen</p>
            <p>1.1 Geltungsbereich und Begriffsbestimmungen</p>
            <p>1.1.1 Die nachfolgenden Bedingungen regeln die vertraglichen Beziehungen zwischen Artyom Afoshin, im Folgenden „Fotograf" genannt, und seinen Kunden im Zusammenhang mit den angebotenen Foto- und Videodienstleistungen.</p>
            <p>1.1.2 Kunden im Sinne dieser AGB sind sowohl Verbraucher (§ 13 BGB) als auch Unternehmer (§ 14 BGB).</p>
            <ul className="list-disc list-inside ml-4">
              <li>Ein Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</li>
              <li>Ein Unternehmer ist jede natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</li>
            </ul>
            <p>1.1.3 Digitale Inhalte sind Fotos und Videos, die in digitaler Form bereitgestellt und unter vertraglich definierten Nutzungsrechten übermittelt werden.</p>

            <p>1.2 Vertragsschluss und Kommunikation</p>
            <p>1.2.1 Die Darstellung der Leistungen auf der Website oder in Angeboten stellt kein bindendes Angebot dar. Ein bindendes Angebot kommt erst durch schriftliche Bestätigung (per E-Mail) oder durch Beginn der Leistungserbringung zustande.</p>
            <p>1.2.2 Die Kommunikation kann per E-Mail, telefonisch oder über den WhatsApp Messenger erfolgen. Der Kunde ist dafür verantwortlich, dass seine Kontaktdaten korrekt sind und technische Barrieren (z. B. SPAM-Filter) den Empfang nicht verhindern.</p>

            <p>1.3 Entgelt und Zahlungsbedingungen</p>
            <p>1.3.1 Alle Preise sind Netto-Preise zuzüglich der gesetzlichen Mehrwertsteuer.</p>
            <p>1.3.2 Die Zahlung erfolgt nach Rechnungserhalt innerhalb von 14 Tagen ohne Abzug, sofern nichts anderes vereinbart ist.</p>
            <p>1.3.3 Die Leistungserbringung (z. B. Fotografie, Filmproduktion, Retusche) kann nach Vereinbarung vor vollständigem Zahlungseingang erfolgen. Die Auslieferung der Foto- und Videodateien erfolgt jedoch erst nach vollständigem Zahlungseingang. Bei größeren Projekten kann eine Anzahlung oder Teilzahlung vereinbart werden.</p>
          </div>

          <div>
            <p>2. Leistungsgegenstand</p>
            <p>2.1 Foto- und Videodienstleistungen</p>
            <p>2.1.1 Der Fotograf erbringt Dienstleistungen im Bereich Fotografie, Videografie, Nachbearbeitung, Schnitt, Montage, Colorgrading und Retusche.</p>
            <p>2.1.2 Die Lieferung der fertigen Dateien erfolgt ausschließlich digital per Download-Link.</p>
            <p>2.1.3 Die Bearbeitungszeit beträgt in der Regel 14 bis 20 Tage. Bei größeren Projekten können die Liefertermine individuell vereinbart werden; verbindliche Liefertermine bedürfen ausdrücklicher Bestätigung.</p>
            <p>2.1.4 Der Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht an den gelieferten Aufnahmen:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Private Kunden: Nutzung zu privaten Zwecken (z. B. Ausdrucke, Social Media).</li>
              <li>Unternehmen: Nutzung für eigene Werbe- und Kommunikationszwecke (Website, Social Media, Print).</li>
            </ul>
            <p>2.1.5 Eine Weitergabe an Dritte oder Bearbeitung über den vertraglich gestatteten Umfang hinaus bedarf der schriftlichen Zustimmung des Fotografen.</p>
            <p>2.1.6 Das Urheberrecht bleibt stets beim Fotografen.</p>
            <p>2.1.7 Die Rechteübertragung steht unter der aufschiebenden Bedingung vollständiger Zahlung (§ 158 Abs. 1 BGB).</p>

            <p>2.2 Stornierungen und Terminänderungen</p>
            <p>2.2.1 Eine Stornierung ist bis 14 Tage vor dem vereinbarten Termin kostenfrei möglich.</p>
            <p>2.2.2 Bei späteren Stornierungen kann der Fotograf eine pauschale Aufwandsentschädigung in Höhe von bis zu 10 % des vereinbarten Honorars verlangen.</p>
            <p>2.2.3 Bereits angefallene Fremdkosten (z. B. Location- oder Reisekosten) sind in jedem Fall zu erstatten.</p>
            <p>2.2.4 Alternativ kann der Termin nach Absprache kostenfrei verschoben werden, sofern Kapazitäten bestehen.</p>
          </div>

          <div>
            <p>3. Gewährleistung und Haftung</p>
            <p>3.1 Es gelten die gesetzlichen Regelungen zur Mängelhaftung.</p>
            <p>3.2 Künstlerische Abweichungen (z. B. Stil, Farbgestaltung, Perspektive) stellen keinen Mangel im rechtlichen Sinne dar. Die Korrekturen und Nachbearbeitungen können individuell besprochen werden.</p>
            <p>3.3 Der Fotograf haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. Für leichte Fahrlässigkeit haftet er nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und nur auf den vertragstypischen, vorhersehbaren Schaden. Für Datenverluste nach Übergabe wird keine Haftung übernommen.</p>
          </div>

          <div>
            <p>4. Ergänzende Bestimmungen</p>
            <p>4.1 Datenschutz und Vertraulichkeit</p>
            <p>4.1.1 Personenbezogene Daten werden ausschließlich zur Vertragsabwicklung verwendet und nicht ohne Einwilligung an Dritte weitergegeben.</p>
            <p>4.1.2 Detaillierte Informationen finden sich in der Datenschutzerklärung auf der Website.</p>

            <p>4.2 Eigenwerbung</p>
            <p>4.2.1 Der Fotograf darf Fotos und Videos nur nach vorheriger Absprache mit dem Kunden zu eigenen Werbezwecken (Website, Portfolio, Social Media) nutzen.</p>

            <p>4.3 Haftungsbeschränkung</p>
            <p>4.3.1 Bei Vorsatz oder grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit haftet der Fotograf uneingeschränkt.</p>
            <p>4.3.2 Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den typischerweise vorhersehbaren Schaden begrenzt.</p>
            <p>4.3.3 Weitergehende Schadensersatzansprüche sind ausgeschlossen. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>

            <p>4.4 Rechtswahl und Gerichtsstand</p>
            <p>4.4.1 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
            <p>4.4.2 Gegenüber Verbrauchern aus dem Ausland gelten die zwingenden Verbraucherschutzvorschriften ihres Wohnsitzstaats fort.</p>
            <p>4.4.3 Gerichtsstand ist Frankfurt am Main, sofern der Kunde Kaufmann oder juristische Person ist.</p>
            <p>4.4.4 Maßgeblich für die Auslegung ist die deutsche Sprachfassung dieser AGB.</p>

            <p className=" text-sm text-gray-500">© 2025 Artyom Afoshin, Fotograf / Videograf, Frankfurt am Main</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AGBPage;