// import React from "react";
import "./App.css"; // Import your CSS
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className='container-layers'>
      {/* First Layer: Background Image */}
      <div className='background-layer'></div>

      {/* Second Layer: Gradient */}
      <div className='gradient-layer'></div>

      {/* Third Layer: Navbar and Home Section */}
      <Navbar></Navbar>
    </div>
  );
};

export default App;
