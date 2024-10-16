import React from 'react';
import './Testimonials.css';
import userImage from '../assets/images/profile.png'; 

function Testimonials() {
  return (
    <section className="testimonials">
      <h4>Testimonials</h4>
      <h2>What Our Users Say</h2>
      <h4>Hear from the citizens who have benefited from our platform.</h4>
      <div className="testimonial-list">
        <div className="testimonial">
          <div className="testimonial-image">
            <img src={userImage} alt="User" />
          </div>
          <div className="testimonial-info">
            <h4>Sushant Roy</h4>
            <p>"Nagrik Aur Samvidhan has been a game-changer for me. I now understand my rights and responsibilities as a citizen."</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src={userImage} alt="User" />
          </div>
          <div className="testimonial-info">
            <h4>Surya Sekhar Prajapati</h4>
            <p>"The interactive lessons and quizzes on this platform have made learning about the Constitution fun and engaging."</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src={userImage} alt="User" />
          </div>
          <div className="testimonial-info">
            <h4>Piyush Sharma</h4>
            <p>"Nagrik Aur Samvidhan has empowered me to understand and exercise my constitutional rights as a citizen."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
