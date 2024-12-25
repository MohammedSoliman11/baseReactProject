import about from "../assets/images/Rectangle 15.png";
const AboutUs = () => {
  return (
    <>
      {/* Section 2 */}
      <div id='about-us' className='container section2 mb-5'>
        <h5 className=' text-dark fw-bold mb-5 text-center'>
          عن <span className='text-warning borderr border-warning'>الشركة</span>
        </h5>
        <div className='row align-items-center'>
          {/* Right Section - Text */}
          <div className='col-md-6'>
            <h2 className='fw-bold text-warning mb-4'>
              مؤسسة حدود البناء{" "}
              <span className='text-dark'>للمقاولات العامة</span>
            </h2>
            <p className='coloredP1'>
              التميز هو أساس ما نقوم به مــن أجـــــل بنـــــــاء المستقبــــل
            </p>
            <p className='text-muted  coloredP2'>
              {" "}
              مؤسسة حدود البناء للمقاولات العامة لا تقتصر فقط أعمالها على
              المقاولات من أعمال البناء وغيرها، بل تمتد أيضاً إلى الأنشطة
              التخصصية والمكملة لنشاط أعمال البناء والتي تتمثل بخدمات ما قبل
              البناء وبعده. نقوم بإعداد التصاميم الهندسية، ومجال التشطيبات
              المتكاملة وترميم المباني وغيرها.
            </p>
          </div>
          {/* Left Section - Image */}
          <div className='col-md-6 position-relative'>
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
    </>
  );
};

export default AboutUs;
