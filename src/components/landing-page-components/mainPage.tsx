import "../../styles/landing-page-styles/mainPageStyle.css";

import sms from "../../assets/images/sms1.png";
import call from "../../assets/images/call1.png";
import calender from "../../assets/Vector.png";
import clockImg from "../../assets/Vector (1).png";
import globalImg from "../../assets/Vector (2).png";
import Logo from "../../assets/images/Rectangle 1 (1).png";
import graph from "../../assets/images/ic-trending-up-24px (1).png";

import { useEffect, useState } from "react";

const MainPage = () => {
  // Make current time
  const [Time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  const [HomeClass, setHomeClass] = useState("home");
  const [Navbar, setNavbar] = useState("");

  //    Make current date
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );
  useEffect(function () {
    // for time
    setInterval(function () {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    // for date
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }, []);

  // const homeToggle = 0;

  const setHomeClassFun = () => {
    console.log(HomeClass);
    if (HomeClass === "home1") setHomeClass("home");
    else setHomeClass("home1");

    console.log(Navbar);
    if (Navbar == "") setNavbar("navbar1");
    else setNavbar("");
  };

  return (
    <>
      {/* Home */}

      <div className='home pt-3 container-fluid'>
        {/* Main NavBar */}
        <div className={Navbar}>
          {/* Navbar1 */}
          <div className='container d-flex justify-content-between regularFont align-items-center'>
            {/* Right Side */}
            <div className='iconContainer d-flex fs-6'>
              <div className='bar-container pt-1'>
                <img src={sms} alt='' className='w-75' />
              </div>
              <div className='callIcon me-4 pt-1'>
                <img src={call} className='w-75' alt='' />
              </div>
            </div>
            {/* Leftt Side */}
            <div className='leftContent d-flex justify-content-end'>
              <div className='d-flex align-items-center bar-container2'>
                <div className='calenderImg w-75 '>
                  <img src={calender} alt='' className='w-75' />
                </div>

                <span className='text-white fw-light mx-2 date pt-1 '>
                  {currentDate.split("/").join(".")}
                </span>
              </div>

              <div className='d-flex align-items-center fw-light me-4  bar-container2'>
                <div className='clockImg w-75 '>
                  <img src={clockImg} alt='' className='w-75' />
                </div>
                <span className='text-white mx-2  pt-1'>{Time}</span>
              </div>

              <div className='d-flex align-items-center me-4'>
                <div className='clockImg w-75 '>
                  <img src={globalImg} alt='' className='w-75' />
                </div>
                <span className='text-white pt-1'>العربية</span>
              </div>
            </div>
          </div>

          {/* Line */}
          <div className='container text-white'>
            <hr />
          </div>

          {/* navbar2 */}
          <div className='container'>
            <nav className='navbar navbar-expand-lg'>
              <a className='navbar-brand' href='#'>
                <div className='logo d-flex'>
                  <img src={Logo} alt='' className='w-75' />
                </div>
              </a>
              <button
                className='navbar-toggler  '
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={setHomeClassFun}
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav m-auto mb-2 mb-lg-0 linkStyles'>
                  <li className='nav-item'>
                    <a href='#about-us' className='nav-link '>
                      عن الشركة{" "}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#why-we-are-here ' className='nav-link'>
                      لماذا نحن؟{" "}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#services' className='nav-link'>
                      الخدمات{" "}
                    </a>
                  </li>

                  <li className='nav-item'>
                    <a href='#reviews' className='nav-link'>
                      الآراء{" "}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#join' className='nav-link'>
                      طلب الانضمام{" "}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#join' className='nav-link'>
                      طلب خدمة{" "}
                    </a>
                  </li>
                </ul>
                <form className='d-flex' role='search'>
                  <button
                    type='button'
                    className='btn secondary-bgColor py-3 px-5'
                  >
                    <span className='login-btn'>تسجيل الدخول</span>
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className='container mt-5'>
          <div className='homeContent'>
            <p className='firstP mediumFont'>
              مؤسسة حدود البناء للمقاولات العامة
            </p>
            <p className='firstP2 text-white boldFont'>
              إعـــداد التصاميـــم الهندسيـــــة وأعمال التشطيبات المتكاملـــــة
              وترميم المبـــاني
            </p>
            <p className='text-white  firstP3 regularFont'>
              لا تقتصر فقط أعمالنا على المقــــاولات من أعمال البنـــاء بل
              تمتـــد أيضاً إلى الأنشطــــة التــخصصيـــــة والمكملـــة لنشاط
              المقاولات والتي تتمثل بخدمات ما قبل البناء وبعده
            </p>
            <button className='service mt-3 mediumFont'>
              <span className='text-white px-4 py-3'>اطلب خدمة</span>
            </button>
          </div>
        </div>

        <div className='container  projectsNum'>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <div className='stats-box d-flex justify-content-between align-items-center text-center p-4 rounded'>
                {/* First Column */}
                <div className='col'>
                  <h6 className='mb-2 regularFont'>عدد المشاريع</h6>
                  <h2 className='boldFont'>5092</h2>

                  <p className='mediumFont'>
                    <img src={graph} alt='' />{" "}
                    <span className='text-success fw-bold'>90%</span> أعلى خلال
                    عام{" "}
                  </p>
                </div>

                <div className='col border-end'>
                  <h6 className='mb-2 regularFont'>عدد الشركاء</h6>
                  <h2 className='boldFont'>1005</h2>
                  <p className='mediumFont'>
                    <img src={graph} alt='' />{" "}
                    <span className='text-success fw-bold'>75%</span> أعلى خلال
                    عام <i className='bi bi-arrow-up-right'></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
