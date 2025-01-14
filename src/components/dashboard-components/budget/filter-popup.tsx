import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../../styles/dashboard-styles/budget/delete-popup.css";
import { IFilterPopup, IFilterRowsContent } from "../../../types";

const FilterModalComponent: React.FC<IFilterPopup> = (props) => {
  const [show, setShow] = useState(false);

  const filterRowContent: IFilterRowsContent = {
    suggestedBudget: [
      [
        { label: "الباب", inputType: "select" },
        { label: "البند", inputType: "select" },
      ],
      [
        { label: "رقم التصنيف", inputType: "text" },
        { label: "رقم العام الحالي", inputType: "text" },
      ],
    ],
    reports: [
      [
        { label: "الباب", inputType: "select" },
        { label: "البند", inputType: "select" },
      ],
      [
        { label: "رقم التصنيف", inputType: "text" },
        { label: "رقم العام الحالي", inputType: "text" },
      ],
    ],
    annualBudget: [
      [
        { label: "الباب", inputType: "select" },
        { label: "رقم المشروع", inputType: "text" },
      ],
      [
        { label: "رقم الإضاح", inputType: "text" },
        { label: "رقم العام الحالي", inputType: "text" },
      ],
    ],
    reinforcementBudget: [
      [
        { label: "الباب", inputType: "select" },
        { label: "البند", inputType: "select" },
      ],
    ],
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                        placeholder='اكتب قيمة النص'
                        className='w-100 input-field'
                      />
                    )}
                    {row[0].inputType === "select" && (
                      <select className='w-100 input-field'>
                        <option>اختر الباب</option>
                        <option>option2</option>
                      </select>
                    )}
                  </div>
                  <div className='col-6'>
                    {row[1].inputType === "text" && (
                      <input
                        type='text'
                        placeholder='اكتب قيمة النص'
                        className='w-100 input-field'
                      />
                    )}
                    {row[1].inputType === "select" && (
                      <select className='w-100 input-field'>
                        <option>اختر الباب</option>
                        <option>option2</option>
                      </select>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-light brandMain-bgColor text-white px-5 py-2'>
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
