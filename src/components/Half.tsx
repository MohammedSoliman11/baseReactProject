// import React from "react";
import "../styles/Home.css"; // Import the CSS file

const FirstHalfSection = () => {
  return (
    <div className='first-half-section'>
      <div className='left-section'>
        <h2 className='section-title'>Discover Our Innovative Solutions</h2>
        <p className='section-description'>
          Our team of experts is dedicated to providing the best possible
          solutions for your business.
        </p>
        <button className='learn-more-btn'>Learn More</button>
      </div>
      <div className='right-section'>
        {/* Add your images or videos here */}
        <img src='image1.jpg' alt='Image 1' />
        <img src='image2.jpg' alt='Image 2' />
        <img src='image3.jpg' alt='Image 3' />
      </div>
    </div>
  );
};

export default FirstHalfSection;
