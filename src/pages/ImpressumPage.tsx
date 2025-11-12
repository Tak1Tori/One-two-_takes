// ImpressumPage.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ImpressumPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 md:px-8 py-16 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Impressum
        </h1>

        <section className=" text-wite">
          <div>
            <p>Angaben gemäß § 5 TMG</p>
            <p>Artyom Afoshin Fotograf / Videograf</p>
            <p>Europa-Allee 31</p>
            <p>60327 Frankfurt am Main</p>
          </div>

          <div>
            <p>Kontakt</p>
            <p>Telefon: +49 176 327 47 266</p>
            <p>E-Mail: onetwotakes@gmail.com</p>
          </div>

          <div>
            <p>Umsatzsteuer Identifikationsnummer (USt-ID)</p>
            <p>32/202/01344</p>
          </div>

          <div>
            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
            <p>Artyom Afoshin</p>
          </div>

          <div>
            <p>EU-Streitschlichtung</p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:&nbsp;
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <p>
              Verbraucherstreitbeilegung / Universalschlichtungsstelle: Wir sind nicht bereit oder verpflichtet,
              an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <p>Haftung für Inhalte</p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <p>Haftung für Links</p>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <p>Urheberrecht</p>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <p>Datenschutz</p>
            <p>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
              unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden,
              erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
              Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.
            </p>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung
              von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
              widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
            <p className=" text-sm text-gray-500">
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.e-recht24.de
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImpressumPage;