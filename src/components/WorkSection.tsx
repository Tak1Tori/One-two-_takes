import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from "react-router-dom";

interface WorkSectionProps {
  apiKey: string;
  folderId: string;
}

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({ apiKey, folderId }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [workImages, setWorkImages] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch images from Google Drive
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image'&key=${apiKey}&fields=files(id,name,mimeType)&pageSize=20`
        );

        if (!response.ok) throw new Error('Failed to fetch images from Google Drive');

        const data = await response.json();
        setWorkImages(data.files || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [apiKey, folderId]);

  // Get image URL from Google Drive
  const getImageUrl = (fileId: string) => {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800-h600`;
  };

  // Auto-slide for images
  useEffect(() => {
    if (workImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === workImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [workImages.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading work images...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 lg:py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          <Link to="/">
            <img
              className="w-20 h-16 md:w-24 md:h-18 lg:w-30 lg:h-22 cursor-pointer"
              src="/assets/Gen4_logo_film_productuon_one_two_takes_minimalism_camera_a_2,_3188451074 (1).png"
              alt="Logo"
            />
          </Link>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
              {t('work.title')}
            </h2>
            <div className="w-24 md:w-32 h-0.5 bg-white mt-2 md:mt-4 mx-auto md:mx-0"></div>
          </div>
        </div>

        {/*  Auto-sliding Image Gallery */}
        <div className="mb-12 md:mb-16 lg:mb-20 relative">
          <div className="absolute inset-0 bg-gray-800/20 -z-10 rounded-md md:rounded-lg"></div>

          {workImages.length > 0 ? (
            <div className="relative h-32 md:h-40 overflow-hidden rounded-md md:rounded-lg">
              <div
                className="flex absolute top-0 left-0 h-full transition-transform duration-1000 ease-in-out gap-2"
                style={{
                  width: `${workImages.length * 200}px`,
                  transform: `translateX(-${currentImageIndex * 200}px)`
                }}
              >
                {workImages.map((image) => (
                  <div
                    key={image.id}
                    className="flex-shrink-0 w-48 md:w-64 h-32 md:h-40 overflow-hidden rounded-md"
                  >
                    <img
                      src={getImageUrl(image.id)}
                      alt={image.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        const fileId = image.id;
                        if (!img.src.includes('uc?export=view')) {
                          img.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                        } else if (!img.src.includes('uc?id=')) {
                          img.src = `https://drive.google.com/uc?id=${fileId}`;
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 md:py-20">
              <Camera className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400 text-lg md:text-xl">
                {t('work.noImages')}
              </p>
            </div>
          )}
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <button className="px-6 md:px-8 py-3 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 rounded-lg text-base md:text-lg font-light tracking-wide">
            <Link to="/contacts">{t('work.contact')}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
