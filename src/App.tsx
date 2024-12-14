// import React from "react";
import "./App.css"; // Import your CSS

const App = () => {
  return (
    <div className='container'>
      {/* First Layer: Background Image */}
      <div className='background-layer'></div>

      {/* Second Layer: Gradient */}
      <div className='gradient-layer'></div>

      {/* Third Layer: Navbar and Home Section */}
      <div className='content-layer'>
        <nav className='navbar'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className='home-section'>
          <h1>Welcome to Our Website</h1>
          <p>This is the homepage content.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
