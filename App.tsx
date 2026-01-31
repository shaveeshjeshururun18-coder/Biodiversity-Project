import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnaimalaiInfo from './components/AnaimalaiInfo';
import ImpactStats from './components/ImpactStats';
import SolutionWorkflow from './components/SolutionWorkflow';
import PolicySection from './components/PolicySection';
import CommunityImpact from './components/CommunityImpact';
import DeveloperSection from './components/DeveloperSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white font-sans selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <Hero />
      <AnaimalaiInfo />
      <ImpactStats />
      <SolutionWorkflow />
      <PolicySection />
      <CommunityImpact />
      <DeveloperSection />
      <Footer />
    </div>
  );
};

export default App;