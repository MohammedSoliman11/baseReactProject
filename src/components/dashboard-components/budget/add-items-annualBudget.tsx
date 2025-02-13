import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
import { useEffect, useRef, useState } from "react";
import { GetAllProposedBudgetSections } from "../../../api/dashboard/budget/reports/GetAllProposedBudgetSections";
import { EditAnnualBudget } from "../../../api/dashboard/budget/annual-budget/EditAnnualBudget";
import { AddNewAnnualBudget } from "../../../api/dashboard/budget/annual-budget/AddAnnualBudget";
import { Lookup } from "../../../api/dashboard/budget/suggested-budget/types";
const AddNewItemAnnualBudgetComponent = () => {
  const navigate = useNavigate();

  const isFetchedGetAllProposedBudgetSections = useRef(false);
  const [ProposedBudget, setProposedBudget] = useState({ isDone: false, data: [], message: "", statusCode: 0, outId: 0 });
  
  const [reqBody, setReqBody] = useState({
    id: 0,
    budgetId: 0,
    clarificationNumber: "string",
    approvalVersusRevenue: 0,
    budgetAppropriation: 0,
    economicClassificationDetails: 7,
    economicClassificationExplanation: 8,
    economicClassificationName: 9
  });
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); 

  useEffect(() => {
    if (!isFetchedGetAllProposedBudgetSections.current) {
      GetAllProposedBudgetSections().then((res) => {
        setProposedBudget(res);
        isFetchedGetAllProposedBudgetSections.current = true;
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === 'approvalVersusRevenue' || name === 'budgetAppropriation'
      || name === 'budgetId' || name === 'clarificationNumber' || name === 'economicClassificationDetails'
      || name === 'economicClassificationExplanation' || name === 'economicClassificationName'
    ) {
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
      EditAnnualBudget({...reqBody,id: parseInt(id)});
    } else {
      AddNewAnnualBudget(reqBody);
    }
    setTimeout(() => { navigate(routes.ANNUALTABLE_ROUTE);}, 2000);
  }
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
          <select name='budgetId' id='' className='w-100 input-field' onChange={handleChange}>
          <option value=''>اختر البند</option>
            {ProposedBudget && ProposedBudget.data.map((item: Lookup) => (
              <option key={item.id} value={item.id}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='clarificationNumber'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
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
            name='approvalVersusRevenue'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
        <div className='col-6'>
          <input
            type='text'
            name='budgetAppropriation'
            id=''
            className='w-100 input-field'
            placeholder='اكتب قيمة النص'
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''>مسمي التصنيف الاقتصادي</label>
        </div>
        <div className='col'>
          <label htmlFor=''>تفسير مسمي التصنيف الاقتصادي</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <select name='economicClassificationName' id='' className='w-100 input-field' onChange={handleChange}>
            <option value='7'>option1</option>
          </select>
        </div>
        <div className='col-6'>
          <select name='economicClassificationExplanation' id='' className='w-100 input-field' onChange={handleChange}>
            <option value='8'>option1</option>
          </select>
        </div>
      </div>

      <div className='row mt-2 py-2'>
        <div className='col-6'>
          <label htmlFor=''> تفاصيل مسمي التصنيف الاقتصادي</label>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <select name='economicClassificationDetails' id='' className='w-100 input-field' onChange={handleChange}>
            <option value='9'>option1</option>
          </select>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-2 py-2'>
        <button onClick={handleSubmit} className='btn btn-light brandMain-bgColor text-white px-5 py-2 mx-2'>
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
