import { useNavigate } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
const AddNewItemSuggestedBudgetComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='container p-5 mediumFont'>
      <div className='row'>
        <div className='col-md-12'>
          <label htmlFor=''>إضافة ميزانية المقترحة </label>
        </div>
      </div>
      <div className='row mt-5 py-2'>
        <div className='col-6'>
          <label htmlFor=''>الباب</label>
        </div>
        <div className='col'>
          <label htmlFor=''>البند</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <select name='' id='' className='w-100 input-field'>
            <option value=''>option1</option>
            <option value=''>option1</option>
          </select>
        </div>
        <div className='col-6'>
          <select name='' id='' className='w-100 input-field'>
            <option value=''>option1</option>
            <option value=''>option1</option>
          </select>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>رقم التصنيف الاقتصادي</label>
        </div>
        <div className='col'>
          <label htmlFor=''>ميزانية السنة القادمة</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>المعتمد السابق</label>
        </div>
        <div className='col'>
          <label htmlFor=''>الاجمالي المعتمد السابق</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>المنصرف السابق</label>
        </div>
        <div className='col'>
          <label htmlFor=''>الوفر</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>العام الحالي</label>
        </div>
        <div className='col'>
          <label htmlFor=''>العام الماضي</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></input>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-12'>
          <label htmlFor=''>الملاحظات</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <textarea
            name=''
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
          ></textarea>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2'>
          حفظ
        </button>
        <button
          onClick={() => navigate(routes.SUGGESTEDTABLE_ROUTE)}
          className='btn btn-light Gray100-bgColor px-5 py-2 mx-2'
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default AddNewItemSuggestedBudgetComponent;
