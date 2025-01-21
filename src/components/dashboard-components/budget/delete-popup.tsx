import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../../styles/dashboard-styles/budget/delete-popup.css";

function DeleteModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-light' onClick={handleShow}>
        <i className='bi bi-trash-fill Gray300-color'></i>
      </button>

      <Modal show={show} onHide={handleClose} centered className='modal'>
        <Modal.Body>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='' style={{ width: "25rem" }}>
              <div className='text-center'>
                <div className='mb-3'>
                  <i
                    className='bi bi-trash-fill text-danger'
                    style={{ fontSize: "3rem" }}
                  ></i>
                </div>
                <h5 className='card-title mb-2'>
                  هل أنت متأكد من أنك تريد الحذف؟
                </h5>
                <p className='card-text text-muted'>
                  بمجرد تأكيد الحذف لا يمكنك استرجاع البيانات مرة أخرى
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center mediumFont'>
          <button className='btn btn-danger text-white px-5 py-2'>حذف</button>
          <button
            className='btn btn-light Gray100-bgColor px-5 py-2'
            onClick={handleClose}
          >
            إلغاء
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModalComponent;
