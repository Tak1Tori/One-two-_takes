import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface TeamMember {
  id: string;
  name: string;
  description: string;
  image: string;
}
interface AboutUsPageProps {
  apiKey: string;
  folderId: string

}
interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ apiKey, folderId }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [TeamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
  const [staffDebug, setStafDebug] = useState<TeamMember[]>([])
  const [staffLoading, setStaffLoading] = useState<boolean>(false);
  const [staffError, setStaffError] = useState<string | null>(null);




  useEffect(() => {
    const fetchEmployeeFolders = async (): Promise<DriveFile[]> => {
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name)`
      );
      if (!res.ok) throw new Error('Failed to fetch employee folders');
      const data = await res.json();
      return data.files || [];
    };

    const fetchEmployeeFiles = async (folderId: string): Promise<DriveFile[]> => {
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`
      );
      if (!res.ok) throw new Error('Failed to fetch employee files');
      const data = await res.json();
      return data.files || [];
    };

    const buildTeamMember = async (folder: DriveFile): Promise<TeamMember> => {
      const files = await fetchEmployeeFiles(folder.id);

      const descriptionFile = files.find(f =>
        f.name.toLowerCase().includes('staf')
      );

      const imageFile = files.find(f =>
        f.mimeType.startsWith('image')
      );

      let description = '';
      if (descriptionFile) {
        const isGoogleDoc =
          descriptionFile.mimeType ===
          'application/vnd.google-apps.document';

        const url = isGoogleDoc
          ? `https://www.googleapis.com/drive/v3/files/${descriptionFile.id}/export?mimeType=text/plain&key=${API_KEY}`
          : `https://www.googleapis.com/drive/v3/files/${descriptionFile.id}?alt=media&key=${API_KEY}`;

        description = await fetch(url).then(r => r.text());
      }

      return {
        id: folder.id,
        name: folder.name,
        description,
        image: imageFile
          ? `https://drive.google.com/thumbnail?id=${imageFile.id}&sz=w800-h600`
          : '/avatar-placeholder.png'

      };
    };

    const loadTeam = async () => {
      try {
        const folders = await fetchEmployeeFolders();
        const members = await Promise.all(folders.map(buildTeamMember));
        setTeamMembers(members);
      } catch (e) {
        setError('Failed to load team');
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, []);




  const services = [
    {
      title: t('about.service1.title'),
      description: t('about.service1.description')
    },
    {
      title: t('about.service2.title'),
      description: t('about.service2.description')
    },
    {
      title: t('about.service3.title'),
      description: t('about.service3.description')
    },


  ];


  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-7xl">

        {/* Hero Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-lg md:text-xl text-gray-400 mb-4 font-light">
            {t('about.whatIs')}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            {t('about.heroTitle')}
          </h1>
        </div>

        {/* Services Section */}
        <div className="mb-20 md:mb-32">
          <div className="mb-20 md:mb-32">
            <div className="space-y-12 md:space-y-16">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-lg flex items-center justify-center">
                      <Camera className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>

                  </div>

                </div>
              ))}
            </div>

            <div className="text-start mb-10 md:mb-24">
              <h1 className="mt-16  text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
                {t('about.hero.title2')}
              </h1>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list1')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list2')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list3')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list4')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list5')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list6')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list7')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list8')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list9')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list10')}</p>
              <p className='text-gray-300 text-base md:text-lg pb-3.5 leading-relaxed'>{t('product.list11')}</p>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="mb-20 md:mb-32 text-center" >
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            {t('about.teamTitle')}
          </h2>

          {loading ? (
            <p className="text-center text-gray-400">Loading team...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1  gap-6 md:justify-items-center align-middle">
              {TeamMembers.map(member => (
                <div
                  key={member.id}
                  className="bg-white/5 rounded-2xl p-4  w-full max-w-90 "
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={member.image}
                      className="w-70 h-70 object-cover rounded-md"
                      alt={member.name}
                    />
                  </div>
                  <h3 className="text-lg font-medium text-center">{member.name}</h3>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-4 text-center">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Button */}
        <div className="text-center mb-16 md:mb-24">
          <button
            onClick={() => navigate('/contacts')}
            className="px-8 md:px-12 py-3 md:py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-base md:text-lg font-medium tracking-wide"
          >
            {t('about.contactButton')}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );

};

export default AboutUsPage;