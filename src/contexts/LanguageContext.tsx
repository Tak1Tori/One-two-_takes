import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';

interface TranslationKeys {
  [key: string]: string;
}

interface Translations {
  en: TranslationKeys;
  de: TranslationKeys;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.photosets': 'Projects',
    'nav.about': 'About',
    'nav.contacts': 'Contacts',

    // Main Page
    'hero.title': 'What We Do',
    'hero.description': 'From sharp simple concepts to sophisticated solutions, at onetwotakes we craft visuals to ensure your brand message finds the right audience. We film. We connect.',
    'photosets.title': 'Our Projects',
    'photosets.description': 'Explore our curated collections of professional photography work',
    'photosets.viewAll': 'View All Projects',
    'work.title': 'From Idea to Takes',
    'work.contact': 'Contact Us Now',

    // Footer
    'footer.emailTitle': 'WE MAKE NON-ANNOYING EMAILS!',
    'footer.emailDescription': 'Pop Your Email & we\'ll Prove It',
    'footer.emailPlaceholder': 'Demolink@Gmail.com',
    'footer.submit': 'Submit',

    // About Page
    'about.whatIs': 'what is one two takes ?',
    'about.heroTitle': 'The Three Pillars of onetwotakes',
    'about.service1.title': 'Know your customers — and theirs',
    'about.service1.description': 'Every strong film starts with listening. We dig deep to understand what drives you — and what moves your audience. Because in the end, it’s not just about beautiful shots. It’s about creating a bond between your story and your audience that feels real — and unforgettable.',
    'about.service2.title': 'Go all in',
    'about.service2.description': 'Ideas alone aren’t enough. Discipline, skills, and precision matter just as much. At onetwotakes, we throw everything into the work — creativity, strategy, craft — to make visuals that don’t just land, but spread. No halfway.',
    'about.service3.title': 'Be transparent',
    'about.hero.title2': 'What do we do for you exactly?',
    'about.service3.description': 'Surprises should happen on screen, not in business. With clear budgets, set deadlines, and open communication, you’ll always know where we stand. From first call to final cut, we keep it straight, simple, and honest.',
    'about.service4.description': 'Brand films / image filmsCommercials (TV, web, social ads)Product videos Social media content (Reels, TikToks, YouTube shorts)Event coverage (conferences, trade shows, festivals)Corporate videos (internal communication, training)Recruitment & employer branding videosMusic videosDocumentaries & short filmsEducational & e-learning content Behind-the-scenes or “making of” films',
    'about.teamTitle': 'Our Team',
    'about.teamDescription': 'There are many large media companies, but only one video studio! We are a team of photographers, graphic designers, project marketers, e-commerce specialists and content marketers who work hard for you from Leipzig. We strive to capture products brightly and present them convincingly at every stage. We are modern, flexible, personalized and focused on small and medium businesses.',
    'about.readyTitle': 'Are you ready?',
    'product.list1': 'Brand films / image films',
    'product.list2': 'Commercials (TV, web, social ads)',
    'product.list3': 'Product videos',
    'product.list4': 'Social media content (Reels, TikToks, YouTube shorts)',
    'product.list5': 'Event coverage (conferences, trade shows, festivals)',
    'product.list6': 'Corporate videos (internal communication, training)',
    'product.list7': 'Recruitment & employer branding videos',
    'product.list8': 'Music videos',
    'product.list9': 'Documentaries & short films',
    'product.list10': 'Educational & e-learning content',
    'product.list11': 'Behind-the-scenes or “making of” films',
    'about.contactButton': 'Contact Us Now',

    // Contacts Page
    'contacts.title': 'Contacts',
    'contacts.description': 'Feel free to contact us at any time to get more information and discuss your projects.',
    'contacts.firstName': 'Name',
    'contacts.lastName': 'Last Name',
    'contacts.email': 'E-Mail',
    'contacts.phone': 'Phone Number',
    'contacts.shootingDate': 'Shooting Date',
    'contacts.products': 'Which Products? (Shoes, Watches, etc.)',
    'contacts.additionalInfo': 'Additional Information (optional)',
    'contacts.imageCount': 'Number of Images per Order (non-binding)',
    'contacts.sendRequest': 'Send Request',
    'contacts.sending': 'Sending...',
    'contacts.success': 'Email client opened. Please send the email.',
    'contacts.error': 'Error sending message. Please try again.',

    // Photosets Page
    'photosets.pageTitle': 'Our Projects',
    'photosets.showMore': 'Show More',
    'photosets.showLess': 'Show Less',
    'photosets.backToPhotosets': 'Back to Photosets',
    'photosets.photos': 'Photo',
    'photosets.videos': 'Video',
    'photosets.backstage': 'Backstage',
    'photosets.noPhotosets': 'No photosets found',
    'photosets.noPhotosetsDescription': 'Make sure there are folders with images in the specified directory',

    // Loading and Error states
    'loading.photosets': 'Loading projects...',
    'loading.team': 'Loading team...',
    'loading.workImages': 'Loading work images...',
    'loading.photoset': 'Loading projects...',
    'error.prefix': 'Error: ',
    'work.noImages': 'No work images found',
    'about.noTeamMembers': 'No team members found',

