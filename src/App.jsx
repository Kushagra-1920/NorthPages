import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg text-white min-h-screen selection:bg-brand-gold selection:text-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <FeaturedWork />
        <Process />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
