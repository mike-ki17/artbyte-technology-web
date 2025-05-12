import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import TatuPage from './pages/TatuPage';
import MachinePage from './pages/MachinePage';
import AcademicPage from './pages/AcademicPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import './styles/animations.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Update document title based on current page
  useEffect(() => {
    let title = 'Artbyte Technology';
    
    switch (currentPath) {
      case '/tatu':
        title = 'Tatu Social Network | Artbyte Technology';
        break;
      case '/machine':
        title = 'Autonomous Tattooing Machine | Artbyte Technology';
        break;
      case '/academic':
        title = 'Academic Progress | Artbyte Technology';
        break;
      case '/about':
        title = 'About Us | Artbyte Technology';
        break;
      default:
        title = 'Artbyte Technology | Innovation in Tattoo Technology';
    }
    
    document.title = title;
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/tatu':
        return <TatuPage />;
      case '/machine':
        return <MachinePage />;
      case '/academic':
        return <AcademicPage />;
      case '/about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPath === '/' && <Navbar />}
      {renderPage()}
    </div>
  );
}

export default App;