    // Testimonials
    'testimonials.title1': 'Superb Work!',
    'testimonials.text1': 'Blessing Welcomed Ladyship She Met Humoured Sir Breeding Her. Six Curiosity Day Assurance Bed Necessary.',
    'testimonials.author1': 'Sabo Masties',
    'testimonials.title2': 'Amazing Experience!',
    'testimonials.text2': 'Professional service and outstanding results. The attention to detail was incredible and exceeded all expectations.',
    'testimonials.author2': 'Maria Johnson',
    'testimonials.title3': 'Highly Recommended!',
    'testimonials.text3': 'Fantastic work quality and excellent communication throughout the project. Will definitely work with them again.',
    'testimonials.author3': 'David Smith',
    'testimonials.title4': 'Outstanding Quality!',
    'testimonials.text4': 'The final product was beyond what we imagined. Creative, professional, and delivered on time.',
    'testimonials.author4': 'Sarah Wilson',
    'testimonials.title5': 'Perfect Service!',
    'testimonials.text5': 'From start to finish, everything was handled with care and professionalism. Truly exceptional work.',
    'testimonials.author5': 'Michael Brown',
    'testimonials.title6': 'Incredible Results!',
    'testimonials.text6': 'The creativity and skill shown in this project was remarkable. Couldn\'t be happier with the outcome.',
    'testimonials.author6': 'Emma Davis'
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.photosets': 'Projekte',
    'nav.about': 'Über uns',
    'nav.contacts': 'Kontakt',

    // Main Page
    'hero.title': 'Was Wir Tun',
    'hero.description': 'Von klaren, einfachen Konzepten bis hin zu anspruchsvollen Lösungen – bei onetwotakes erstellen wir visuelle Elemente, um sicherzustellen, dass Ihre Markenbotschaft das richtige Publikum erreicht.Wir filmen. Wir verbinden.',
    'photosets.title': 'Unsere Projekte',
    'photosets.description': 'Erkunden Sie unsere kuratierten Sammlungen professioneller Fotografiearbeiten',
    'photosets.viewAll': 'Alle Projekte ansehen',
    'work.title': 'From Idea to Takes',
    'work.contact': 'Jetzt Kontakt aufnehmen',

    // Footer
    'footer.emailTitle': 'WIR MACHEN NICHT-NERVIGE E-MAILS!',
    'footer.emailDescription': 'Geben Sie Ihre E-Mail ein & wir beweisen es',
    'footer.emailPlaceholder': 'Demolink@Gmail.com',
    'footer.submit': 'Senden',

    // About Page
    'about.whatIs': 'was ist one two takes ?',
    'about.heroTitle': 'Die drei Säulen von onetwotakes',
    'about.service1.title': 'Kennen Sie Ihre Kunden – und deren',
    'about.service1.description': 'Jeder gute Film beginnt mit Zuhören. Wir gehen tief in die Materie, um zu verstehen, was Sie antreibt – und was Ihr Publikum bewegt. Denn letztendlich geht es nicht nur um schöne Aufnahmen. Es geht darum, eine Verbindung zwischen Ihrer Geschichte und Ihrem Publikum zu schaffen, die sich authentisch anfühlt – und unvergesslich.',
    'about.service2.title': 'Gehen Sie aufs Ganze',
    'about.service2.description': 'Ideen allein reichen nicht. Disziplin, Können und Präzision sind ebenso wichtig. Bei onetwotakes geben wir alles – Kreativität, Strategie und Handwerk – um Bilder zu schaffen, die nicht nur ankommen, sondern sich auch verbreiten. Keine halben Sachen.',
    'about.service3.title': 'Seien Sie transparent',
    'about.hero.title2': 'Was genau tun wir für Sie?',
    'about.service3.description': 'Überraschungen sollten auf dem Bildschirm passieren, nicht im Geschäft. Mit klaren Budgets, festen Terminen und offener Kommunikation wissen Sie immer, woran wir sind. Vom ersten Anruf bis zum finalen Schnitt bleiben wir klar, unkompliziert und ehrlich.',
    'about.service4.description': 'Markenfilme / ImagefilmeWerbespots (TV, Web, Social Ads)Produktvideos Social-Media-Inhalte (Reels, TikToks, YouTube-Shorts)Event-Berichterstattung (Konferenzen, Messen, Festivals)Unternehmensvideos (interne Kommunikation, Schulungen)Recruiting- und Employer-Branding-VideosMusikvideosDokumentationen und KurzfilmeLehr- und E-Learning-Inhalte Blicke hinter die Kulissen oder „Making of“-Filme',
    'about.teamTitle': 'Unser Team',
    'about.teamDescription': 'Große Medienunternehmen gibt es viele, aber nur ein Videostudio! Wir sind ein Team aus Fotografen, Grafikdesignern, Projektmarketern, E-Commerce-Spezialisten und Content-Marketern, die hart für Sie aus Leipzig arbeiten. Wir streben danach, Produkte hell zu erfassen und sie in jeder Phase überzeugend zu präsentieren. Wir sind modern, flexibel, personalisiert und auf kleine und mittlere Unternehmen fokussiert.',
    'about.readyTitle': 'Sind Sie bereit?',
    'product.list1': 'Markenfilme / Imagefilme',
    'product.list2': 'Werbespots (TV, Web, Social-Media-Anzeigen)',
    'product.list3': 'Produktvideos',
    'product.list4': 'Social-Media-Inhalte (Reels, TikToks, YouTube Shorts)',
    'product.list5': 'Eventberichterstattung (Konferenzen, Messen, Festivals)',
    'product.list6': 'Unternehmensvideos (interne Kommunikation, Schulungen)',
    'product.list7': 'Recruiting- und Employer-Branding-Videos',
    'product.list8': 'Musikvideos',
    'product.list9': 'Dokumentationen und Kurzfilme',
    'product.list10': 'Bildungs- und E-Learning-Inhalte',
    'product.list11': 'Behind-the-Scenes- oder Making-of-Filme',
    'about.contactButton': 'Jetzt Kontakt aufnehmen',
    

