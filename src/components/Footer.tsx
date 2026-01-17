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

