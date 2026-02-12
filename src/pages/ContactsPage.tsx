import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactsPage: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    vorname: '',
    email: '',
    telefon: '',
    informationen: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_bof3qnl',   
        'template_jcxamnd', 
        {
          from_name: formData.vorname,
          from_email: formData.email,
          phone: formData.telefon,
          message: formData.informationen,
        },
        'cK60PAZIli-YFU7EA'    
      );

      setSubmitMessage(t('contacts.success'));

      setFormData({
        vorname: '',
        email: '',
        telefon: '',
        informationen: '',
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage(t('contacts.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6">
                {t('contacts.title')}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <span className="text-lg md:text-xl">
                Onetwotakes@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <span className="text-lg md:text-xl">
                +49 176 327 472 66
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <a
                className="text-lg md:text-xl"
                href="https://www.instagram.com/onetwotakes_prod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Onetwotakes_prod
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Youtube className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <a
                className="text-lg md:text-xl"
                href="https://www.youtube.com/@Onetwotakes_prod"
                target="_blank"
                rel="noopener noreferrer"
              >
                Onetwotakes
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
              <a
                className="text-lg md:text-xl"
                href="https://www.linkedin.com/in/artyom-afoshin-05797721b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artyom Afoshin
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-4 md:space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs md:text-sm mb-2">
                    {t('contacts.firstName')}
                  </label>
                  <input
                    type="text"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white text-black rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs md:text-sm mb-2">
                    {t('contacts.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white text-black rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs md:text-sm mb-2">
                  {t('contacts.phone')}
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  placeholder="+49123456789"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white text-black rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs md:text-sm mb-2">
                  {t('contacts.additionalInfo')}
                </label>
                <textarea
                  name="informationen"
                  value={formData.informationen}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white text-black rounded-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 md:px-8 py-3 md:py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50"
              >
                {isSubmitting ? t('contacts.sending') : t('contacts.sendRequest')}
              </button>

              {submitMessage && (
                <div className={`text-center p-3 rounded-lg ${
                  submitMessage.includes('error')
                    ? 'bg-red-900/20 text-red-400'
                    : 'bg-green-900/20 text-green-400'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactsPage;
