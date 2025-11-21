import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Requests from './components/sections/Requests';
import Results from './components/sections/Results';
import Benefits from './components/sections/Benefits';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Trust from './components/sections/Trust';
import Services from './components/sections/Services';
import CTA from './components/sections/CTA';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans text-textMain antialiased bg-white selection:bg-primary selection:text-white">
      <Header openModal={openModal} />
      
      <main>
        <Hero openModal={openModal} />
        <Requests openModal={openModal} />
        <Results />
        <Benefits />
        <Process />
        <About />
        <Trust />
        <Services />
        <CTA openModal={openModal} />
        <FAQ />
      </main>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;