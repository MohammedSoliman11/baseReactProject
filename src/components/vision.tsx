import light from "../assets/images/flat-color-icons_idea.png";
import arrow from "../assets/images/mage_goals-fill.png";
import "../styles/vision.css";
const Vision = () => {
  return (
    <>
      {/* section 4 */}
      <div className='container my-5'>
        <div className='row text-right'>
          {/* Right Column */}
          <div className='col-md-6 my-2'>
            <div className='content-box'>
              <h4 className='d-flex align-items-center'>
                <div className='lightIcon secondary-color p-1 ms-2'>
                  <img src={light} alt='' className='secondary-color' />
                </div>

                <div className='mediumFont brandMain-color'>
                  <span className=''>
                    {" "}
                    <span className='secondary-color'>رؤية</span> المؤسسة
                  </span>
                </div>
              </h4>

              <p className='me-5 regularFont text-justify brandMain-color'>
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
          <div className='col-md-6 my-2'>
            <div className='content-box'>
              <h4 className='d-flex align-items-center'>
                <div className='lightIcon secondary-color p-1 ms-2'>
                  <img src={arrow} alt='' className='' />
                </div>
                <div className='mediumFont brandMain-color'>
                  <span className=''>
                    {" "}
                    <span className='secondary-color'>رسالة</span> المؤسسة
                  </span>
                </div>
              </h4>
              <p className='me-5 regularFont text-justify brandMain-color'>
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
    </>
  );
};

export default Vision;
