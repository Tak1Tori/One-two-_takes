// DatenschutzPage.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DatenschutzPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-800">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p>Präambel</p>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten
          (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die
          Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen
          der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
          innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet
          als "Onlineangebot").
        </p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>

        <p>Verantwortlicher</p>
        <p>
          Artyom Afoshin Fotograf / Videograf<br />
          Europa-Allee 31,<br />
          60327 Frankfurt am Main<br />
          E-Mail-Adresse: onetwotakes@gmail.com
        </p>

        <p>Übersicht der Verarbeitungen</p>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und
          verweist auf die betroffenen Personen.
        </p>

        <p>Arten der verarbeiteten Daten</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Bestandsdaten (z.B. Namen, Adresses).</li>
          <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
          <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
          <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
          <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).</li>
          <li>Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie).</li>
        </ul>

        <p>Kategorien betroffener Personen</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Leistungsempfänger und Auftraggeber.</li>
          <li>Interessenten.</li>
          <li>Kommunikationspartner.</li>
          <li>Nutzer.</li>
          <li>Geschäfts- und Vertragspartner.</li>
        </ul>

        <p>Zwecke der Verarbeitung</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.</li>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>Sicherheitsmaßnahmen.</li>
          <li>Direktmarketing.</li>
          <li>Reichweitenmessung.</li>
          <li>Tracking.</li>
          <li>Büro- und Organisationsverfahren.</li>
          <li>Konversionsmessung.</li>
          <li>Zielgruppenbildung.</li>
          <li>Organisations- und Verwaltungsverfahren.</li>
          <li>Feedback.</li>
          <li>Marketing.</li>
          <li>Profile mit nutzerbezogenen Informationen.</li>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
          <li>Informationstechnische Infrastruktur.</li>
          <li>Öffentlichkeitsarbeit.</li>
          <li>Absatzförderung.</li>
          <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren.</li>
        </ul>

        <p>Maßgebliche Rechtsgrundlagen</p>
        <p>
          Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten
          verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in
          Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) – Die betroffene Person hat ihre Einwilligung in die
            Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke
            gegeben.
          </li>
          <li>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO) – Die Verarbeitung ist für die
            Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
          </li>
          <li>
            Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO) – Die Verarbeitung ist zur Erfüllung einer
            rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
          </li>
          <li>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) – Die Verarbeitung ist zur Wahrung der
            berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen,
            Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht
            überwiegen.
          </li>
        </ul>

        <p>Nationale Datenschutzregelungen in Deutschland</p>
        <p>
          Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört
          insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
          Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
          besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten
          Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
          Anwendung gelangen.
        </p>

        <p>Sicherheitsmaßnahmen</p>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der
          Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem
          Risiko angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des
          physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung
          der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die
          Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
          Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>

        <p>Übermittlung und Offenbarung von personenbezogenen Daten</p>
        <p>
          Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
          selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser
          Daten können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von
          Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und
          schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten
          ab.
        </p>

        <p>Allgemeine Informationen zur Datenspeicherung und Löschung</p>
        <p>
          Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden
          Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in
          denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen,
          wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.
        </p>
        <p>
          Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig
          ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.
        </p>
        <p>
          Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell für bestimmte
          Verarbeitungsprozesse gelten. Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die längste
          Frist maßgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer
          Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.
        </p>

        <p>Aufbewahrung und Löschung von Daten:</p>
        <p>Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:</p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            10 Jahre - Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte,
            Eröffnungsbilanz sowie die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§ 147 Abs.
            1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).
          </li>
          <li>
            8 Jahre - Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO
            sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).
          </li>
          <li>
            6 Jahre - Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe, Wiedergaben der abgesandten Handels-
            oder Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung von Bedeutung sind, z. B. Stundenlohnzettel,
            Betriebsabrechnungsbögen, Kalkulationsunterlagen, Preisauszeichnungen, aber auch Lohnabrechnungsunterlagen, soweit sie nicht bereits
            Buchungsbelege sind und Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).
          </li>
          <li>
            3 Jahre - Daten, die erforderlich sind, um potenzielle Gewährleistungs- und Schadensersatzansprüche oder ähnliche
            vertragliche Ansprüche und Rechte zu berücksichtigen sowie damit verbundene Anfragen zu bearbeiten, basierend auf früheren
            Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die Dauer der regulären gesetzlichen Verjährungsfrist von drei Jahren
            gespeichert (§§ 195, 199 BGB).
          </li>
        </ul>

        <p>Rechte der betroffenen Personen</p>
        <p>
          Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere
          aus Art. 15 bis 21 DSGVO ergeben:
        </p>

        <p>
          Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
          die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
          Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
          personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung
          der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit
          solcher Direktwerbung in Verbindung steht.
        </p>

        <p>
          Widerrufsrecht bei Einwilligungen: Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
        </p>

        <p>
          Auskunftsrecht: Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden
          und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
        </p>

        <p>
          Recht auf Berichtigung: Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
          betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
        </p>

        <p>
          Recht auf Löschung und Einschränkung der Verarbeitung: Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
          verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen.
        </p>

        <p>
          Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach
          Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung
          an einen anderen Verantwortlichen zu fordern.
        </p>

        <p>
          Beschwerde bei Aufsichtsbehörde: Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
          Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
          Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der
          Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
        </p>

        <p>Geschäftliche Leistungen</p>
        <p>
          Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden und Interessenten (zusammenfassend als „Vertragspartner"
          bezeichnet), im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf
          die Kommunikation mit den Vertragspartnern (oder vorvertraglich), etwa zur Beantwortung von Anfragen.
        </p>

        <p>
          Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören insbesondere die Pflichten zur
          Erbringung der vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und sonstigen
          Leistungsstörungen. Darüber hinaus verwenden wir die Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen Pflichten
          verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation. Zudem verarbeiten wir die Daten auf Grundlage unserer berechtigten
          Interessen sowohl an einer ordnungsgemäßen und betriebswirtschaftlichen Geschäftsführung als auch an Sicherheitsmaßnahmen zum Schutz
          unserer Vertragspartner und unseres Geschäftsbetriebs vor Missbrauch, Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte
          (z. B. zur Beteiligung von Telekommunikations-, Transport- und sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und
          Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden Rechts geben wir die Daten von Vertragspartnern
          nur insoweit an Dritte weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Über
          weitere Formen der Verarbeitung, etwa zu Marketingzwecken, werden die Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
        </p>

        <p>
          Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.
          B. in Onlineformularen, durch besondere Kennzeichnung (z. B. Farben) bzw. Symbole (z. B. Sternchen o. Ä.), oder persönlich mit.
        </p>

        <p>
          Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d. h. grundsätzlich nach vier Jahren, es
          sei denn, dass die Daten in einem Kundenkonto gespeichert werden, z. B., solange sie aus gesetzlichen Gründen der Archivierung
          aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn Jahre). Daten, die uns im Rahmen eines Auftrags durch den
          Vertragspartner offengelegt wurden, löschen wir entsprechend den Vorgaben und grundsätzlich nach Ende des Auftrags.
        </p>

        <p>
          Verarbeitete Datenarten: Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen, Kundennummer,
          etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
          Telefonnummern). Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
        </p>

        <p>
          Betroffene Personen: Leistungsempfänger und Auftraggeber; Interessenten. Geschäfts- und Vertragspartner.
        </p>

        <p>
          Zwecke der Verarbeitung: Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten; Kommunikation;
          Büro- und Organisationsverfahren; Organisations- und Verwaltungsverfahren. Geschäftsprozesse und betriebswirtschaftliche Verfahren.
        </p>

        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung".
        </p>

        <p>
          Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche
          Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>Bereitstellung des Onlineangebots und Webhosting</p>
        <p>
          Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir
          die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät
          der Nutzer zu übermitteln.
        </p>

        <p>
          Verarbeitete Datenarten: Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und
          -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und
          Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B. Logfiles
          betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).
        </p>

        <p>
          Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
        </p>

        <p>
          Zwecke der Verarbeitung: Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
          Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)).
          Sicherheitsmaßnahmen.
        </p>

        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung".
        </p>

        <p>
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>

        <p>
          Bereitstellung Onlineangebot auf gemietetem Speicherplatz: Für die Bereitstellung unseres Onlineangebotes nutzen wir
          Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten oder
          anderweitig beziehen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>
          Erhebung von Zugriffsdaten und Logfiles: Der Zugriff auf unser Onlineangebot wird in Form von sogenannten
          "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und
          Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des
          Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles
          können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von
          missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität
          sicherzustellen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht
          oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
          Vorfalls von der Löschung ausgenommen.
        </p>

        <p>Einsatz von Cookies</p>
        <p>
          Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen,
          verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der
          Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme. Wir verwenden Cookies gemäß den
          gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht notwendig,
          setzen wir auf unsere berechtigten Interessen. Dies gilt, wenn das Speichern und Auslesen von Informationen unerlässlich ist, um
          ausdrücklich angeforderte Inhalte und Funktionen bereitstellen zu können. Dazu zählen etwa die Speicherung von Einstellungen sowie die
          Sicherstellung der Funktionalität und Sicherheit unseres Onlineangebots. Die Einwilligung kann jederzeit widerrufen werden. Wir
          informieren klar über deren Umfang und welche Cookies genutzt werden.
        </p>

        <p>
          Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: Ob wir personenbezogene Daten mithilfe von Cookies verarbeiten,
          hängt von einer Einwilligung ab. Liegt eine Einwilligung vor, dient sie als Rechtsgrundlage. Ohne Einwilligung stützen wir uns auf
          unsere berechtigten Interessen, die vorstehend in diesem Abschnitt und im Kontext der jeweiligen Dienste und Verfahren erläutert sind.
        </p>

        <p>
          Speicherdauer: Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies unterschieden:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>
            Temporäre Cookies (auch: Session- oder Sitzungscookies): Temporäre Cookies werden spätestens gelöscht, nachdem ein
            Nutzer ein Onlineangebot verlassen und sein Endgerät (z. B. Browser oder mobile Applikation) geschlossen hat.
          </li>
          <li>
            Permanente Cookies: Permanente Cookies bleiben auch nach dem Schließen des Endgeräts gespeichert. So können
            beispielsweise der Log-in-Status gespeichert und bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut
            besucht. Ebenso können die mithilfe von Cookies erhobenen Nutzerdaten zur Reichweitenmessung Verwendung finden. Sofern wir Nutzern
            keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten
            sie davon ausgehen, dass diese permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.
          </li>
        </ul>

        <p>
          Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out): Nutzer können die von ihnen abgegebenen Einwilligungen
          jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels der
          Privatsphäre-Einstellungen ihres Browsers, erklären.
        </p>

        <p>
          Verarbeitete Datenarten: Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
          Identifikationsnummern, beteiligte Personen).
        </p>

        <p>
          Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
        </p>

        <p>
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
          DSGVO).
        </p>

        <p>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten: Verarbeitung von Cookie-Daten auf Grundlage einer
          Einwilligung: Wir setzen eine Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von Cookies oder
          zu den im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern eingeholt wird. Dieses Verfahren dient der
          Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen, insbesondere bezogen auf den Einsatz von Cookies und
          vergleichbaren Technologien, die zur Speicherung, zum Auslesen und zur Verarbeitung von Informationen auf den Endgeräten der Nutzer
          eingesetzt werden. Im Rahmen dieses Verfahrens werden die Einwilligungen der Nutzer für die Nutzung von Cookies und die damit verbundenen Verarbeitungen von Informationen, einschließlich der im Einwilligungs-Management-Verfahren genannten spezifischen Verarbeitungen und Anbieter, eingeholt. Die Nutzer haben zudem die Möglichkeit, ihre Einwilligungen zu verwalten und zu widerrufen. Die Einwilligungserklärungen werden gespeichert, um eine erneute Abfrage zu vermeiden und den Nachweis der Einwilligung gemäß der gesetzlichen Anforderungen führen zu können. Die Speicherung erfolgt serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie) oder mittels vergleichbarer Technologien, um die Einwilligung einem spezifischen Nutzer oder dessen Gerät zuordnen zu können. Sofern keine spezifischen Angaben zu den Anbietern von Einwilligungs-Management-Diensten vorliegen, gelten folgende allgemeine Hinweise: Die Dauer der Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den Angaben zum Umfang der Einwilligung (z. B. betreffende Kategorien von Cookies und/oder Diensteanbieter) sowie Informationen über den Browser, das System und das verwendete Endgerät gespeichert wird; Rechtsgrundlagen:Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
        </p>

        <p>Blogs und Publikationsmedien</p>
        <p>
          Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation (nachfolgend "Publikationsmedium"). Die Daten der
          Leser werden für die Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für dessen Darstellung und die Kommunikation
          zwischen Autoren und Lesern oder aus Gründen der Sicherheit erforderlich ist. Im Übrigen verweisen wir auf die Informationen zur
          Verarbeitung der Besucher unseres Publikationsmediums im Rahmen dieser Datenschutzhinweise.
        </p>

        <p>
          Verarbeitete Datenarten: Bestandsdaten; Kontaktdaten; Inhaltsdaten; Nutzungsdaten; Meta-, Kommunikations- und
          Verfahrensdaten.
        </p>

        <p>
          Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
        </p>

        <p>
          Zwecke der Verarbeitung: Feedback (z. B. Sammeln von Feedback via Online-Formular); Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit; Sicherheitsmaßnahmen. Organisations- und Verwaltungsverfahren.
        </p>

        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung".
        </p>

        <p>
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>
          Kommentare und Beiträge: Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, können ihre IP-Adressen auf
          Grundlage unserer berechtigten Interessen gespeichert werden. Das erfolgt zu unserer Sicherheit, falls jemand in Kommentaren und
          Beiträgen widerrechtliche Inhalte hinterlässt (Beleidigungen, verbotene politische Propaganda etc.).In diesem Fall können wir selbst für den Kommentar oder Beitrag belangt werden und sind daher an der Identität des Verfassers interessiert.Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten Interessen die Angaben der Nutzer zwecks Spamerkennung zu verarbeiten.Auf derselben Rechtsgrundlage behalten wir uns vor, im Fall von Umfragen die IP-Adressen der Nutzer für deren Dauer zu speichern und Cookies zu verwenden, um Mehrfachabstimmungen zu vermeiden.Die im Rahmen der Kommentare und Beiträge mitgeteilten Informationen zur Person, etwaige Kontakt- sowie Webseiteninformationen als auch die inhaltlichen Angaben werden von uns bis zum Widerspruch der Nutzer dauerhaft gespeichert; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>Kontakt- und Anfrageverwaltung</p>
        <p>
          Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender
          Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der
          Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
        </p>

        <p>
          Verarbeitete Datenarten: Bestandsdaten; Kontaktdaten; Inhaltsdaten; Nutzungsdaten; Meta-, Kommunikations- und
          Verfahrensdaten.
        </p>
        <p>
          Betroffene Personen: Kommunikationspartner.
        </p>
        <p>
          Zwecke der Verarbeitung: Kommunikation; Organisations- und Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback
          via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
        </p>
        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung".
        </p>
        <p>
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche
          Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
        </p>

        <p>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
        <p>
          Kontaktformular: Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder anderen Kommunikationswegen,
          verarbeiten wir die uns übermittelten personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens. Dies umfasst
          in der Regel Angaben wie Name, Kontaktinformationen und gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur
          angemessenen Bearbeitung erforderlich sind. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der Kontaktaufnahme und
          Kommunikation; Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO),
          Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>Kommunikation via Messenger</p>
        <p>
          Wir setzen zu Zwecken der Kommunikation Messenger ein und bitten daher darum, die nachfolgenden Hinweise zur Funktionsfähigkeit der
          Messenger, zur Verschlüsselung, zur Nutzung der Metadaten der Kommunikation und zu Ihren Widerspruchsmöglichkeiten zu beachten.
          Sie können uns auch auf alternativen Wegen, z. B. via Telefon oder E-Mail, kontaktieren. Bitte nutzen Sie die Ihnen mitgeteilten Kontaktmöglichkeiten oder die innerhalb unseres Onlineangebotes angegebenen Kontaktmöglichkeiten.
          Im Fall einer Ende-zu-Ende-Verschlüsselung von Inhalten (d. h., der Inhalt Ihrer Nachricht und Anhänge) weisen wir darauf hin, dass die Kommunikationsinhalte (d. h., der Inhalt der Nachricht und angehängte Bilder) von Ende zu Ende verschlüsselt werden. Das bedeutet, dass der Inhalt der Nachrichten nicht einsehbar ist, nicht einmal durch die Messenger-Anbieter selbst. Sie sollten immer eine aktuelle Version der Messenger mit aktivierter Verschlüsselung nutzen, damit die Verschlüsselung der Nachrichteninhalte sichergestellt ist.
          Wir weisen unsere Kommunikationspartner jedoch zusätzlich darauf hin, dass die Anbieter der Messenger zwar nicht den Inhalt einsehen, aber in Erfahrung bringen können, dass und wann Kommunikationspartner mit uns kommunizieren sowie technische Informationen zum verwendeten Gerät der Kommunikationspartner und je nach Einstellungen ihres Gerätes auch Standortinformationen (sogenannte Metadaten) verarbeitet werden.
        </p>

        <p>
          Hinweise zu Rechtsgrundlagen: Sofern wir Kommunikationspartner vor der Kommunikation mit ihnen via Messenger um eine
          Erlaubnis bitten, ist die Rechtsgrundlage unserer Verarbeitung ihrer Daten deren Einwilligung.Im Übrigen, falls wir nicht um eine Einwilligung bitten und sie z. B. von sich aus Kontakt mit uns aufnehmen, nutzen wir Messenger im Verhältnis zu unseren Vertragspartnern sowie im Rahmen der Vertragsanbahnung als eine vertragliche Maßnahme und im Fall anderer Interessenten und Kommunikationspartner auf Grundlage unserer berechtigten Interessen an einer schnellen und effizienten Kommunikation und Erfüllung der Bedürfnisse unser Kommunikationspartner an der Kommunikation via Messenger. Ferner weisen wir Sie darauf hin, dass wir die uns mitgeteilten Kontaktdaten ohne Ihre Einwilligung nicht erstmalig an die Messenger übermitteln.
        </p>

        <p>
          Widerruf, Widerspruch und Löschung: Sie können jederzeit eine erteilte Einwilligung widerrufen und der Kommunikation
          mit uns via Messenger jederzeit widersprechen. Im Fall der Kommunikation via Messenger löschen wir die Nachrichten entsprechend unseren generellen Löschrichtlinien (d.h. z.B., wie oben beschrieben, nach Ende vertraglicher Beziehungen, im Kontext von Archivierungsvorgängen etc.) und sonst, sobald wir davon ausgehen können, etwaige Auskünfte der Kommunikationspartner beantwortet zu haben, wenn kein Rückbezug auf eine vorhergehende Konversation zu erwarten ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          Vorbehalt des Verweises auf andere Kommunikationswege: Zum Abschluss möchten wir darauf hinweisen, dass wir uns aus Gründen Ihrer Sicherheit vorbehalten, Anfragen über Messenger nicht zu beantworten. Das ist der Fall, wenn z.B. Vertragsinterna besonderer Geheimhaltung bedürfen oder eine Antwort über den Messenger den formellen Ansprüchen nicht genügt. In solchen Fällen verweisen wir Sie auf adäquatere Kommunikationswege.
        </p>

        <p>
          Verarbeitete Datenarten: Kontaktdaten; Nutzungsdaten; Meta-/Kommunikationsdaten.
        </p>
        <p>
          Betroffene Personen: Kommunikationspartner.
        </p>
        <p>
          Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation, Direktmarketing (z. B. per E-Mail oder postalisch).
        </p>
        <p>
          Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
          DSGVO.
        </p>
        <p>
          Eingesetzte Dienste und Diensteanbieter: WhatsApp: WhatsApp Messenger mit Ende-zu-Ende-Verschlüsselung; Dienstanbieter:
          WhatsApp Inc., 1601 Willow Road, Menlo Park, California 94025, USA; Website:{" "}
          <a href="https://www.whatsapp.com/" className="text-blue-600 underline">
            https://www.whatsapp.com/
          </a>
          ; Datenschutzerklärung:{" "}
          <a href="https://www.whatsapp.com/legal" className="text-blue-600 underline">
            https://www.whatsapp.com/legal
          </a>
          .
        </p>
        <p>
          Privacy Shield: Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA:{" "}
          <a href="https://www.whatsapp.com/" className="text-blue-600 underline">
            https://www.privacyshield.gov/participant?id=a2zt0000000TSnwAAG&status=Active
          </a>
        </p>

        <p>Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</p>
        <p>
          Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über diverse Kanäle, wie z. B. E-Mail, Telefon,
          Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann. Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der werblichen Kommunikation jederzeit zu widersprechen.
          Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen Berechtigung erforderlichen Daten zur Kontaktaufnahme oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der Grundlage unserer berechtigten Interessen. Die Verarbeitung dieser Daten ist auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Auf der Grundlage des berechtigten Interesses, den Widerruf bzw. Widerspruch der Nutzer dauerhaft zu beachten, speichern wir ferner die zur Vermeidung einer erneuten Kontaktaufnahme erforderlichen Daten (z. B. je nach Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).
        </p>

        <p>
          Verarbeitete Datenarten: Bestandsdaten; Kontaktdaten; Inhaltsdaten.
        </p>
        <p>
          Betroffene Personen: Kommunikationspartner.
        </p>
        <p>
          Zwecke der Verarbeitung: Direktmarketing (z. B. per E-Mail oder postalisch); Marketing. Absatzförderung.
        </p>
        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung".
        </p>
        <p>
          Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
          DSGVO.
        </p>

        <p>Webanalyse, Monitoring und Optimierung</p>
        <p>
          Die Webanalyse (auch als „Reichweitenmessung" bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebots und kann Verhalten,
          Interessen oder demografische Informationen zu den Besuchern, wie beispielsweise Alter oder Geschlecht, als pseudonyme Werte umfassen.
          Mithilfe der Reichweitenanalyse können wir zum Beispiel erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen beziehungsweise
          Inhalte am häufigsten genutzt werden, oder zur Wiederverwendung einladen. Ebenso ist es uns möglich, nachzuvollziehen, welche Bereiche der
          Optimierung bedürfen.
        </p>
        <p>
          Neben der Webanalyse können wir auch Testverfahren einsetzen, um etwa unterschiedliche Versionen unseres Onlineangebots oder seiner
          Bestandteile zu testen und zu optimieren. Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile, also zu einem
          Nutzungsvorgang zusammengefasste Daten, angelegt und Informationen in einem Browser bzw. in einem Endgerät gespeichert und dann ausgelesen
          werden. u den erhobenen Angaben gehören insbesondere besuchte Websites und dort genutzte Elemente sowie technische Auskünfte, wie etwa der verwendete Browser, das benutzte Computersystem sowie Angaben zu Nutzungszeiten. Sofern sich Nutzer in die Erhebung ihrer Standortdaten uns gegenüber oder gegenüber den Anbietern der von uns eingesetzten Dienste einverstanden erklärt haben, ist auch die Verarbeitung von Standortdaten möglich.
          Darüber hinaus werden die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein IP-Masking-Verfahren (d. h. Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im Rahmen von Webanalyse, A/B-Testings und Optimierung keine Klardaten der Nutzer (wie z. B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme. Das heißt, wir als auch die Anbieter der eingesetzten Software kennen nicht die tatsächliche Identität der Nutzer, sondern nur die zum Zweck der jeweiligen Verfahren in deren Profilen gespeicherten Angaben.
        </p>
        <p>
          Hinweise zu Rechtsgrundlagen: Sofern wir die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter bitten,
          stellt die Rechtsgrundlage der Datenverarbeitung die Einwilligung dar. Ansonsten werden die Nutzerdaten auf Grundlage unserer berechtigten
          Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang
          möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
        </p>
        <p>
          Verarbeitete Datenarten: Nutzungsdaten; Meta-, Kommunikations- und Verfahrensdaten.
        </p>
        <p>
          Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
        </p>
        <p>
          Zwecke der Verarbeitung: Reichweitenmessung; Profile mit nutzerbezogenen Informationen; Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit.
        </p>
        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung". Speicherung von Cookies von bis zu 2 Jahren.
        </p>
        <p>
          Sicherheitsmaßnahmen: IP-Masking (Pseudonymisierung der IP-Adresse).
        </p>
        <p>
          Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
          DSGVO).
        </p>

        <p>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
        <p>
          Google Analytics: Wir verwenden Google Analytics zur Messung und Analyse der Nutzung unseres Onlineangebotes auf der
          Grundlage einer pseudonymen Nutzeridentifikationsnummer. [...]
          Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
          Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO);
          <a href="https://marketingplatform.google.com/intl/de/about/analytics/" className="text-blue-600 underline">
            Website
          </a>{" "}
          |{" "}
          <a href="https://policies.google.com/privacy" className="text-blue-600 underline">
            Datenschutzerklärung
          </a>{" "}
          |{" "}
          <a href="https://business.safety.google/adsprocessorterms/" className="text-blue-600 underline">
            Auftragsverarbeitungsvertrag
          </a>{" "}
          |{" "}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-blue-600 underline">
            Opt-Out
          </a>
        </p>

        <p>Onlinemarketing</p>
        <p>
          Wir verarbeiten personenbezogene Daten zum Zweck des Onlinemarketings, worunter insbesondere die Vermarktung von Werbeflächen oder die
          Darstellung von werbenden und sonstigen Inhalten (zusammenfassend als „Inhalte" bezeichnet) anhand potenzieller Interessen der Nutzer
          sowie die Messung ihrer Effektivität fallen können.
        </p>
        <p>
          Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in einer Datei (der sogenannte „Cookie") gespeichert oder ähnliche
          Verfahren genutzt, mittels derer die für die Darstellung der vorgenannten Inhalte relevanten Angaben zum Nutzer gespeichert werden.
          [...]
        </p>
        <p>
          Hinweise zu Rechtsgrundlagen: Sofern wir die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter bitten,
          stellt die Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar. Ansonsten werden die Daten der Nutzer auf Grundlage unserer
          berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet.
        </p>

        <p>Hinweise zum Widerruf und Widerspruch:</p>
        <p>
          Wir verweisen auf die Datenschutzhinweise der jeweiligen Anbieter und die zu den Anbietern angegebenen Widerspruchsmöglichkeiten (sog.
          "Opt-Out"). Sofern keine explizite Opt-Out-Möglichkeit angegeben wurde, besteht zum einen die Möglichkeit, dass Sie Cookies in den
          Einstellungen Ihres Browsers abschalten. [...]
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>
            Europa:{" "}
            <a href="https://www.youronlinechoices.eu" className="text-blue-600 underline">
              https://www.youronlinechoices.eu
            </a>
          </li>
          <li>
            Kanada:{" "}
            <a href="https://youradchoices.ca/" className="text-blue-600 underline">
              https://youradchoices.ca/
            </a>
          </li>
          <li>
            USA:{" "}
            <a href="https://optout.aboutads.info/" className="text-blue-600 underline">
              https://optout.aboutads.info/
            </a>
          </li>
          <li>
            Gebietsübergreifend:{" "}
            <a href="https://optout.aboutads.info" className="text-blue-600 underline">
              https://optout.aboutads.info
            </a>
          </li>
        </ul>

        <p>
          Verarbeitete Datenarten: Nutzungsdaten; Meta-, Kommunikations- und Verfahrensdaten.
        </p>
        <p>
          Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
        </p>
        <p>
          Zwecke der Verarbeitung: Reichweitenmessung; Tracking; Zielgruppenbildung; Marketing; Profile mit nutzerbezogenen
          Informationen; Konversionsmessung.
        </p>
        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung
          und Löschung". Speicherung von Cookies von bis zu 2 Jahren.
        </p>
        <p>
          Sicherheitsmaßnahmen: IP-Masking (Pseudonymisierung der IP-Adresse).
        </p>
        <p>
          Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)DSGVO).
        </p>

        <p>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
        <p>
          Google Ads und Konversionsmessung: Online-Marketing-Verfahren zum Zwecke der Platzierung von Inhalten und Anzeigen
          innerhalb des Werbenetzwerks des Diensteanbieters (z. B. in Suchergebnissen, in Videos, auf Webseiten usw.), so dass sie Nutzern
          angezeigt werden, die ein mutmaßliches Interesse an den Anzeigen haben. Darüber hinaus messen wir die Konversion der Anzeigen, d. h.
          ob die Nutzer sie zum Anlass genommen haben, mit den Anzeigen zu interagieren und die beworbenen Angebote zu nutzen (sog.
          Konversionen). Wir erhalten jedoch nur anonyme Informationen und keine persönlichen Informationen über einzelne Nutzer.
        </p>
        <p>
          Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
          Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
          DSGVO;
          Website:{" "}
          <a href="https://marketingplatform.google.com" className="text-blue-600 underline">
            https://marketingplatform.google.com
          </a>{" "}
          |{" "}
          Datenschutzerklärung:{" "}
          <a href="https://policies.google.com/privacy" className="text-blue-600 underline">
            https://policies.google.com/privacy
          </a>{" "}
          |{" "}
          <a href="https://business.safety.google/adsservices/" className="text-blue-600 underline">
            Weitere Informationen
          </a>
        </p>

        <p>Präsenzen in sozialen Netzwerken (Social Media)</p>
        <p>
          Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven
          Nutzern zu kommunizieren oder Informationen über uns anzubieten. Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes
          der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die
          Durchsetzung der Nutzerrechte erschwert werden könnte.
        </p>
        <p>
          Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So
          können beispielsweise anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden,
          um etwa Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen.
        </p>
        <p>
          Verarbeitete Datenarten: Kontaktdaten; Inhaltsdaten; Nutzungsdaten.
        </p>
        <p>
          Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
        </p>
        <p>
          Zwecke der Verarbeitung: Kommunikation; Feedback; Öffentlichkeitsarbeit.
        </p>
        <p>
          Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur
          Datenspeicherung und Löschung".
        </p>
        <p>
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </p>

        <p>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
        <p>
          Instagram: Soziales Netzwerk, ermöglicht das Teilen von Fotos und Videos, das Kommentieren und Favorisieren von
          Beiträgen, Nachrichtenversand, Abonnieren von Profilen und Seiten;
          Dienstanbieter: Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland;
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
          <a href="https://www.instagram.com" className="text-blue-600 underline">
            Website
          </a>{" "}
          |{" "}
          <a href="https://privacycenter.instagram.com/policy/" className="text-blue-600 underline">
            Datenschutzerklärung
          </a>
        </p>

        <p>Änderung und Aktualisierung der Datenschutzerklärung</p>
        <p>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an,
          sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die
          Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
        </p>
        <p>
          Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu
          beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
        </p>

        <p className="italic text-gray-600 mt-6">
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DatenschutzPage;