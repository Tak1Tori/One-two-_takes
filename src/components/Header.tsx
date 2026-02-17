import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full h-16 md:h-20 lg:h-24 bg-black text-white py-4 px-4 md:px-8 lg:px-24 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-20 h-16 md:w-24 md:h-18 lg:w-30 lg:h-22 cursor-pointer"
          src="/assets/Gen4_logo_film_productuon_one_two_takes_minimalism_camera_a_2,_3188451074 (1).png"
          alt="Logo"
        />
      </Link>
      {/* Mobile menu button */}
      <button
        className="md:hidden w-8 h-8 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-base lg:text-lg font-medium text-white">
        <Link
          to="/"
          className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === '/' ? 'text-white' : 'text-gray-400'
            }`}
        >
          {t('nav.home')}
        </Link>
        <Link
          to="/projects"
          className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === '/projects' ? 'text-white' : 'text-gray-400'
            }`}
        >
          {t('nav.projects')}
        </Link>
        <Link
          to="/about"
          className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === '/about' ? 'text-white' : 'text-gray-400'
            }`}
        >
          {t('nav.about')}
        </Link>
        <Link
          to="/contacts"
          className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === '/contacts' ? 'text-white' : 'text-gray-400'
            }`}
        >
          {t('nav.contacts')}
        </Link>

        {/* Language selector */}
        <div className="ml-4 flex gap-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 border border-white/30 rounded-l text-sm transition-colors duration-200 ${language === 'en' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
              }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-2 py-1 border border-white/30 rounded-r text-sm transition-colors duration-200 ${language === 'de' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
              }`}
          >
            DE
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black border-t border-gray-800 md:hidden z-50">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link
              to="/"
              className={`hover:text-gray-300 transition-colors duration-200 py-2 ${location.pathname === '/' ? 'text-white' : 'text-gray-400'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/projects"
              className={`hover:text-gray-300 transition-colors duration-200 py-2 ${location.pathname === '/projects' ? 'text-white' : 'text-gray-400'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/about"
              className={`hover:text-gray-300 transition-colors duration-200 py-2 ${location.pathname === '/about' ? 'text-white' : 'text-gray-400'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contacts"
              className={`hover:text-gray-300 transition-colors duration-200 py-2 ${location.pathname === '/contacts' ? 'text-white' : 'text-gray-400'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contacts')}
            </Link>

            {/* Language selector */}
            <div className="mt-4 flex gap-1 w-fit">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsMenuOpen(false);
                }}
                className={`px-2 py-1 border border-white/30 rounded-l text-sm transition-colors duration-200 ${language === 'en' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage('de');
                  setIsMenuOpen(false);
                }}
                className={`px-2 py-1 border border-white/30 rounded-r text-sm transition-colors duration-200 ${language === 'de' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
              >
                DE
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
