// import React from "react";
import "../styles/footer.css"; // Import your CSS
import Logo from "..//images/Rectangle 1 (1).png";
import facebook from "../images/Vector (9).png";
import X from "../images/Group.png";
import insta from "../images/instagram (2) 1.png";
import snap from "../images/snapchat (1) 1.png";
import tiktok from "../images/Vector (10).png";
import youtube from "../images/Vector (11).png";
import call from "../images/call.png";
import whatsapp from "../images/whatsapp.png";
import sms from "../images/sms.png";
import googlePly from "../images/Group (1).png";
import apple from "../images/Vector (12).png";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <div className='footer mt-5 mb-5'>
        <footer className='footer-container py-5'>
          <div className='container'>
            <div className='row text-white'>
              {/* Section 4: About & Social Media */}
              <div className='col-md-3'>
                <img src={Logo} alt='' />
                <p className='footer-title mt-2'>
                  مؤسسة حدود البناء للمقاولات العامة
                </p>
                <p className='footer-title'>
                  {" "}
                  التميز هو أساس ما نقوم به مــن أجـــــل بنـــــــاء
                  المستقبــــل
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
                <h5 className='footer-title'>الصفحات الرئيسية</h5>
                <ul className='list-unstyled pe-2 fw-semibold'>
                  <li>عن الشركة</li>
                  <li>لماذا نحن</li>
                  <li>الآراء</li>
                  <li>الخدمات</li>
                  <li>طلب الانضمام</li>
                  <li>طلب خدمة</li>
                </ul>
              </div>

              {/* Section 3: Contact Information */}
              <div className='col-md-3 mb-4 mb-md-0'>
                <h5 className='footer-title'>تواصل معنا</h5>
                <ul className='list-unstyled pe-2'>
                  <li>
                    <img src={call} alt='' /> 9660537998449+
                  </li>
                  <li>
                    <img src={whatsapp} alt='' /> 9660537998449+
                  </li>
                  <li>
                    <img src={sms} alt='' /> ebbgc.group@gmail.com{" "}
                  </li>
                </ul>
              </div>

              {/* Section 4: Quick Links */}
              <div className='col-md-2 mb-4 mb-md-0'>
                <h5 className='footer-title'>روابط سريعة</h5>
                <ul className='list-unstyled pe-2 fw-semibold'>
                  <li>الانظمة والتشريعات</li>
                  <li>الشروط والمواصفات الفنية</li>
                  <li>الشروط والمواصفات العامة</li>
                  <li>الانظمة واللوائح</li>
                </ul>
              </div>

              {/* Section 5: App Links */}
              <div className='col-md-2 mb-4 mb-md-0'>
                <h5 className='footer-title'>حمل التطبيق الخاص بنا</h5>

                <a href='' className='text-decoration-none'>
                  <div className='google d-flex googleStyle bg-white align-items-center ps-4 flex-row-reverse'>
                    <div className='google-img'>
                      <img
                        src={googlePly} // Replace with Play Store logo
                        alt='Google Play'
                        className='googleImg'
                      />
                    </div>

                    <div className='anchor ms-2'>
                      <span className='me-5  getIT'>GET IT ON</span>
                      <br />
                      <span className='me-3   googleStyle'>Google Play</span>
                    </div>
                  </div>
                </a>

                <a href='' className='text-decoration-none'>
                  <div className='google d-flex googleStyle bg-white align-items-center ps-4 flex-row-reverse '>
                    <div className='google-img'>
                      <img
                        src={apple} // Replace with Play Store logo
                        alt='Google Play'
                        className='googleImg'
                      />
                    </div>

                    <div className='anchor ms-2'>
                      <span className='me-3  getIT'>GET IT ON</span>
                      <br />
                      <span className=' googleStyle'>App Store</span>
                    </div>
                  </div>
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