    // Contacts Page
    'contacts.title': 'Kontakte',
    'contacts.description': 'Melden Sie sich gerne jederzeit bei uns, um weitere Informationen zu erhalten und Ihre Projekte zu besprechen.',
    'contacts.firstName': 'Vorname',
    'contacts.lastName': 'Nachname',
    'contacts.email': 'E-Mail',
    'contacts.phone': 'Telefonnummer',
    'contacts.shootingDate': 'Datum der Dreharbeiten',
    'contacts.products': 'Welche Produkte? (Schuhe, Uhren, etc.)',
    'contacts.additionalInfo': 'Weitere Informationen (optional)',
    'contacts.imageCount': 'Anzahl der Bilder je Auftrag (unverbindlich)',
    'contacts.sendRequest': 'Anfrage senden',
    'contacts.sending': 'Wird gesendet...',
    'contacts.success': 'E-Mail-Client wurde geöffnet. Bitte senden Sie die E-Mail ab.',
    'contacts.error': 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',

    // Photosets Page
    'photosets.pageTitle': 'Unsere Projekte',
    'photosets.showMore': 'Mehr anzeigen',
    'photosets.showLess': 'Weniger anzeigen',
    'photosets.backToPhotosets': 'Zurück zu Fotosets',
    'photosets.photos': 'Foto',
    'photosets.videos': 'Video',
    'photosets.backstage': 'Backstage',
    'photosets.noPhotosets': 'Keine Fotosets gefunden',
    'photosets.noPhotosetsDescription': 'Stellen Sie sicher, dass es Ordner mit Bildern im angegebenen Verzeichnis gibt',

    // Loading and Error states
    'loading.photosets': 'Ladeprojekte...',
    'loading.team': 'Lade Team...',
    'loading.workImages': 'Lade Arbeitsbilder...',
    'loading.photoset': 'Ladeprojekte...',
    'error.prefix': 'Fehler: ',
    'work.noImages': 'Keine Arbeitsbilder gefunden',
    'about.noTeamMembers': 'Keine Teammitglieder gefunden',

    // Testimonials
    'testimonials.title1': 'Hervorragende Arbeit!',
    'testimonials.text1': 'Segen Willkommen Ladyship Sie traf Humoured Sir Breeding Her. Sechs Neugier Tag Versicherung Bett Notwendig.',
    'testimonials.author1': 'Sabo Masties',
    'testimonials.title2': 'Erstaunliche Erfahrung!',
    'testimonials.text2': 'Professioneller Service und herausragende Ergebnisse. Die Liebe zum Detail war unglaublich und übertraf alle Erwartungen.',
    'testimonials.author2': 'Maria Johnson',
    'testimonials.title3': 'Sehr empfehlenswert!',
    'testimonials.text3': 'Fantastische Arbeitsqualität und ausgezeichnete Kommunikation während des gesamten Projekts. Werde definitiv wieder mit ihnen arbeiten.',
    'testimonials.author3': 'David Smith',
    'testimonials.title4': 'Herausragende Qualität!',
    'testimonials.text4': 'Das Endprodukt war jenseits dessen, was wir uns vorgestellt hatten. Kreativ, professionell und pünktlich geliefert.',
    'testimonials.author4': 'Sarah Wilson',
    'testimonials.title5': 'Perfekter Service!',
    'testimonials.text5': 'Von Anfang bis Ende wurde alles mit Sorgfalt und Professionalität behandelt. Wirklich außergewöhnliche Arbeit.',
    'testimonials.author5': 'Michael Brown',
    'testimonials.title6': 'Unglaubliche Ergebnisse!',
    'testimonials.text6': 'Die Kreativität und das Können, die in diesem Projekt gezeigt wurden, waren bemerkenswert. Könnte nicht glücklicher mit dem Ergebnis sein.',
    'testimonials.author6': 'Emma Davis'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};