// src/pages/Home.jsx
// import React from "react";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1 className="main-title">Welcome to Our Amazing Platform</h1>
          <p className="tagline">
            We offer innovative solutions that empower your business and bring results.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </header>

      <section className="features-section">
        <div className="feature-item">
          <h3 className="feature-title">Innovative Tools</h3>
          <p className="feature-description">
            Access powerful tools designed to streamline your workflow.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Seamless Integration</h3>
          <p className="feature-description">
            Integrate effortlessly with your favorite platforms and services.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">24/7 Support</h3>
          <p className="feature-description">
            Our team is here to assist you at any time, day or night.
          </p>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
