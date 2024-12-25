import about from "../assets/images/Rectangle 15.png";
import "../styles/aboutUs.css";
const AboutUs = () => {
  return (
    <>
      {/* Section 2 */}
      <div id='about-us' className='container section2 mb-5'>
        <h5 className='mb-5 text-center mediumFont'>
          عن <span className='underLine'>الشركة</span>
        </h5>
        <div className='row align-items-center'>
          {/* Right Section - Text */}
          <div className='col-md-6'>
            <h2 className='mb-4 boldFont aboutUs-title'>
              <span className='secondary-color'> مؤسسة حدود البناء </span>
              <span className='brandMain-color'> للمقاولات العامة </span>
            </h2>
            <p className='boldFont brandMain-color aboutUs-subtitle'>
              التميز هو أساس ما نقوم به مــن أجـــــل بنـــــــاء المستقبــــل
            </p>
            <p className='regularFont brandMain-color aboutUs-subtitle'>
              {" "}
              مؤسسة حدود البناء للمقاولات العامة لا تقتصر فقط أعمالها على
              المقاولات من أعمال البناء وغيرها، بل تمتد أيضاً إلى الأنشطة
              التخصصية والمكملة لنشاط أعمال البناء والتي تتمثل بخدمات ما قبل
              البناء وبعده. نقوم بإعداد التصاميم الهندسية، ومجال التشطيبات
              المتكاملة وترميم المباني وغيرها.
            </p>
          </div>
          {/* Left Section - Image */}
          <div className='col-md-6 position-relative d-inline-block'>
            <div className='img-container'>
              <div className='orange-box'></div>
              <img
                src={about}
                alt='Construction Plans'
                className='img-fluid rounded'
              />
              <div className='dotted-box'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
