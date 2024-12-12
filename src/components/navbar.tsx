// import React from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="login-btn">تسجيل دخول</button>
      </div>

      <div className="navbar-center">
        <div className="navbar-links">
          <a href="#">عن الشركة</a>
          <a href="#">لماذا نحن؟</a>
          <a href="#">الخدمات</a>
          <a href="#">الأراء</a>
          <a href="#">طلب انضمام</a>
          <a href="#">طلب خدمة</a>
        </div>
      </div>

      <div className="navbar-right">
        <span className="time">22.11.2024</span>
        <span className="time">04:35</span>
        <div className="contact-icons">
          <a href="tel:+123456789" className="icon">
            📞
          </a>
          <a href="mailto:info@company.com" className="icon">
            ✉️
          </a>
        </div>
        <div className="language-selector">
          <span>العربية</span>
        </div>
        <img
          src="path-to-your-logo.png"
          alt="Logo"
          className="navbar-logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
