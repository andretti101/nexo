import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import Intro from './components/Intro';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;
      revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <Navbar onOpenQuote={openQuoteModal} />
      <Hero onOpenQuote={openQuoteModal} />
      <FeaturesBar />
      <Intro />
      <Services />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <CTA onOpenQuote={openQuoteModal} />
      <Footer />
      <FloatingWhatsApp />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
}

export default App;
