import React from "react";
import "./AboutPlatform.css";

function AboutPlatform() {
  return (
    <section className="about-platform">
      <h4>About platform</h4>
      <h2>Simplifying the Constitution</h2>
      <p>
        Nagrik Aur Samvidhan is a gamified platform that aims to make the
        language of the Indian Constitution accessible to all citizens. Through
        interactive lessons, quizzes, and discussions, we empower individuals to
        understand their rights and responsibilities.
      </p>
      {/* <div className="platform-features">
        <div className="feature">
          <h3>Play n Learn</h3>
          <p>Engage with interactive games and quizzes to understand constitutional concepts.</p>
        </div>
        <div className="feature">
          <h3>Let's Learn</h3>
          <p>Access simplified explanations and multimedia content to deepen your understanding.</p>
        </div>
        <div className="feature">
          <h3>Discussion Forum</h3>
          <p>Engage in discussions with fellow citizens and experts to explore constitutional topics.</p>
        </div>
      </div> */}
      <div class="features-section">
        <div class="features">
          <div class="feature-item">
            <h3>Play n Learn</h3>
            <p>
              Engage with interactive games and quizzes to understand
              constitutional concepts.
            </p>
          </div>
          <div class="feature-item">
            <h3>Let's Learn</h3>
            <p>
              Access simplified explanations and multimedia content to deepen
              your understanding.
            </p>
          </div>
          <div class="feature-item">
            <h3>Discussion Forum</h3>
            <p>
              Engage in discussions with fellow citizens and experts to explore
              constitutional topics.
            </p>
          </div>
        </div>
        <div class="highlight-box"></div>
      </div>
    </section>
  );
}

export default AboutPlatform;
