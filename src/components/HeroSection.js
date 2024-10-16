import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Nagrik Aur Samvidhan</h1>
        <p>Empowering Citizens through constitutional literacy.</p>
        <div className="hero-buttons">
          <button>Play n Learn</button>
          <button>Let's Learn</button>
        </div>
      </div>
      <div class="highlight-box"></div>

    </section>
  );
}

export default HeroSection;
