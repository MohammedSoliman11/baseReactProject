import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
import { useEffect, useRef, useState } from "react";
import { GetAllSectionsLookups } from "../../../api/dashboard/budget/suggested-budget/GetAllSectionLookups";
import { Lookup } from "../../../api/dashboard/budget/suggested-budget/types";
import { EditTransferBudget } from '../../../api/dashboard/budget/reports/EditTransferBudget';
import { AddNewTransferBudget } from "../../../api/dashboard/budget/reports/AddTransferBudget";
import { GetAllProposedBudgetSections } from "../../../api/dashboard/budget/reports/GetAllProposedBudgetSections";
const AddNewItemReportComponent = () => {
  const navigate = useNavigate();
  const isFetchedGetAllSectionsLookups = useRef(false);
  const isFetchedGetAllProposedBudgetSections = useRef(false);
  // const [DoorLookUpData, setDoorLookUpData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  const [SectionLookUpData, setSectionLookUpData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  const [ProposedBudget, setProposedBudget] = useState({ isDone: false, data: [], message: "", statusCode: 0, outId: 0 });
  
  const [reqBody, setReqBody] = useState({
    id: 0,
    proposedBudgetTransferredFromId: 0,
    proposedBudgetTransferredToId: 0,
    transfersValue: 0,
    holdMoneyValue: 0,
    holdMoneyId: 0,
    transfersDate: "2025-02-07T00:35:15.687Z",
    year: "string",
    notes: "string",
  });
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); 

  useEffect(() => {
    if (!isFetchedGetAllSectionsLookups.current) {
      GetAllSectionsLookups().then((res) => {
        setSectionLookUpData(res);
        isFetchedGetAllSectionsLookups.current = true;
      });
    }
    if (!isFetchedGetAllProposedBudgetSections.current) {
      GetAllProposedBudgetSections().then((res) => {
        setProposedBudget(res);
        isFetchedGetAllProposedBudgetSections.current = true;
      });
    }
  }, []);
  
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      if (name === 'holdMoneyValue' || name === 'transfersValue') {
        setReqBody((prevState) => ({
          ...prevState,
          [name]: parseInt(value),
        }));
        return;
      } else {
        setReqBody((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    };
  
    function handleSubmit() {
      if (id) {
        EditTransferBudget({...reqBody,id: parseInt(id)});
      } else {
        AddNewTransferBudget(reqBody);
      }
      setTimeout(() => { navigate(routes.REPORTTABLE_ROUTE);}, 2000);
    }

  return (
    <div className='container p-5 mediumFont'>
      <div className='row py-2'>
        <div className='col-md-12'>
          <label htmlFor=''>إضافة ميزانية مناقلة </label>
        </div>
      </div>
      <div className='row mt-5 py-2'>
        <div className='col-6'>
          <label htmlFor=''>البند المحجوز منه</label>
        </div>
      </div>
      <div className='row '>
        <div className='col-6'>
          <select name='holdMoneyId' id='' className='w-100 input-field' onChange={handleChange}>
            <option value=''>اختر البند</option>
              {SectionLookUpData && SectionLookUpData.data.map((item: Lookup) => (
                  <option key={item.id} value={item.id}>{item.value}</option>
                ))}
          </select>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>البند المنقول منه</label>
        </div>
        <div className='col-6'>
          <label htmlFor=''>البند المنقول اليه</label>
        </div>
      </div>
      <div className='row '>
        <div className='col-6'>
          <select name='proposedBudgetTransferredFromId' id='' className='w-100 input-field' onChange={handleChange}>
            <option value=''>اختر البند</option>
              {ProposedBudget && ProposedBudget.data.map((item: Lookup) => (
                  <option key={item.id} value={item.id}>{item.value}</option>
                ))}
          </select>
        </div>
        <div className='col-6'>
          <select name='proposedBudgetTransferredToId' id='' className='w-100 input-field' onChange={handleChange}>
            <option value=''>اختر البند</option>
              {ProposedBudget && ProposedBudget.data.map((item: Lookup) => (
                  <option key={item.id} value={item.id}>{item.value}</option>
                ))}
        </select>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>قيمة المبلغ المحجوز</label>
        </div>
        <div className='col'>
          <label htmlFor=''>العام</label>
        </div>
      </div>
      <div className='row '>
        <div className='col-6'>
          <input
            type='text'
            name='holdMoneyValue'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='year'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>قيمة المناقلة</label>
        </div>
        <div className='col'>
          <label htmlFor=''>تاريخ المناقلة</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <input
            type='text'
            name='transfersValue'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='transfersDate'
            id=''
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
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2' onClick={handleSubmit}>
          حفظ
        </button>
        <button
          onClick={() => navigate(routes.REPORTTABLE_ROUTE)}
          className='btn btn-light Gray100-bgColor px-5 py-2 mx-2'
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default AddNewItemReportComponent;
