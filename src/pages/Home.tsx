// src/pages/Home.jsx
// import React from "react";
import "./../styles/Home.css";
import smsIcon from "../assets/sms.png";
import callIcon from "../assets/call.png";
import calender from "../assets/Vector.png";
import clockImg from "..//assets/Vector (1).png";
import globalImg from "..//assets/Vector (2).png";
import Logo from "..//images/Rectangle 1 (1).png";
import graph from "../images/ic-trending-up-24px (1).png";
import about from "../images/Rectangle 15.png";
import vector from "../images/Vector (3).png";

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

                  <span className="text-white fw-light mx-2 date ">
                    22.11.2024
                  </span>
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
          <div className="d-flex justify-content-between ">
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
              <button type="button" className="btn btn-warning px-4 py-2 ">
                <span className="login-btn">تسجيل الدخول</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <p className="firstP">مؤسسة حدود البناء للمقاولات العامة</p>
              <p className="firstP2 text-white">
                إعـــداد التصاميـــم الهندسيـــــة وأعمال التشطيبات
                المتكاملـــــة وترميم المبـــاني
              </p>
              <p className="text-white  firstP3">
                لا تقتصر فقط أعمالنا على المقــــاولات من أعمال البنـــاء بل
                تمتـــد أيضاً إلى الأنشطــــة التــخصصيـــــة والمكملـــة لنشاط
                المقاولات والتي تتمثل بخدمات ما قبل البناء وبعده
              </p>
              <button className=" service  ">
                <span className="text-white">اطلب خدمة</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="stats-box d-flex justify-content-between align-items-center text-center p-4 rounded">
                {/* First Column */}
                <div className="col">
                  <h6 className="text-muted mb-2">عدد المشاريع</h6>
                  <h2 className="text-warning fw-bold ">5092</h2>

                  <p className="text-muted small">
                    <img src={graph} alt="" />{" "}
                    <span className="text-success fw-bold">90%</span> أعلى خلال
                    عام{" "}
                  </p>
                </div>

                <div className="col border-end">
                  <h6 className="text-muted mb-2">عدد الشركاء</h6>
                  <h2 className="text-warning fw-bold ">1005</h2>
                  <p className="text-muted small">
                    <img src={graph} alt="" />{" "}
                    <span className="text-success fw-bold">75%</span> أعلى خلال
                    عام <i className="bi bi-arrow-up-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container section2 mb-5">
        <div className="row align-items-center">
          {/* Right Section - Text */}
          <h5 className=" text-primary fw-bold mb-5 text-center">
            عن{" "}
            <span className="text-warning borderr border-warning">الشركة</span>
          </h5>
          <div className="col-md-6">
            <h2 className="fw-bold text-warning mb-4">
              مؤسسة حدود البناء{" "}
              <span className="text-dark">للمقاولات العامة</span>
            </h2>
            <p className="coloredP1">
              التميز هو أساس ما نقوم به مــن أجـــــل بنـــــــاء المستقبــــل
            </p>
            <p className="text-muted  coloredP2">
              {" "}
              مؤسسة حدود البناء للمقاولات العامة لا تقتصر فقط أعمالها على
              المقاولات من أعمال البناء وغيرها، بل تمتد أيضاً إلى الأنشطة
              التخصصية والمكملة لنشاط أعمال البناء والتي تتمثل بخدمات ما قبل
              البناء وبعده. نقوم بإعداد التصاميم الهندسية، ومجال التشطيبات
              المتكاملة وترميم المباني وغيرها.
            </p>
          </div>
          {/* Left Section - Image */}
          <div className="col-md-6 position-relative">
            <img
              src={about}
              alt="Construction Plans"
              className="img-fluid rounded"
            />
            <div className="orange-box"></div>
            <div className="dotted-box"></div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section3 container mt-5 mb-5">
        <h5 className=" text-white coloredP3 mb-5 pt-5 text-center">
          كلمة مدير{" "}
          <span className="text-warning borderr border-warning">المؤسسة</span>
        </h5>
        <h5>
        
          <p className="centerP">
          <img src={vector} alt="" className="vector "  />
            إنــــه لمــن دواعــي فخـــــــــرنا واعتزازنا أن نكـــــون بهذا
            الصــــــرح العملاق، متميــــــــزون بجودة ما
          </p>
          <p className="centerP">
            نقدمه لعملائنا وحرصاً منا على أن نكون على قدر الثقة التي نحظــــى
            بها في العديـــــــــد من
          </p>
          <p className="centerP">
            الأعمال والمشاريع،نتطلع لخـــــدمتكـم على أكمــل وجــــه من
            خـــــلال فـــــريق عمــــل متخصص
          </p>
          <p className="centerP">
            همـــه الأول ارضـــاؤكـــــم، والعمـــــل على إنجـــــــاز ال أعمال
            وتنفيذها بأفضل المواصــفات وفقاً{" "}
          </p>
          <p className="centerP">
            للأصول الفنية لأن تحقيــــق رضــــــا العمــلاء وإتمــــام
            الأعمــــــــــــــال الموكلــــة إلينــــا في الوقت
          </p>
          <p className="centerP">
            المحــدد هي ركزتين أســاسيتين للتميز والتطـــــــوير
            والاستمــــــــــرارية في ســـــوق العمل بنجاح
            <img src={vector} alt="" className="vector  "  />
          </p>
        </h5>
      </div>
    </>
  );
};

export default Home;
