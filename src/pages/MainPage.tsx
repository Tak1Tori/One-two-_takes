




import React from 'react';
import WorkSection from '../components/WorkSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Photosets from '../components/Photosets'

const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
const PHOTOSETS_FOLDER_ID = import.meta.env.VITE_PHOTOSETS_FOLDER_ID;

interface HomePageProps {
    apiKey: string;
    folderId: string;
    carouselFolderId: string;
}

const HomePage: React.FC<HomePageProps> = ({ apiKey, carouselFolderId }) => {
    return (
        <div>
            <Header />
            <AboutUs/>
            <Photosets apiKey={API_KEY} folderId={PHOTOSETS_FOLDER_ID} />
            <WorkSection apiKey={apiKey} folderId={carouselFolderId} />
            <Footer />
        </div>
    );
};

export default HomePage;