import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
import { useEffect, useRef, useState } from "react";
import { AddNewReinforcementBudget } from "../../../api/dashboard/budget/reinforcement-budget/AddAnnualBudget";
import { EditReinforcementBudget } from "../../../api/dashboard/budget/reinforcement-budget/EditReinforcementBudget";
import { Lookup } from "../../../api/dashboard/budget/suggested-budget/types";
import { GetAllProposedBudgetSections } from "../../../api/dashboard/budget/reports/GetAllProposedBudgetSections";


const AddNewItemreinforcementBudgetComponent = () => {
  const navigate = useNavigate();
  const isFetchedGetAllProposedBudgetSections = useRef(false);
  const [ProposedBudget, setProposedBudget] = useState({ isDone: false, data: [], message: "", statusCode: 0, outId: 0 });
  useEffect(() => {
    if (!isFetchedGetAllProposedBudgetSections.current) {
      GetAllProposedBudgetSections().then((res) => {
        setProposedBudget(res);
        isFetchedGetAllProposedBudgetSections.current = true;
      });
    }
  }, []);
  const [reqBody, setReqBody] = useState({
    sectionId: 0,
    value: 0,
    date: new Date().toISOString()
  });
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); 

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'value') {
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
      EditReinforcementBudget({...reqBody,id: parseInt(id)});
    } else {
      AddNewReinforcementBudget(reqBody);
    }
    setTimeout(() => { navigate(routes.REINFORCEMENTTABLE_ROUTE);}, 2000);
  }

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
          <select name='sectionId' id='' className='w-100 input-field' onChange={handleChange}>
            <option value=''>اختر البند</option>
            {ProposedBudget && ProposedBudget.data.map((item: Lookup) => (
                <option key={item.id} value={item.id}>{item.value}</option>
              ))}
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
            name='value'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='date'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button onClick={handleSubmit} className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2'>
          حفظ
        </button>
        <button
          onClick={() => navigate(routes.REINFORCEMENTTABLE_ROUTE)}
          className='btn btn-light Gray100-bgColor px-5 py-2 mx-2'
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default AddNewItemreinforcementBudgetComponent;
