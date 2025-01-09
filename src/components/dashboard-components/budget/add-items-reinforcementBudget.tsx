import { Link } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
const AddNewItemreinforcementBudgetComponent = () => {
  return (
    <div className='container p-5 mediumFont'>
      <div className='row'>
        <div className='col-md-12'>
          <label htmlFor=''>إضافة ميزانية تعزيز </label>
        </div>
      </div>

      <div className='row mt-5 py-2'>
        <div className='col-6'>
          <label htmlFor=''>الميزانية</label>
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

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>المبلغ</label>
        </div>
        <div className='col'>
          <label htmlFor=''>التاريخ </label>
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

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2'>
          حفظ
        </button>
        <Link
          to={routes.DASHBOARD_ROUTE}
          className='btn btn-light Gray100-bgColor px-5 py-2 mx-2'
        >
          إغلاق
        </Link>
      </div>
    </div>
  );
};

export default AddNewItemreinforcementBudgetComponent;
