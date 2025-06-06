import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    console.log('GlucoSense Landing Page Loaded');
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;