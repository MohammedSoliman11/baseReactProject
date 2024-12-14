// import React from "react";
import "../styles/navbar.css";
import logo from "../assets/Rectangle 1.png";
const Navbar = () => {
  return (
    <nav className='gl-navbar'>
      <div className='bg-div p-3 bg-secondary text-white'>
        <div className='navbar-icons icon-container'>
          <i className='fas fa-envelope'></i>
          <i className='divider'></i>
          <i className='fas fa-phone'></i>
        </div>
        <div className='icon-container'>
          <span className='navbar-date'>
            <i className='fas fa-calendar-alt'></i> 22.11.2024
          </span>
          <i className='divider'></i>
          <span className='navbar-time'>
            <i className='fas fa-clock'></i> 04:35
          </span>
          <i className='divider'></i>
          <span className='navbar-lang'>
            <i className='fas fa-globe'></i> العربية
          </span>
        </div>
      </div>

      <header className='navbar'>
        <div className='navbar-container'>
          {/* Left Section: Logo and Time */}
          <div className='navbar-left'>
            <img src={logo} alt='Logo' className='logo' />
          </div>

          {/* Center Section: Menu */}
          <nav className='navbar-center'>
            <ul className='navbar-menu'>
              <li>
                <a href='#'>الرئيسية</a>
              </li>
              <li>
                <a href='#'>عن الشركة</a>
              </li>
              <li>
                <a href='#'>لماذا نحن؟</a>
              </li>
              <li>
                <a href='#'>الخدمات</a>
              </li>
              <li>
                <a href='#'>الأراء</a>
              </li>
              <li>
                <a href='#'>طلب انضمام</a>
              </li>
              <li>
                <a href='#'>طلب خدمة</a>
              </li>
            </ul>
          </nav>

          {/* Right Section: Call and SMS */}
          <div className='navbar-right'>
            <button className='btn-primary'>تسجيل دخول</button>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
