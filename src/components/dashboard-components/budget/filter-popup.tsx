import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../../styles/dashboard-styles/budget/delete-popup.css";
import { IFilterPopup, IFilterRowsContent } from "../../../types";
import { useNavigate } from "react-router-dom";
import routes from "../../../Routes/appRoutes";
import { GetAllDoorsLookups } from "../../../api/dashboard/budget/suggested-budget/GetAllDoorsLookups";
import { GetAllSectionsLookups } from "../../../api/dashboard/budget/suggested-budget/GetAllSectionLookups";
import { Lookup } from "../../../api/dashboard/budget/suggested-budget/types";

const FilterModalComponent: React.FC<IFilterPopup> = (props) => {
  
  const [DoorLookUpData, setDoorLookUpData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  const [SectionLookUpData, setSectionLookUpData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const route: any = {
    suggestedBudget: routes.SUGGESTEDTABLE_ROUTE,
    reports: routes.REPORTTABLE_ROUTE,
    annualBudget: routes.ANNUALTABLE_ROUTE,
    reinforcementBudget: routes.REINFORCEMENTTABLE_ROUTE,
  };
  
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const filterRowContent: IFilterRowsContent = {
    suggestedBudget: [
      [
        { label: "الباب", inputType: "select", name: "doorId" },
        { label: "البند", inputType: "select", name: "sectionId" },
      ],
      [
        { label: "رقم التصنيف", inputType: "text", name: "classificationNumber" },
        { label: "رقم العام الحالي", inputType: "text", name: "currentYearNumber" },
      ],
    ],
    reports: [
      [
        { label: "الباب", inputType: "select", name: "doorLookUp" },
        { label: "البند", inputType: "select", name: "sectionLookUp" },
      ],
      [
        { label: "رقم التصنيف", inputType: "text",  name: "classificationNumber" },
        { label: "رقم العام الحالي", inputType: "text", name: "currentYearNumber" },
      ],
    ],
    annualBudget: [
      [
        { label: "الباب", inputType: "select", name: "doorLookUp" },
        { label: "رقم المشروع", inputType: "text", name: "projectNumber" },
      ],
      [
        { label: "رقم الإضاح", inputType: "text", name: "clarificationNumber" },
        { label: "رقم العام الحالي", inputType: "text", name: "currentYearNumber" },
      ],
    ],
    reinforcementBudget: [
      [
        { label: "الباب", inputType: "select", name: "doorLookUp" },
        { label: "البند", inputType: "select", name: "sectionLookUp" },
      ],
    ],
  };

  useEffect(() => {
    props.setFilterParams({ doorId: 0, sectionId: 0 });
    GetAllDoorsLookups().then((res) => { 
      setDoorLookUpData(res);
    });
    GetAllSectionsLookups().then((res) => { 
      setSectionLookUpData(res);
    });
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    props.setFilterParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    let path = route[props.tableName] + "?";
    if (props.FilterParams.doorId) {
      path += `doorId=${props.FilterParams.doorId}&`;
    }
    if (props.FilterParams.sectionId) {
      path += `sectionId=${props.FilterParams.sectionId}&`;
    }
    navigate(path);
    handleClose();
  };

  return (
    <>
      <Button className='btn btn-light p-2' onClick={handleShow}>
        <i className='bi bi-sliders d-inline-block rotate-icon secondary-color'></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered className='modal'>
        <Modal.Header className='d-flex justify-content-center align-items-center mediumFont brandMain-color'>
          <Modal.Title>البحث والتصنيف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            {filterRowContent[props.tableName].map((row, index) => (
              <div key={index}>
                <div className='row p-1'>
                  <div className='col-6'>
                    <label className='form-label mediumFont Gray500-color'>
                      {row[0].label}
                    </label>
                  </div>
                  <div className='col-6'>
                    <label className='form-label mediumFont Gray500-color'>
                      {row[1].label}
                    </label>
                  </div>
                </div>
                <div className='row p-1'>
                  <div className='col-6'>
                    {row[0].inputType === "text" && (
                      <input
                        type='text'
                        name={row[0].name}
                        onChange={handleChange}
                        placeholder='اكتب قيمة النص'
                        className='w-100 input-field'
                      />
                    )}
                    {row[0].inputType === "select" && (
                      <select 
                        onChange={handleChange} name={row[0].name} className='w-100 input-field'>
                        {row[0].name === "doorId" && (
                          <>
                            <option value=''>اختر الباب</option>
                            {DoorLookUpData && DoorLookUpData.data.map((item: Lookup) => (
                              <option key={item.id} value={item.id}>{item.value}</option>
                            ))}
                          </>
                        )}
                        {row[0].name !== "doorId" && (
                          <>
                            <option>اختر الباب</option>
                            <option>option2</option>
                          </>
                        )}
                      </select>
                    )}
                  </div>
                  <div className='col-6'>
                    {row[1].inputType === "text" && (
                      <input
                        onChange={handleChange}
                        name={row[1].name}
                        type='text'
                        placeholder='اكتب قيمة النص'
                        className='w-100 input-field'
                      />
                    )}
                    {row[1].inputType === "select" && (
                      <select 
                      onChange={handleChange} name={row[1].name} className='w-100 input-field'>
                        {row[1].name === "sectionId" && (
                          <>
                            <option value=''>اختر الباب</option>
                            {SectionLookUpData && SectionLookUpData.data.map((item: Lookup) => (
                              <option key={item.id} value={item.id}>{item.value}</option>
                            ))}
                          </>
                        )}
                        {row[1].name !== "sectionId" && (
                          <>
                            <option>اختر الباب</option>
                            <option>option2</option>
                          </>
                        )}
                      </select>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-light brandMain-bgColor text-white px-5 py-2' onClick={handleSubmit}>
            تفعيل
          </button>
          <button
            className='btn btn-light Gray100-bgColor px-5 py-2'
            onClick={handleClose}
          >
            إغلاق
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FilterModalComponent;
