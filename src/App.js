import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutPlatform from './components/AboutPlatform';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutPlatform />
      <AboutSection/>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
