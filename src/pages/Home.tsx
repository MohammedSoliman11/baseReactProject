import "../styles/landing-page-styles/Home.css";
import IMAGE_PATH from "../images/Image-path";
import MainPage from "../components/landing-page-components/mainPage";
import AboutUs from "../components/landing-page-components/aboutUs";
import Vision from "../components/landing-page-components/vision";
import Footer from "../components/landing-page-components/footer";
import Form from "../components/landing-page-components/forms";

const { game, vector3, vector4, coloredVector } = IMAGE_PATH;
const Home = () => {
  return (
    <>
      {/* Home */}
      <MainPage></MainPage>
      <AboutUs></AboutUs>
      <Vision></Vision>
      {/* section 5 */}
      <div id='why-we-are-here' className='we container-fluid mb-5'>
        <div className='why-us-section py-5 text-white'>
          <div className='container text-center'>
            {/* Section Title */}
            <h4 className='mb-5 boldFont fontSize-32'>
              لماذا <span className='secondary-color underLine'>نحن؟</span>
            </h4>

            {/* Features Section */}
            <div className='container boldFont'>
              <div className='row'>
                {/* Feature 1 */}
                <div className='col-md-3 mb-4'>
                  <div className='feature-item'>
                    <div className='icon-circle text-white fontSize-40'>1</div>
                    <h5 className='mt-3 fontSize-24'>مواصفات عالية</h5>
                    <p className='regularFont fontSize-16'>
                      مواصفات عالية بجودة ذات قيمة ومنظمة
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className='col-md-3 mb-4'>
                  <div className='feature-item'>
                    <div className='icon-circle fontSize-40'>2</div>
                    <h5 className='mt-3 fontSize-24'>نخبة من المهندسين</h5>
                    <p className='regularFont fontSize-16'>
                      مجموعة من امهر المهندسين المحترفين
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className='col-md-3 mb-4'>
                  <div className='feature-item'>
                    <div className='icon-circle fontSize-40'>3</div>
                    <h5 className='mt-3 fontSize-24'>عقود قانونية</h5>
                    <p className='regularFont fontSize-16'>
                      عقود قانونية متوافقة مع قوانين الدولة
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className='col-md-3 mb-4'>
                  <div className='feature-item'>
                    <div className='icon-circle fontSize-40'>4</div>
                    <h5 className='mt-3 fontSize-24'>متابعة دائمة</h5>
                    <p className='regularFont fontSize-16'>
                      متابعة دائمة وسهولة تواصل مع العملاء
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div id='services' className='services-section py-5'>
        <div className='container text-center'>
          {/* Section Header */}
          <h2 className='mb-5 section-header boldFont secondary-color fontSize-32'>
            <span className='underLine'>الخدمات</span>{" "}
            <span className='brandMain-color'> التي نقدمها</span>
          </h2>

          {/* Services Row */}
          <div className='row'>
            {/* Card 1: مشاريع الطرق */}
            <div className='col-md-4 mb-4'>
              <div className='service-card p-4'>
                <div className='icon-circle2 projectCard1 mb-3 service-card1 '>
                  <img src={game} alt='Roads' />
                </div>
                <h5 className='mediumFont fontSize-24'>مشاريع الطرق</h5>
                <p className='card-text regularFont fontSize-16'>
                  تصميم، تنفيذ، وصيانة الطرق والبنية التحتية المرتبطة بها، بدءًا
                  من التخطيط الهندسي إلى تعبيد الأسطح وإصلاح الأضرار مع ضمان
                  الجودة والسلامة
                </p>
              </div>
            </div>
            {/* Card 2: مشاريع المباني */}
            <div className='col-md-4 mb-4'>
              <div className='service-card p-4'>
                <div className='icon-circle2 secondary-bgColor mb-3'>
                  <img src={vector3} alt='Buildings' />
                </div>
                <h5 className='mediumFont fontSize-24'>مشاريع المباني</h5>
                <p className='card-text regularFont fontSize-16'>
                  إدارة جميع مراحل البناء مثل التصميم، الإنشاء، التشطيبات،
                  والإشراف لضمان تنفيذ المشاريع بكفاءة ووفق الجداول الزمنية
                  المحددة.
                </p>
              </div>
            </div>
            {/* Card 3: مشاريع البنية التحتية */}
            <div className='col-md-4 mb-4'>
              <div className='service-card p-4'>
                <div className='icon-circle2 infra-bg mb-3'>
                  <img src={vector4} alt='Infrastructure' />
                </div>
                <h5 className='mediumFont fontSize-24'>
                  مشاريع البنية التحتية
                </h5>
                <p className='card-text regularFont fontSize-16'>
                  تصميم وتنفيذ وصيانة الطرق الأساسية مثل مشاريع الإنارة وشبكات
                  المياه والصرف الصحي، الطرق والجسور لضمان دعم المجتمعات
                  وتطويرها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 7 */}

      <div id='reviews' className='bidSlider'>
        <div className='review-background container-fluid bidSlider'>
          <div className='boldFont fontSize-32 text-white d-flex text-decoration-underline justify-content-center align-items-center'>
            <p className='mt-5'>الأراء</p>
          </div>

          <div className='layered-container d-flex justify-content-center align-items-center'>
            {/* Layer 1 */}
            <div className='layer layer-1'></div>
            {/* Layer 2 */}
            <div className='layer layer-2'></div>
            {/* Layer 3 */}

            <div className='layer layer-3'>
              {/* Bootstrap Carousel */}
              <div
                id='testimonialCarousel'
                className='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='dotted-box2'></div>
                <div className='dotted-box3'></div>
                <div className='carousel-inner'>
                  {/* First Slide */}
                  <div className='carousel-item active'>
                    <div className='testimonial-card mx-auto'>
                      <img src={coloredVector} alt='' />
                      <h5 className='mediumFont fontSize-20 brandMain-color mt-3'>
                        Janna Khaled
                      </h5>
                      <div className='stars mb-2 '>⭐⭐⭐⭐⭐</div>
                      <p className='brandMain-color regularFont fontSize-20'>
                        شركة حدود البناء تتميز بالالتزام العالي بمواعيد التسليم
                        والجودة الممتازة في تنفيذ مشاريع البناء والبنية التحتية.
                        فريقها المتخصص يحرص على توفير حلول مبتكرة تلبي احتياجات
                        العملاء وتفوق توقعاتهم، مع الحفاظ على معايير السلامة
                        والكفاءة في كل خطوة ارشحها لكم
                      </p>
                    </div>
                  </div>
                  {/* Second Slide */}
                  <div className='carousel-item active'>
                    <div className='testimonial-card mx-auto'>
                      <img src={coloredVector} alt='' />
                      <h5 className='mediumFont fontSize-20 brandMain-color mt-3'>
                        Janna Khaled
                      </h5>
                      <div className='stars mb-2 '>⭐⭐⭐⭐⭐</div>
                      <p className='brandMain-color regularFont fontSize-20'>
                        شركة حدود البناء تتميز بالالتزام العالي بمواعيد التسليم
                        والجودة الممتازة في تنفيذ مشاريع البناء والبنية التحتية.
                        فريقها المتخصص يحرص على توفير حلول مبتكرة تلبي احتياجات
                        العملاء وتفوق توقعاتهم، مع الحفاظ على معايير السلامة
                        والكفاءة في كل خطوة ارشحها لكم
                      </p>
                    </div>
                  </div>
                </div>
                <div className='container'>
                  {/* Custom Navigation Arrows */}
                  <button
                    className='carousel-control-prev custom-arrow'
                    type='button'
                    data-bs-target='#testimonialCarousel'
                    data-bs-slide='prev'
                  >
                    <span className='icon-container3'>
                      <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'
                      ></span>
                    </span>
                  </button>
                  <button
                    className='carousel-control-next custom-arrow'
                    type='button'
                    data-bs-target='#testimonialCarousel'
                    data-bs-slide='next'
                  >
                    <span className='icon-container3'>
                      <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'
                      ></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default Home;
