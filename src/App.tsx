
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/MainPage';
import PhotosetsPage from './pages/PhotosetsPage';
import PhotosetDetailPage from './pages/PhotosetDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import AGBPage from './pages/AGBPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage'
import CookieBanner from './components/CookieBanner';
function App() {
  const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
  const FOLDER_ID = import.meta.env.VITE_MAIN_FOLDER_ID;
  const PHOTOSETS_FOLDER_ID = import.meta.env.VITE_PHOTOSETS_FOLDER_ID;
  const CAROUSEL_FOLDER_ID = import.meta.env.VITE_CAROUSEL_FOLDER_ID;
 const VITE_STAF_INFO_FOLDER_ID = import.meta.env.VITE_STAF_INFO_FOLDER_ID;
  return (
    <LanguageProvider>
      <Router>
        <div className="App">

          <Routes>
            <Route
              path="/"
              element={<HomePage apiKey={API_KEY} folderId={FOLDER_ID} carouselFolderId={CAROUSEL_FOLDER_ID} />}
            />
            <Route
              path="/projects"
              element={<PhotosetsPage apiKey={API_KEY} folderId={PHOTOSETS_FOLDER_ID} />}
            />
        
           <Route
              path="/projects/:slug"
              element={<PhotosetDetailPage apiKey={API_KEY} photosetsFolder={PHOTOSETS_FOLDER_ID} />}
            />

             <Route
              path="/contacts"
              element={<ContactsPage />}
            />
            <Route
              path="/about"
              element={<AboutUsPage apiKey={API_KEY} folderId={VITE_STAF_INFO_FOLDER_ID} />}
            />
            <Route
            path ="/AGB"
            element ={ <AGBPage/>}
            >
            </Route>
            <Route
            path ="/impressum"
            element ={ <ImpressumPage/>}
            >
            </Route>
            <Route
            path ="/privacy-policy"
            element ={ <DatenschutzPage/>}
            >
            </Route>
          </Routes>
            <CookieBanner />
            
        </div>
      </Router>
    
    </LanguageProvider>
  );
}

export default App;