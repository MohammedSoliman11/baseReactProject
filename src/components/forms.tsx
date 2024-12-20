import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/froms.css";
import KSAFlag from "../assets/image.png";
const Form = () => {
  // State to track the active form
  const [activeForm, setActiveForm] = useState("join"); // 'join' or 'service'

  // Toggle between forms
  const showJoinForm = () => setActiveForm("join");
  const showServiceForm = () => setActiveForm("service");

  return (
    <div className='container d-flex justify-content-center mt-5'>
      {/* Toggle Buttons */}
      <div className='col-md-8'>
        <div className='d-flex justify-content-center mb-4 tabs'>
          <button
            className={`col-md-6 btn ${
              activeForm === "join" ? "active" : ""
            } tab`}
            onClick={showJoinForm}
          >
            طلب انضمام
          </button>
          <button
            className={`col-md-6 btn ${
              activeForm === "service" ? "active " : ""
            } tab`}
            onClick={showServiceForm}
          >
            طلب خدمة
          </button>
        </div>

        {/* Form Content */}
        {activeForm === "join" && <JoinForm />}
        {activeForm === "service" && <ServiceForm />}
      </div>
    </div>
  );
};

// "طلب انضمام" Form
const JoinForm = () => (
  <form>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>الاسم الثلاثي</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='fullName'
          placeholder='ادخل الاسم'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>البريد الالكتروني</label>
        <span className='required'>*</span>
        <input
          type='email'
          id='fullName'
          placeholder='ادخل البريد الالكتروني الخاص بك'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='phone-input-container'>
        <label className='input-label'>رقم الجوال</label>
        <span className='required'>*</span>
        <div className='phone-input-wrapper'>
          <select className='country-code'>
            <option value='+966'>+966</option>
            <option value='+1'>+1</option>
            <option value='+44'>+44</option>
            <option value='+91'>+91</option>
          </select>
          <div className='flag'>
            <img src={KSAFlag} alt='Saudi Arabia' />
          </div>
          <input
            type='text'
            id='mobile'
            placeholder='رقم الهاتف'
            className='phone-input'
          />
        </div>
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>الجنس</label>
        <select name='gender' id='gender' className='input-field'>
          <option value='Male'>ذكر</option>
          <option value='Femail'>انثي</option>
        </select>
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>اسم الشركة</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='gender'
          placeholder='ادخل اسم الشركة'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>السجل التجاري</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='gender'
          placeholder='ادخل رقم السجل التجاري'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>السجل الضريبي</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='gender'
          placeholder='ادخل رقم السجل الضريبي'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>لماذا تريد الانضمام الينا ؟</label>
        <textarea
          placeholder='اكتب لماذا تريد الانضمام الينا ؟'
          className='input-field'
          rows={5}
        />
      </div>
    </div>
    <button className='gradient-button'>
      <span className='button-text'>ارسال طلب انضمام</span>
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
    </button>
  </form>
);

// "طلب خدمة" Form
const ServiceForm = () => (
  <form>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>الاسم الثلاثي</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='fullName'
          placeholder='ادخل الاسم'
          className='input-field'
        />
      </div>
    </div>
    <div className='phone-input-container'>
      <label className='input-label'>
        <span className='required'>*</span> رقم الجوال
      </label>
      <div className='phone-input-wrapper'>
        <select className='country-code'>
          <option value='+966'>+966</option>
          <option value='+1'>+1</option>
          <option value='+44'>+44</option>
          <option value='+91'>+91</option>
        </select>
        <div className='flag'>
          <img src={KSAFlag} alt='Saudi Arabia' />
        </div>
        <input
          type='text'
          id='mobile'
          placeholder='رقم الهاتف'
          className='phone-input'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>نوع الخدمة</label>
        <select
          name='service'
          id='service'
          className='input-field'
          aria-placeholder='اختر نوع الخدمة'
        >
          <option value='service1'>خدمة 1</option>
          <option value='ُservice2'>خدمة 2</option>
        </select>
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>السجل التجاري</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='gender'
          placeholder='ادخل رقم السجل التجاري'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>السجل الضريبي</label>
        <span className='required'>*</span>
        <input
          type='text'
          id='gender'
          placeholder='ادخل رقم السجل الضريبي'
          className='input-field'
        />
      </div>
    </div>
    <div className='mb-3'>
      <div className='input-container'>
        <label className='input-label'>لماذا تريد الانضمام الينا ؟</label>
        <input
          type='textarea'
          id='gender'
          placeholder='اكتب لماذا تريد الانضمام الينا ؟'
          className='input-field'
        />
      </div>
    </div>
    <button className='gradient-button'>
      <span className='button-text'>ارسال طلب انضمام</span>
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
    </button>
  </form>
);

export default Form;
