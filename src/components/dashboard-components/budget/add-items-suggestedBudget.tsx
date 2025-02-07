import {  useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "../../../Routes/appRoutes";

import { GetAllDoorsLookups } from "../../../api/dashboard/budget/suggested-budget/GetAllDoorsLookups";
import { AddNewProposedBudget } from "../../../api/dashboard/budget/suggested-budget/AddProposedBudget";
import { Lookup } from "../../../api/dashboard/budget/suggested-budget/types";
import { GetAllSectionsLookups } from "../../../api/dashboard/budget/suggested-budget/GetAllSectionLookups";
import { EditProposedBudget } from "../../../api/dashboard/budget/suggested-budget/EditProposedBudget";

const AddNewItemSuggestedBudgetComponent = () => {
  const navigate = useNavigate();

  const [DoorLookUpData, setDoorLookUpData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  const [SectionLookUpData, setSectionLookUpData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  const [reqBody, setReqBody] = useState({
    doorLookUpId: 1,
    sectionLookUpId: 1,
    economicClassificationNumber: "",
    nextYearBudget: 0,
    previousApproved: 0,
    totalPreviousApproved: 0,
    previousOutgoing: 0,
    previousAvailable: 0,
    currentYear: 0,
    lastYear: 0,
    notes: "",
  });
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); 
  
  useEffect(() => {
    GetAllDoorsLookups().then((res) => { 
      setDoorLookUpData(res);
    });
    GetAllSectionsLookups().then((res) => { 
      setSectionLookUpData(res);
    });
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReqBody((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit() {
    if (id) {
      EditProposedBudget({...reqBody,id: parseInt(id)});
    } else {
      AddNewProposedBudget(reqBody);
    }
    setTimeout(() => { navigate(routes.SUGGESTEDTABLE_ROUTE);}, 2000);
  }

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
          <select name='doorLookUpId' className='w-100 input-field' onChange={handleChange}>
            <option value=''>اختر الباب</option>
            {DoorLookUpData && DoorLookUpData.data.map((item: Lookup) => (
              <option key={item.id} value={item.id}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className='col-6'>
          <select name='sectionLookUpId' className='w-100 input-field' onChange={handleChange}>
          <option value=''>اختر البند</option>
          {SectionLookUpData && SectionLookUpData.data.map((item: Lookup) => (
              <option key={item.id} value={item.id}>{item.value}</option>
            ))}
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
            name='economicClassificationNumber'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='nextYearBudget'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
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
            name='previousApproved'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='totalPreviousApproved'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
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
            name='previousOutgoing'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='previousAvailable'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
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
            name='currentYear'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='lastYear'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
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
            name='notes'
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button onClick={handleSubmit} className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2'>
          حفظ
        </button>
        <button
          onClick={
            () => navigate(routes.SUGGESTEDTABLE_ROUTE)
          }
          className='btn btn-light Gray100-bgColor px-5 py-2 mx-2'
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default AddNewItemSuggestedBudgetComponent;
