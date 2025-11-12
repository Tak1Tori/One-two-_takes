import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

interface Photoset {
  id: string;
  name: string;
  photos: DriveFile[];
  coverPhoto?: DriveFile;
}

interface PhotosetsProps {
  apiKey: string;
  folderId: string;
}

const Photosets: React.FC<PhotosetsProps> = ({ apiKey, folderId }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [photosets, setPhotosets] = useState<Photoset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch photosets from Google Drive
  useEffect(() => {
    const fetchPhotosets = async () => {
      try {
        // Get all folders inside the photosets folder
        const foldersResponse = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${apiKey}&fields=files(id,name)&pageSize=100`
        );
        
        if (!foldersResponse.ok) {
          throw new Error('Failed to fetch photoset folders');
        }
        
        const foldersData = await foldersResponse.json();
        const folders = foldersData.files || [];

        // For each folder, get its photos
        const photosetsWithPhotos = await Promise.all(
          folders.map(async (folder: DriveFile) => {
            try {
              const photosResponse = await fetch(
                `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents+and+mimeType+contains+'image'&key=${apiKey}&fields=files(id,name,mimeType)&pageSize=100`
              );
              
              if (!photosResponse.ok) {
                console.warn(`Failed to fetch photos for folder ${folder.name}`);
                return null;
              }
              
              const photosData = await photosResponse.json();
              const photos = photosData.files || [];
              
              // Find cover photo (prioritize file named "cover")
              const coverPhoto = photos.find((photo: DriveFile) => 
                photo.name.toLowerCase().includes('cover')
              ) || photos[0]; // fallback to first photo
              
              return {
                id: folder.id,
                name: folder.name,
                photos: photos,
                coverPhoto: coverPhoto
              };
            } catch (err) {
              console.warn(`Error fetching photos for folder ${folder.name}:`, err);
              return null;
            }
          })
        );

        // Filter out failed requests and empty photosets
        const validPhotosets = photosetsWithPhotos.filter(
          (photoset): photoset is Photoset => photoset !== null && photoset.photos.length > 0
        );

        setPhotosets(validPhotosets);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotosets();
  }, [apiKey, folderId]);

  // Get image URL from Google Drive
  const getImageUrl = (fileId: string, size: 'thumbnail' | 'full' = 'thumbnail') => {
    if (size === 'thumbnail') {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800-h600`;
    }
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  // Navigate to photoset detail page
  const openPhotoset = (photosetId: string) => {
    navigate(`/photosets/${photosetId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
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

  // Show only first 4 photosets
  const displayedPhotosets = photosets.slice(0, 4);

  return (
    <section className="min-h-screen bg-black text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-4">
            {t('photosets.title')}
          </h2>
          {/* <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            {t('photosets.description')}
          </p> */}
        </div>

        {/* Photosets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {displayedPhotosets.map((photoset) => (
            <div 
              key={photoset.id} 
              className="relative group cursor-pointer"
              onClick={() => openPhotoset(photoset.id)}
            >
              <div className="aspect-[16/10] bg-gray-800 rounded-lg overflow-hidden relative">
                {/* Current slide image */}
                {photoset.photos.length > 0 && (
                  <>
                    <div className="w-full h-full relative">
                      <img
                        src={getImageUrl(photoset.coverPhoto?.id || photoset.photos[0].id, 'thumbnail')}
                        alt={photoset.coverPhoto?.name || photoset.photos[0].name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          const fileId = photoset.coverPhoto?.id || photoset.photos[0].id;
                          if (!img.src.includes('uc?export=view')) {
                            img.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                          } else if (!img.src.includes('uc?id=')) {
                            img.src = `https://drive.google.com/uc?id=${fileId}`;
                          } else {
                            img.style.display = 'none';
                            const placeholder = img.parentElement?.querySelector('.placeholder');
                            if (placeholder) {
                              (placeholder as HTMLElement).style.display = 'flex';
                            }
                          }
                        }}
                      />
                      <div className="placeholder absolute inset-0 bg-gray-700 items-center justify-center text-gray-400 hidden">
                        <div className="text-center">
                          <Folder className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm">{photoset.coverPhoto?.name || photoset.photos[0].name}</p>
                        </div>
                      </div>
                    </div>

                    {/* Overlay with photoset info */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6 opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-white">{photoset.name}</h3>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {displayedPhotosets.length === 0 && (
          <div className="text-center py-12 md:py-20">
            <Folder className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-lg md:text-xl">No photosets found</p>
            <p className="text-gray-500 text-xs md:text-sm mt-2 px-4">Make sure there are folders with images in the specified directory</p>
          </div>
        )}

        {/* View All Button */}
        {displayedPhotosets.length > 0 && (
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => navigate('/photosets')}
              className="px-6 md:px-8 py-3 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 rounded-lg text-base md:text-lg font-light tracking-wide"
            >
              {t('photosets.viewAll')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Photosets;