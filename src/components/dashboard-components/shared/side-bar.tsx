import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/dashboard-styles/shared/side-bar.css";
import Logo from "../../../assets/images/Rectangle 1 (1).png";
import routes from "../../../Routes/appRoutes";

const {
  DASHBOARD_ROUTE,
  PROJECTS_ROUTE,
  SUMMARIES_ROUTE,
  STUDY_ROUTE,
  SERVICE_REQUESTS_ROUTE,
  JOIN_REQUESTS_ROUTE,
  LOGOUT_ROUTE,
  SUGGESTEDTABLE_ROUTE,
} = routes;

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("budget");
  const navigate = useNavigate();
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
          <button
            onClick={() => {
              setActiveTab("dashboard");
              navigate(DASHBOARD_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "dashboard" ? "active" : "")
            }
          >
            لوحة التحكم
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "budget" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("budget");
              navigate(SUGGESTEDTABLE_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "budget" ? "active" : "")
            }
          >
            الميزانية
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "projects" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("projects");
              navigate(PROJECTS_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "projects" ? "active" : "")
            }
          >
            طرح المشاريع
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "summaries" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("summaries");
              navigate(SUMMARIES_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "summaries" ? "active" : "")
            }
          >
            مستخلصات
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "study" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("study");
              navigate(STUDY_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "study" ? "active" : "")
            }
          >
            دراسة المشروع
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "service-requests" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("service-requests");
              navigate(SERVICE_REQUESTS_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "service-requests" ? "active" : "")
            }
          >
            طلبات الخدمة
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "join-requests" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("join-requests");
              navigate(JOIN_REQUESTS_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "join-requests" ? "active" : "")
            }
          >
            طلبات الانضمام
          </button>
        </li>
        <li className='nav-item d-flex'>
          {activeTab === "logout" && (
            <span className='side-white-decoration'>""</span>
          )}
          <button
            onClick={() => {
              setActiveTab("logout");
              navigate(LOGOUT_ROUTE);
            }}
            className={
              "nav-link text-white p-4 px-5 w-100 " +
              (activeTab === "logout" ? "active" : "")
            }
          >
            تسجيل خروج
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
