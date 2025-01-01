// import React from "react";
import "../styles/side-bar.css";

import Logo from "../assets/images/Rectangle 1 (1).png";

const Sidebar = () => {
  return (
    <div
      className='flex-column brandMain-bgColor mediumFont text-white'
      style={{ minHeight: "100vh" }}
    >
      <div className='text-center py-4'>
        <img
          src={Logo} // Replace with the actual logo path
          alt='Logo'
          className='img-fluid'
          style={{ maxWidth: "80px" }}
        />
      </div>
      <ul className='nav flex-column mt-4'>
        <li className='nav-item'>
          <a href='#dashboard' className='nav-link text-white p-3'>
            لوحة التحكم
          </a>
        </li>
        <li className='nav-item'>
          <a href='#budget' className='nav-link text-white p-3'>
            الميزانية
          </a>
        </li>
        <li className='nav-item'>
          <a href='#projects' className='nav-link text-white p-3'>
            طرح المشاريع
          </a>
        </li>
        <li className='nav-item'>
          <a href='#summaries' className='nav-link text-white p-3'>
            مستخلصات
          </a>
        </li>
        <li className='nav-item'>
          <a href='#study' className='nav-link text-white p-3'>
            دراسة المشروع
          </a>
        </li>
        <li className='nav-item'>
          <a href='#service-requests' className='nav-link text-white p-3'>
            طلبات الخدمة
          </a>
        </li>
        <li className='nav-item'>
          <a href='#join-requests' className='nav-link text-white p-3'>
            طلبات الانضمام
          </a>
        </li>
        <li className='nav-item'>
          <a href='#logout' className='nav-link text-white p-3'>
            تسجيل خروج
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
