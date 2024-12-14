// src/pages/Home.jsx
// import React from "react";
import "./../styles/Home.css";
import FirstHalfSection from "../components/Half";

const Home = () => {
  return (
    <div className='home-container'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <button className='login-btn'>تسجيل دخول</button>
        </div>

        <div className='navbar-center'>
          <div className='navbar-links'>
            <a href='#'>عن الشركة</a>
            <a href='#'>لماذا نحن؟</a>
            <a href='#'>الخدمات</a>
            <a href='#'>الأراء</a>
            <a href='#'>طلب انضمام</a>
            <a href='#'>طلب خدمة</a>
          </div>
        </div>

        <div className='navbar-right'>
          <span className='time'>22.11.2024</span>
          <span className='time'>04:35</span>
          <div className='contact-icons'>
            <a href='tel:+123456789' className='icon'>
              📞
            </a>
            <a href='mailto:info@company.com' className='icon'>
              ✉️
            </a>
          </div>
          <div className='language-selector'>
            <span>العربية</span>
          </div>
          <img src='path-to-your-logo.png' alt='Logo' className='navbar-logo' />
        </div>
      </nav>
      <div className='home-container'>
        <header className='home-header'>
          <div className='header-content'>
            <h1 className='main-title'>Welcome to Our Amazing Platform</h1>
            <p className='tagline'>
              We offer innovative solutions that empower your business and bring
              results.
            </p>
            <button className='cta-btn'>Get Started</button>
          </div>
        </header>

        <section className='features-section'>
          <div className='feature-item'>
            <h3 className='feature-title'>Innovative Tools</h3>
            <p className='feature-description'>
              Access powerful tools designed to streamline your workflow.
            </p>
          </div>
          <div className='feature-item'>
            <h3 className='feature-title'>Seamless Integration</h3>
            <p className='feature-description'>
              Integrate effortlessly with your favorite platforms and services.
            </p>
          </div>
          <div className='feature-item'>
            <h3 className='feature-title'>24/7 Support</h3>
            <p className='feature-description'>
              Our team is here to assist you at any time, day or night.
            </p>
          </div>
        </section>

        <footer className='home-footer'>
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </footer>
      </div>
      <FirstHalfSection />
    </div>
  );
};

export default Home;
