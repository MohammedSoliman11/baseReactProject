// import React from "react";
import "../styles/AboutUs.css";
const About = () => {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <p className="description">
        We are dedicated to providing the best services for our customers. Our team is committed to innovation, excellence, and customer satisfaction.
      </p>
      <section className="teamSection">
        <h2 className="subtitle">Meet Our Team</h2>
        <div className="team">
          <div className="teamMember">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="image" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="image" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="image" />
            <h3>Sam Wilson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
