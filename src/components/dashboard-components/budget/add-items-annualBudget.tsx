import { useNavigate } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
const AddNewItemAnnualBudgetComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='container p-5 mediumFont'>
      <div className='row'>
        <div className='col-md-12'>
          <label htmlFor=''>إضافة ميزانية عام </label>
        </div>
      </div>

      <div className='row mt-5 py-2'>
        <div className='col-6'>
          <label htmlFor=''>الميزانية المقترحة</label>
        </div>
        <div className='col'>
          <label htmlFor=''>رقم الإيضاح </label>
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
          <label htmlFor=''>الموافقة مقابل الإيرادات</label>
        </div>
        <div className='col'>
          <label htmlFor=''>تخصيص الميزانية</label>
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
          <label htmlFor=''>عنوان التصنيف الاقتصادي</label>
        </div>
        <div className='col'>
          <label htmlFor=''>التفسير التصنيف الاقتصادي</label>
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
          <label htmlFor=''> تفاصيل رقم التصنيف الاقتصادي</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <select name='' id='' className='w-100 input-field'>
            <option value=''>option1</option>
            <option value=''>option1</option>
          </select>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2'>
          حفظ
        </button>
        <button
          onClick={() => navigate(routes.ANNUALTABLE_ROUTE)}
          className='btn btn-light Gray100-bgColor px-5 py-2 mx-2'
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default AddNewItemAnnualBudgetComponent;
