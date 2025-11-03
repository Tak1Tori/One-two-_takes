import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface PhotosetsPageProps {
    apiKey: string;
    folderId: string;
}

const PhotosetsPage: React.FC<PhotosetsPageProps> = ({ apiKey, folderId }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <PhotoGallery apiKey={apiKey} folderId={folderId} />
            <Footer />
        </div>
    );
};

export default PhotosetsPage;