// import React from "react";
import "../../../styles/dashboard-styles/shared/side-bar.css";
import Logo from "../../../assets/images/Rectangle 1 (1).png";
import { Link } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("budget");

  return (
    <div
      className={`flex-column brandMain-bgColor mediumFont text-white`}
      style={{ height: "100%" }}
    >
      <div className='text-center py-4'>
        <img
          src={Logo} // Replace with the actual logo path
          alt='Logo'
          className='img-fluid'
          style={{ maxWidth: "80px" }}
        />
      </div>

      <ul className='nav flex-column mt-4 side-bar-nav p-0'>
        <li className='nav-item d-flex'>
          {activeTab === "dashboard" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#dashboard'
            onClick={() => setActiveTab("dashboard")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "dashboard" ? "active" : "")
            }
          >
            لوحة التحكم
          </a>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "budget" && (
            <span className='side-white-decoration'>""</span>
          )}
          <Link
            to={routes.DASHBOARD_ROUTE}
            onClick={() => setActiveTab("budget")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "budget" ? "active" : "")
            }
          >
            الميزانية
          </Link>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "projects" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#projects'
            onClick={() => setActiveTab("projects")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "projects" ? "active" : "")
            }
          >
            طرح المشاريع
          </a>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "summaries" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#summaries'
            onClick={() => setActiveTab("summaries")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "summaries" ? "active" : "")
            }
          >
            مستخلصات
          </a>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "study" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#study'
            onClick={() => setActiveTab("study")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "study" ? "active" : "")
            }
          >
            دراسة المشروع
          </a>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "service-requests" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#service-requests'
            onClick={() => setActiveTab("service-requests")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "service-requests" ? "active" : "")
            }
          >
            طلبات الخدمة
          </a>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "join-requests" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#join-requests'
            onClick={() => setActiveTab("join-requests")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "join-requests" ? "active" : "")
            }
          >
            طلبات الانضمام
          </a>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "logout" && (
            <span className='side-white-decoration'>""</span>
          )}
          <a
            href='#logout'
            onClick={() => setActiveTab("logout")}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "logout" ? "active" : "")
            }
          >
            تسجيل خروج
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
