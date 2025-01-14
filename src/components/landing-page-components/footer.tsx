import "../../styles/landing-page-styles/footer.css"; // Import your CSS

import Logo from "../../assets/images/Rectangle 1 (1).png";
import facebook from "../../assets/images/Vector (9).png";
import X from "../../assets/images/Group.png";
import insta from "../../assets/images/instagram (2) 1.png";
import snap from "../../assets/images/snapchat (1) 1.png";
import tiktok from "../../assets/images/Vector (10).png";
import youtube from "../../assets/images/Vector (11).png";
import callFooter from "../../assets/images/call.png";
import whatsapp from "../../assets/images/whatsapp.png";
import smsFooter from "../../assets/images/sms.png";
import googlePly from "../../assets/images/GooglePlay.jpg";
import apple from "../../assets/images/appStore.jpg";
import { useNavigate } from "react-router-dom";

import routes from "../../Routes/appRoutes";
const { BUDGET_ROUTE } = routes;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* footer */}
      <div className='lh-lg footer d-flex flex-column justify-content-center align-items-center mediumFont fontSize-16'>
        <footer className='container'>
          <div className='row text-white'>
            {/* Section 4: About & Social Media */}
            <div className='col-md-3'>
              <img src={Logo} alt='' />
              <p className=' mt-2'>مؤسسة حدود البناء للمقاولات العامة</p>
              <p className=''>
                {" "}
                التميز هو أساس ما نقوم به مــن أجـــــل بنـــــــاء المستقبــــل
              </p>

              <div className='social-icons d-flex '>
                <div className='faceIcon d-flex justify-content-center align-items-center m-1'>
                  <img src={facebook} alt='' />
                </div>

                <div className='faceIcon d-flex justify-content-center align-items-center m-1'>
                  <img src={X} alt='' />
                </div>

                <div className='faceIcon d-flex justify-content-center align-items-center m-1'>
                  <img src={insta} alt='' />
                </div>
                <div className='faceIcon d-flex justify-content-center align-items-center m-1'>
                  <img src={snap} alt='' />
                </div>
                <div className='faceIcon d-flex justify-content-center align-items-center m-1'>
                  <img src={tiktok} alt='' />
                </div>
                <div className='faceIcon d-flex justify-content-center align-items-center m-1'>
                  <img src={youtube} alt='' />
                </div>
              </div>
            </div>
            {/* section 2 */}
            <div className='col-md-2 mb-4 mb-md-0'>
              <h5 className=''>الصفحات الرئيسية</h5>
              <ul className='list-unstyled pe-2 '>
                <li className=''>
                  <a href='#about-us' className='nav-link'>
                    عن الشركة{" "}
                  </a>
                </li>
                <li className=''>
                  <a href='#why-we-are-here ' className='nav-link'>
                    لماذا نحن؟{" "}
                  </a>
                </li>
                <li className=''>
                  <a href='#services' className='nav-link'>
                    الخدمات{" "}
                  </a>
                </li>

                <li className=''>
                  <a href='#reviews' className='nav-link'>
                    الآراء{" "}
                  </a>
                </li>
                <li className=''>
                  <a href='#join' className='nav-link'>
                    طلب الانضمام{" "}
                  </a>
                </li>
                <li className=''>
                  <a href='#join' className='nav-link'>
                    طلب خدمة{" "}
                  </a>
                </li>
                <li className=''>
                  <button
                    onClick={() => navigate(BUDGET_ROUTE)}
                    className='nav-link'
                  >
                    لوحة التحكم
                  </button>
                </li>
              </ul>
            </div>
            {/* Section 3: Contact Information */}
            <div className='col-md-3 mb-4 mb-md-0'>
              <h5 className=''>تواصل معنا</h5>
              <ul className='list-unstyled pe-2'>
                <li>
                  <img src={callFooter} alt='' /> 9660537998449+
                </li>
                <li>
                  <img src={whatsapp} alt='' /> 9660537998449+
                </li>
                <li>
                  <img src={smsFooter} alt='' /> ebbgc.group@gmail.com{" "}
                </li>
              </ul>
            </div>
            {/* Section 4: Quick Links */}
            <div className='col-md-2 mb-4 mb-md-0'>
              <h5 className=''>روابط سريعة</h5>
              <ul className='list-unstyled pe-2 '>
                <li>الانظمة والتشريعات</li>
                <li>الشروط والمواصفات الفنية</li>
                <li>الشروط والمواصفات العامة</li>
                <li>الانظمة واللوائح</li>
              </ul>
            </div>
            {/* Section 5: App Links */}
            {/* <div className='col-md-2 mb-4 mb-md-0'>
                <h5 className=''>حمل التطبيق الخاص بنا</h5>

                <a href='' className='text-decoration-none'>
                  <div className='google d-flex googleStyle bg-white align-items-center px-4 py-2 flex-row-reverse '>
                    <div className='google-img'>
                      <img
                        src={googlePly} // Replace with Play Store logo
                        alt='Google Play'
                        className='googleImg'
                      />
                    </div>

                    <div className='anchor ms-2'>
                      <span className='getIT'>GET IT ON</span>
                      <span className='googleStyle'>Google Play</span>
                    </div>
                  </div>
                </a>

                <a href='' className='text-decoration-none'>
                  <div className='google d-flex googleStyle bg-white align-items-center px-4 py-2 flex-row-reverse '>
                    <div className='google-img'>
                      <img
                        src={apple} // Replace with Play Store logo
                        alt='Google Play'
                        className='googleImg'
                      />
                    </div>

                    <div className='anchor ms-2'>
                      <span className='getIT'>GET IT ON</span>
                      <span className=' googleStyle'>App Store</span>
                    </div>
                  </div>
                </a>
              </div> */}
            <div className='col-md-2 mb-4 mb-md-0'>
              <h5 className=''>حمل التطبيق الخاص بنا</h5>
              <div className='mb-2'>
                <a href='www.googl.com' className=''>
                  <img src={googlePly} alt='logo' className='storeLinks' />
                </a>
              </div>
              <div className='mb-2'>
                <a href='www.apple.com' className=''>
                  <img src={apple} alt='logo' className='storeLinks' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
