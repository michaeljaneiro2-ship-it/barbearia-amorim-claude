
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Portfolio />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;
