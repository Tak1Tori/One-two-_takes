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
  role: string;
  image: string;
}

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

const AboutUsPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
  const PHOTOSETS_FOLDER_ID = import.meta.env.VITE_PHOTOSETS_FOLDER_ID;

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    if (!PHOTOSETS_FOLDER_ID) {
      setTeamMembers([]);
      setLoading(false);
      return;
    }

    try {
      // First, find the "staf sets" folder inside photosets folder
      const foldersResponse = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${PHOTOSETS_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'+and+name='staf sets'&key=${API_KEY}&fields=files(id,name)&pageSize=1`
      );
      
      if (!foldersResponse.ok) {
        console.warn('Failed to fetch staf sets folder');
        setTeamMembers([]);
        setLoading(false);
        return;
      }
      
      const foldersData = await foldersResponse.json();
      const stafSetsFolder = foldersData.files?.[0];
      
      if (!stafSetsFolder) {
        console.warn('staf sets folder not found');
        setTeamMembers([]);
        setLoading(false);
        return;
      }

      // Now get all team member folders from "staf sets" folder
      const teamFoldersResponse = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${stafSetsFolder.id}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name)&pageSize=100`
      );
      
      if (!teamFoldersResponse.ok) {
        console.warn('Failed to fetch team member folders');
        setTeamMembers([]);
        setLoading(false);
        return;
      }
      
      const teamFoldersData = await teamFoldersResponse.json();
      const folders = teamFoldersData.files || [];

      // For each folder (team member), get their photo and description
      const teamMembersData = await Promise.all(
        folders.map(async (folder: DriveFile) => {
          try {
            // Get files from the team member's folder
            const filesResponse = await fetch(
              `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)&pageSize=100`
            );
            
            if (!filesResponse.ok) {
              console.warn(`Failed to fetch files for ${folder.name}`);
              return null;
            }
            
            const filesData = await filesResponse.json();
            const files = filesData.files || [];
            
            // Find photo (image file)
            const photoFile = files.find((file: DriveFile) => 
              file.mimeType && file.mimeType.startsWith('image/')
            );
            
            // Find description file
            const descriptionFile = files.find((file: DriveFile) => 
              file.name.toLowerCase().includes('staf description') || 
              file.name.toLowerCase().includes('staff description')
            );
            
            let role = 'Team Member'; // Default role
            
            // Try to get role from description file
            if (descriptionFile) {
              try {
                let descriptionText = '';
                
                if (descriptionFile.mimeType === 'application/vnd.google-apps.document') {
                  // Google Docs file
                  const textResponse = await fetch(
                    `https://www.googleapis.com/drive/v3/files/${descriptionFile.id}/export?mimeType=text/plain&key=${API_KEY}`
                  );
                  if (textResponse.ok) {
                    descriptionText = await textResponse.text();
                  }
                } else if (descriptionFile.mimeType === 'text/plain') {
                  // Plain text file
                  const textResponse = await fetch(
                    `https://www.googleapis.com/drive/v3/files/${descriptionFile.id}?alt=media&key=${API_KEY}`
                  );
                  if (textResponse.ok) {
                    descriptionText = await textResponse.text();
                  }
                }
                
                if (descriptionText.trim()) {
                  role = descriptionText.trim();
                }
              } catch (descError) {
                console.warn(`Failed to load description for ${folder.name}:`, descError);
              }
            }
            
            return {
              id: folder.id,
              name: folder.name,
              role: role,
              image: photoFile ? `https://drive.google.com/thumbnail?id=${photoFile.id}&sz=w600-h800` : ''
            };
          } catch (err) {
            console.warn(`Error processing team member ${folder.name}:`, err);
            return null;
          }
        })
      );

      // Filter out failed requests
      const validTeamMembers = teamMembersData.filter(
        (member): member is TeamMember => member !== null && member.image !== ''
      );

      setTeamMembers(validTeamMembers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // const getImageUrl = (imageUrl: string) => {
  //   return imageUrl;
  // };

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
    {
      title: t('about.service4.title'),
      description: t('about.service4.description')
    }

  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-white text-xl">{t('loading.team')}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-red-400 text-xl">{t('error.prefix')}{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

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
        </div>

        {/* Team Section */}
        {/* Team Section - только если есть члены команды
        {teamMembers.length > 0 && (
          <div className="mb-20 md:mb-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16">
              {t('about.teamTitle')}
            </h2>
            
            <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed mb-12 md:mb-16 max-w-4xl mx-auto">
              {t('about.teamDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-[3/4] bg-gray-700 rounded-lg overflow-hidden mb-4 md:mb-6">
                    {member.image ? (
                      <img
                        src={getImageUrl(member.image)}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          const fileId = member.image.match(/id=([^&]+)/)?.[1];
                          if (fileId && !img.src.includes('uc?export=view')) {
                            img.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                          } else if (fileId && !img.src.includes('uc?id=')) {
                            img.src = `https://drive.google.com/uc?id=${fileId}`;
                          } else {
                            // Fallback to placeholder
                            img.src = `https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?cs=srgb&w=400&h=600&fit=crop`;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* CTA Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12">
            {t('about.readyTitle')}
          </h2>
          
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