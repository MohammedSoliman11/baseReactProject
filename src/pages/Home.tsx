// src/pages/Home.jsx
// import React from "react";
import "./../styles/Home.css";
import smsIcon from "../assets/sms.png";
import callIcon from "../assets/call.png";
import calender from "../assets/Vector.png";
import clockImg from "..//assets/Vector (1).png";
import globalImg from "..//assets/Vector (2).png";
import Logo from "..//images/Rectangle 1 (1).png"
const Home = () => {
  return (
    <>
      {/* Home */}
    
      <div className="  home min-vh-100">
      {/* navbar */}
      <nav className="navbar navbar-dark ">
        <div className="container ">
          <div className="bigDiv w-100 d-flex justify-content-between">
            <div className="iconContainer d-flex fs-6">
              <div className="bar-container ">
                <img src={smsIcon} alt="" className="w-75" />
              </div>
              <div className="callIcon me-4 ">
                <img src={callIcon} className="w-75" alt="" />
              </div>
            </div>
{/* Leftt Side */}
            <div className="leftContent d-flex justify-content-end">
              <div className="d-flex align-items-center bar-container2">
                <div className="calenderImg w-75 ">
                  <img src={calender} alt="" className="w-75" />
                </div>

                <span className="text-white fw-light mx-2 date ">22.11.2024</span>
                
              </div>

              <div className="d-flex align-items-center fw-light me-4  bar-container2">
              <div className="clockImg w-75 ">
                  <img src={clockImg} alt="" className="w-75" />
                </div>
                <span className="text-white mx-2 ">04:35</span>
              </div>




             
              <div className="d-flex align-items-center me-4">
              <div className="clockImg w-75 ">
                  <img src={globalImg} alt="" className="w-75" />
                </div>
                <span className="text-white ">العربية</span>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Line */}
        <div className="container line text-white">
          <hr />
        </div>

        {/* navbar2 */}

      <div className="container">
        <div className="d-flex justify-content-evenly ">
          <div className="logo d-flex">
            <img src={Logo} alt="" className="w-75" />
          </div>
          
          <div className="info d-flex  mt-4 text-white">
            <h6 className="mx-2">عن الشركة </h6>
            <h6 className="mx-2">لماذا نحن؟ </h6>
            <h6 className="mx-2">الخدامات </h6>
            <h6 className="mx-2">الآراء </h6>
            <h6 className="mx-2">طلب الانضمام </h6>
            <h6 className="mx-2">طلب خدمة </h6>
           

          </div>

        <div className="login mt-3">
          
          <button type="button" className="btn btn-warning px-4 py-2 "><span className="login-btn">تسجيل الدخول</span></button>
        </div>










        </div>
      </div>

      </div>
      
    
    </>
  );
};

export default Home;
