import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Создаем mailto ссылку для отправки письма
    const subject = 'New Subscription';
    const body = `Email: ${email}\n\nPlease add me to your mailing list!`;
    const mailtoLink = `mailto:Onetwotakes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Открываем почтовый клиент
    window.location.href = mailtoLink;

    // Очищаем поле ввода
    setEmail('');
  };

  return (
    <footer className="bg-neutral-900 text-white py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Email Subscription Section */}


        {/* <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-light mb-2 tracking-wide text-center md:text-left">
            {t('footer.emailTitle')}
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg text-center md:text-left">
            {t('footer.emailDescription')}
          </p>

          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-md mx-auto md:mx-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('footer.emailPlaceholder')}
              className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="px-6 md:px-8 py-3 bg-black border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium text-sm md:text-base"
            >
              {t('footer.submit')}
            </button>
          </form>
        </div> */}

        {/* Social Media Section */}
        <div className="flex justify-between">
          <div className="flex flex-col mt-4">
            <div className="flex items-center mb-2 md:mb-8 text-center md:text-left gap-4">
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <a className="text-lg md:text-xl" href="https://www.instagram.com/onetwotakes_prod/" target="_blank" rel="noopener noreferrer">Onetwotakes_prod</a>
            </div>
            <div className="flex mb-2 md:mb-8 text-center md:text-left items-center gap-4">
              <Youtube className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <a className="text-lg md:text-xl" href="https://www.youtube.com/@Onetwotakes_prod" target="_blank" rel="noopener noreferrer">Onetwotakes</a>
            </div>
          </div>
          <div className='flex flex-col mt-4 align-middle'>
            <div className="mb-2 md:mb-8 text-center md:text-left">
              <Link to="/AGB"
                className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === 'AGB' ? 'text-white' : 'text-gray-400'
                  }`}
              >
                AGB
              </Link>
            </div>
            <div className="mb-2 md:mb-8 text-center md:text-left">
              <Link to="/Impressum"
                className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === 'Impressum' ? 'text-white' : 'text-gray-400'
                  }`}
              >
                Impressum
              </Link>
            </div>
            <div className="mb-2 md:mb-8 text-center md:text-left">
              <Link to="/privacy-policy"
                className={`hover:text-gray-300 transition-colors duration-200 ${location.pathname === 'Datenschutzerklärung' ? 'text-white' : 'text-gray-400'
                  }`}
              >
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 mt-8"></div>
      </div>
    </footer>
  );
};

export default Footer;

