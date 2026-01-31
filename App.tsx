import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AnaimalaiInfo from './components/AnaimalaiInfo.tsx';
import ImpactStats from './components/ImpactStats.tsx';
import SolutionWorkflow from './components/SolutionWorkflow.tsx';
import PolicySection from './components/PolicySection.tsx';
import CommunityImpact from './components/CommunityImpact.tsx';
import DeveloperSection from './components/DeveloperSection.tsx';
import Footer from './components/Footer.tsx';

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