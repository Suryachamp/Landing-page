import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <button className="about-btn">About us</button>
        <h1>Empowering Citizens Through Constitutional Literacy</h1>
        <p className='section-content'>
          Nagrik Aur Samvidhan is a non-profit initiative dedicated to spreading constitutional awareness and fostering an informed citizenry. 
          Our team of legal experts and educators are committed to making the language of the Constitution accessible to all.
        </p>
      </div>
      <div className="cta-buttons">
        <button className="btn join-btn">Join the Discussion</button>
        <button className="btn contact-btn">Contact us</button>
      </div>
    </section>
  );
}

export default AboutSection;
