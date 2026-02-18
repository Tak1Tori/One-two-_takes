import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, Folder } from 'lucide-react';
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

interface PhotoGalleryProps {
  apiKey: string;
  folderId: string;
}
const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ apiKey, folderId }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [photosets, setPhotosets] = useState<Photoset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhotoset, setSelectedPhotoset] = useState<Photoset | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  

  // Fetch photosets folders and their photos
  useEffect(() => {
    const fetchPhotosets = async () => {
      try {
        // Get all folders inside the photosets folder directly
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

  // Get high quality image URL
  const getImageUrl = (fileId: string, size: 'thumbnail' | 'full' = 'full') => {
    if (size === 'thumbnail') {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800-h600`;
    }
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

const openPhotosetModal = (photoset: Photoset) => {
  const slug = createSlug(photoset.name);
  navigate(`/projects/${slug}`);
};

  const closeModal = () => {
    setSelectedPhotoset(null);
    setSelectedPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedPhotoset) {
      setSelectedPhotoIndex((prev) => 
        prev === selectedPhotoset.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoset) {
      setSelectedPhotoIndex((prev) => 
        prev === 0 ? selectedPhotoset.photos.length - 1 : prev - 1
      );
    }
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

  const visiblePhotosets = photosets;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wider">{t('photosets.pageTitle')}</h1>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Create photoset cards */}
          {visiblePhotosets.map((photoset) => (
            <div 
              key={photoset.id} 
              className="relative group cursor-pointer" 
              onClick={() => openPhotosetModal(photoset)}
            >
              <div className="aspect-[16/10] bg-gray-800 rounded-lg overflow-hidden relative">
                {photoset.coverPhoto ? (
                  <img
                    src={getImageUrl(photoset.coverPhoto.id, 'thumbnail')}
                    alt={photoset.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      const fileId = photoset.coverPhoto!.id;
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
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-gray-500" />
                  </div>
                )}
                
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6 opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-white">{photoset.name}</h3>
                  <p className="text-lg md:text-xl text-gray-200">{photoset.photos.length} photos</p>
                </div>

                <div className="placeholder absolute inset-0 bg-gray-700 items-center justify-center text-gray-400 hidden">
                  <div className="text-center">
                    <Folder className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">{photoset.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {photosets.length === 0 && (
          <div className="text-center py-12 md:py-20">
            <Folder className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-lg md:text-xl">No photosets found</p>
            <p className="text-gray-500 text-xs md:text-sm mt-2 px-4">Make sure there's a "photosets" folder with subfolders containing images</p>
          </div>
        )}
      </div>

      {/* Modal for photoset gallery */}
      {selectedPhotoset && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-7xl max-h-[90vh] mx-auto px-6">
            <div className="relative max-w-full max-h-full">
              <img
                src={getImageUrl(selectedPhotoset.photos[selectedPhotoIndex].id, 'full')}
                alt={selectedPhotoset.photos[selectedPhotoIndex].name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  const fileId = selectedPhotoset.photos[selectedPhotoIndex].id;
                  if (!img.src.includes('uc?export=view')) {
                    img.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                  } else if (!img.src.includes('thumbnail')) {
                    img.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`;
                  } else {
                    img.src = `https://drive.google.com/uc?id=${fileId}`;
                  }
                }}
              />
            </div>
          </div>

          {/* Photo info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-3 rounded-full text-center">
            <div className="text-lg font-medium mb-1">{selectedPhotoset.name}</div>
            <div className="text-sm text-gray-300">
              {selectedPhotoIndex + 1} / {selectedPhotoset.photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;