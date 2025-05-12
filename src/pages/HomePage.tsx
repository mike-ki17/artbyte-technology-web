import React from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import TatuSection from '../components/TatuSection';
import MachineSection from '../components/MachineSection';
import AcademicProgress from '../components/AcademicProgress';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <TatuSection />
      <MachineSection />
      <AcademicProgress />
      <Footer />
    </div>
  );
};

export default HomePage;