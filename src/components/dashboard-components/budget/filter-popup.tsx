import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import "../../../styles/dashboard-styles/show-info-popup.css";
import "../../../styles/dashboard-styles/delete-popup.css";

function FilterModalComponent() {
  const [show, setShow] = useState(false);

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
            <div className='row p-1'>
              <div className='col-6'>
                <label className='form-label mediumFont Gray500-color'>
                  الباب
                </label>
              </div>
              <div className='col-6'>
                <label className='form-label mediumFont Gray500-color'>
                  رقم المشروع
                </label>
              </div>
            </div>
            <div className='row p-1'>
              <div className='col-6'>
                <select name='gender' id='gender' className='w-100 input-field'>
                  <option>اختر الباب</option>
                  <option>option2</option>
                </select>
              </div>
              <div className='col-6'>
                <input
                  type='text'
                  placeholder='اكتب قيمة النص'
                  className='w-100 input-field'
                />
              </div>
            </div>
            <div className='row p-1'>
              <div className='col-12'>
                <label className='mediumFont' htmlFor=''>
                  العام الحالي
                </label>
              </div>
            </div>
            <div className='row p-1'>
              <div className='col-12'>
                <input
                  type='text'
                  placeholder='اكتب رقم العام الحالي'
                  className='w-100 input-field'
                />
              </div>
            </div>
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
}

export default FilterModalComponent;
