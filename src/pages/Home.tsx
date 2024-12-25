// src/pages/Home.jsx
// import React from "react";
import "./../styles/Home.css";

import about from "../assets/images/Rectangle 15.png";
import vector from "../assets/images/Vector (3).png";
import light from "../assets/images/flat-color-icons_idea.png";
import arrow from "../assets/images/mage_goals-fill.png";
import vector2 from "../assets/images/Vector (5).png";
import game from "../assets/images/game-icons_road.png";
import vector3 from "../assets/images/Vector (6).png";
import vector4 from "../assets/images/Group 1171275311.png";
import coloredVector from "../assets/images/Vector (8).png";
import MainPage from "../components/mainPage";

const Home = () => {
  return (
    <>
      {/* Home */}
      <MainPage></MainPage>
      {/* Section 2 */}
      <div id="about-us" className="container section2 mb-5">
        <div className="row align-items-center">
          {/* Right Section - Text */}
          <h5 className=" text-dark fw-bold mb-5 text-center">
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
      <div className="section3 container-fluid mt-5 mb-5">
        <h5 className=" text-white coloredP3 mb-5 pt-5 text-center">
          كلمة مدير{" "}
          <span className="text-warning borderr border-warning">المؤسسة</span>
        </h5>
        <h5>
          <div className="qoute d-flex align-content-center justify-content-center">
            <div className="firstQouteIcon">
              <img src={vector} alt="" className="w-75" />
            </div>
            <div className="quoteText">
              <p className="text-justify text-white  fs-5">
                إنــــه لمــن دواعــي فخـــــــــرنا واعتزازنا أن نكـــــون بهذا
                الصــــــرح العملاق، متميــــــــزون بجودة ما نقدمه لعملائنا
                وحرصاً منا على أن نكون على قدر الثقة التي نحظــــى بها في
                العديــــــد من الأعمال والمشاريع،نتطلع لخـــــدمتكـم على أكمــل
                وجــــه من خـــــلال فـــــريق عمــــل متخصص همـــه الأول
                ارضـــاؤكـــــم، والعمـــــل على إنجـــــــاز الأعمال وتنفيذها
                بأفضل المواصــفات وفقاً للأصول الفنية لأن تحقيــــق رضــــــا
                العمــلاء وإتمــــام الأعمــــــــــــــال الموكلــــة إلينــــا
                في الوقت المحــدد هي ركزتين أســاسيتين للتميز والتطـــــــوير
                والاستمــــــــــرارية في ســــوق العمل بنجـــــــاح
              </p>
            </div>
            <div className="secondQouteIcon d-flex top-0 ">
              <img src={vector2} alt="" className="w-75" />
            </div>
          </div>
        </h5>
      </div>

      {/* section 4 */}
      <div className="container my-5">
        <div className="row text-right">
          {/* Right Column */}
          <div className="col-md-6 mb-4">
            <div className="content-box">
              <h4 className="title d-flex">
                <div className="lightIcon d-flex justify-content-center align-items-center border-warning ">
                  <img src={light} alt="" className="lightImg" />
                </div>
                <div className="lightContent">
                  <span className="coloredP5 pe-2">
                    {" "}
                    <span className="text-warning">رؤية</span> المؤسسة
                  </span>
                </div>
              </h4>
              <p className="content-text me-5 text-justify">
                أن تكـــــــون مـــؤسســــــة حــــدود البنـــــــاء للمقاولات
                العامـــة ،رائـــدة في الســــوق المحلي والعالمي، وذلك بتقديمها
                أعلى مستويات التــــــقنية والجودة في مجال البناء، وأن نصبح
                الخيــــار الأفضـــــل للعمـــــــلاء مـــــــن خـــــلال
                تحقيـــــق الاستــــدامـة والتميـــــز في جــــودة المشاريـع
                المنجـــــزة فـــي الوقــــت المحــــدد وبأسعـار مناسبـــة
                ومنافســـــة.
              </p>
            </div>
          </div>

          {/* Left Column */}
          <div className="col-md-6 mb-4">
            <div className="content-box">
              <h4 className="title d-flex">
                <div className="lightIcon d-flex justify-content-center align-items-center border-warning ">
                  <img src={arrow} alt="" className="lightImg" />
                </div>
                <div className="lightContent">
                  <span className="coloredP5 pe-2">
                    {" "}
                    <span className="text-warning">رسالة</span> المؤسسة
                  </span>
                </div>
              </h4>
              <p className="content-text me-5 text-justify">
                نسعى في مؤسسة حدود البناء للمقاولات العامة لتقـديم ما يتطلع إليه
                العميل وذلك بإيجاد حــلول البناـــء والتي تتماـــشي مع
                الميزانيـــات المختلفــة الأمـــــــر الذي يسهــــــم في
                إيجــــــاد خيارات متعددة للمبـــاني السكني - التجـــــاري وفقآ
                لاحتياج العمـــلاء، ومواكية تقديـــم واهتمام المؤسسة بمعايير
                الجودة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div id="why-we-are-here" className="we container-fluid mb-5">
        <div className="why-us-section py-5 text-white">
          <div className="container text-center">
            {/* Section Title */}
            <h4 className="mb-5">
              لماذا{" "}
              <span className="text-warning borderr border-warning">نحن؟</span>
            </h4>

            {/* Features Section */}
            <div className="container w-75">
              <div className="row">
                {/* Feature 1 */}
                <div className="col-md-3 mb-4">
                  <div className="feature-item">
                    <div className="icon-circle text-white">1</div>
                    <h5 className="mt-3">مواصفات عالية</h5>
                    <p className="featuresText">
                      مواصفات عالية بجودة ذات قيمة ومنظمة
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-3 mb-4">
                  <div className="feature-item">
                    <div className="icon-circle ">2</div>
                    <h5 className="mt-3">نخبة من المهندسين</h5>
                    <p>مجموعة من امهر المهندسين المحترفين</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-3 mb-4">
                  <div className="feature-item">
                    <div className="icon-circle ">3</div>
                    <h5 className="mt-3">عقود قانونية</h5>
                    <p>عقود قانونية متوافقة مع قوانين الدولة</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-3 mb-4">
                  <div className="feature-item">
                    <div className="icon-circle">4</div>
                    <h5 className="mt-3">متابعة دائمة</h5>
                    <p>متابعة دائمة وسهولة تواصل مع العملاء</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div id="services" className="services-section py-5">
        <div className="container text-center">
          {/* Section Header */}
          <h2 className="mb-5 section-header text-warning  ">
            <span className="border-bottom border-warning">الخدمات</span>{" "}
            <span className=" presentIT"> التي نقدمها</span>
          </h2>

          {/* Services Row */}
          <div className="row">
            {/* Card 1: مشاريع الطرق */}
            <div className="col-md-4 mb-4">
              <div className="service-card p-4">
                <div className="icon-circle2 projectCard1 mb-3 service-card1 ">
                  <img src={game} alt="Roads" />
                </div>
                <h5 className="card-title">مشاريع الطرق</h5>
                <p className="card-text">
                  تصميم، تنفيذ، وصيانة الطرق والبنية التحتية المرتبطة بها، بدءًا
                  من التخطيط الهندسي إلى تعبيد الأسطح وإصلاح الأضرار مع ضمان
                  الجودة والسلامة
                </p>
              </div>
            </div>
            {/* Card 2: مشاريع المباني */}
            <div className="col-md-4 mb-4">
              <div className="service-card p-4">
                <div className="icon-circle2 bg-warning mb-3">
                  <img src={vector3} alt="Buildings" />
                </div>
                <h5 className="card-title text-dark">مشاريع المباني</h5>
                <p className="card-text">
                  إدارة جميع مراحل البناء مثل التصميم، الإنشاء، التشطيبات،
                  والإشراف لضمان تنفيذ المشاريع بكفاءة ووفق الجداول الزمنية
                  المحددة.
                </p>
              </div>
            </div>
            {/* Card 3: مشاريع البنية التحتية */}
            <div className="col-md-4 mb-4">
              <div className="service-card p-4">
                <div className="icon-circle2 bg-primary mb-3">
                  <img src={vector4} alt="Infrastructure" />
                </div>
                <h5 className="card-title text-dark">مشاريع البنية التحتية</h5>
                <p className="card-text">
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

      <div id="reviews" className="bidSlider">
        <div className="review-background container-fluid ">
          <div className="h3 text-white text-decoration-underline d-flex  justify-content-center align-items-center">
            <p className="mt-5">الأراء</p>
          </div>

          <div className="slider">
            <div className="layered-container d-flex justify-content-center align-items-center">
              <div className="dotted-box2"></div>
              <div className="dotted-box3"></div>
              {/* Layer 1 */}
              <div className="layer layer-1"></div>
              {/* Layer 2 */}
              <div className="layer layer-2"></div>
              {/* Layer 3 */}

              <div className="layer layer-3 container">
                <div className="testimonial-section">
                  <div className="container">
                    {/* Bootstrap Carousel */}
                    <div
                      id="testimonialCarousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {/* First Slide */}
                        <div className="carousel-item active">
                          <div className="testimonial-card mx-auto">
                            <img src={coloredVector} alt="" />
                            <h5 className="fw-bold mt-3">Janna Khaled</h5>
                            <div className="stars mb-2 ">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text text-dark fw-bold">
                              شركة حدود البناء تتميز بالالتزام العالي بمواعيد
                              التسليم والجودة الممتازة في تنفيذ مشاريع البناء
                              والبنية التحتية. فريقها المتخصص يحرص على توفير
                              حلول مبتكرة تلبي احتياجات العملاء وتفوق توقعاتهم،
                              مع الحفاظ على معايير السلامة والكفاءة في كل خطوة
                              ارشحها لكم
                            </p>
                          </div>
                        </div>
                        {/* Custom Navigation Arrows */}
                        <button
                          className="carousel-control-prev custom-arrow"
                          type="button"
                          data-bs-target="#testimonialCarousel"
                          data-bs-slide="prev"
                        >
                          <span className="icon-container3">
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </button>
                        <button
                          className="carousel-control-next custom-arrow"
                          type="button"
                          data-bs-target="#testimonialCarousel"
                          data-bs-slide="next"
                        >
                          <span className="icon-container3">
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
