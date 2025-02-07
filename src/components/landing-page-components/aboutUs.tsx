import "../../styles/landing-page-styles/AboutUs.css";

import about from "../../assets/images/Rectangle15.png";
import vector from "../../assets/images/Vector (3).png";
import vector2 from "../../assets/images/Vector (5).png";

const AboutUs = () => {
  return (
    <>
      {/* Section 2 */}
      <div id="about-us" className="container section2 mb-5">
        <h5 className="mb-5 text-center mediumFont brandMain-color">
          عن <span className="underLine secondary-color">الشركة</span>
        </h5>
        <div className="row align-items-center">
          {/* Right Section - Text */}
          <div className="col-md-6">
            <h2 className="mb-4  aboutUs-title puplic-build">
              <span className="secondary-color build-border">
                {" "}
                مؤسسة حدود البناء{" "}
              </span>
              <span className="brandMain-color build-border">
                {" "}
                للمقاولات العامة{" "}
              </span>
            </h2>
            <p className="boldFont brandMain-color aboutUs-subtitle creativity">
              التميز هو أساس ما نقوم به مــن أجـــــل بنـــــــاء المستقبــــل
            </p>
            <p className=" brandMain-color aboutUs-subtitle last-P">
              مؤسسة حدود البناء للمقاولات العامة لا تقتصر فقط أعمالها على
              المقــــاولات من أعمال البنـــاء وغيرها، بل تمتـــد أيضاً إلـــــى
              الأنشطــــة التــخصصيـــــة والمكملـــة لنشاط المقـــــــاولات
              والتـي تتمثل بخدمات ما قبل البناء وبعده. نقـــوم بإعـــداد
              التصاميـــــم الهندسيـــــة وحسابات التكلفة وأعمال التشطيبات
              المتكاملــــــة وترميم المبـــاني وغيرهــــا.
            </p>
          </div>

          {/* Left Section - Image */}
          <div className="col-md-6 position-relative d-inline-block">
            <div className="img-container">
              <div className="orange-box"></div>
              <img
                src={about}
                alt="Construction Plans"
                className="img-fluid rounded"
              />
              <div className="dotted-box"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section3 container-fluid d-flex justify-content-center align-items-center">
        <div className="container-fluid">
          <h5 className="text-center boldFont text-white managerTalk">
            كلمة مدير <span className="secondary-color underLine">المؤسسة</span>
          </h5>
          <div className="regularFont d-flex align-content-center justify-content-center mt-4">
            <div className="row">
              <div className="col-md-2 firstQuoteIcon d-flex align-items-start justify-content-end pt-4 ">
                <img src={vector} alt="" className=" d-flex rightQuote" />
              </div>
              <div className="col-md-8 quoteText">
                <p className="text-white text-justify quote-Content">
                  إنــــه لمــن دواعــي فخـــــــــرنا واعتزازنا أن نكـــــون
                  بهذا الصــــــرح العملاق، متميــــــــزون بجودة ما نقدمه
                  لعملائنا وحرصاً منا على أن نكون على قدر الثقة التي نحظــــى
                  بها في العديـــــــــد من الأعمال والمشاريع،نتطلع
                  لخـــــدمتكـم على أكمــل وجــــه من خـــــلال فـــــريق
                  عمــــل متخصص همـــه الأول ارضـــاؤكـــــم، والعمـــــل على
                  إنجـــــــاز الأعمال وتنفيذها بأفضل المواصــفات وفقاً للأصول
                  الفنية لأن تحقيــــق رضــــــا العمــلاء وإتمــــام
                  الأعمــــــــــــــال الموكلــــة إلينــــا في الوقت المحــدد
                  هي ركزتين أســاسيتين للتميز والتطـــــــوير
                  والاستمــــــــــرارية في ســـــوق العمل بنجاح
                </p>
              </div>
              <div className="col-md-2 secondQuoteIcon d-flex align-items-end justify-content-start pb-5">
                <img src={vector2} alt="" className="leftQuote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
