import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../../styles/dashboard-styles/budget/delete-popup.css";
import { DeleteProposedBudget } from "../../../api/dashboard/budget/suggested-budget/DeleteProposedBudget";
import { useLocation } from "react-router-dom";
import { DeleteTransferBudget } from "../../../api/dashboard/budget/reports/DeleteTransferBudget";
import { DeleteReinforcementBudget } from "../../../api/dashboard/budget/reinforcement-budget/DeleteReinforcementBudget";

interface DeleteModalComponentProps {
  id: number;
}

function DeleteModalComponent(props: DeleteModalComponentProps) {
  const location = useLocation();
  const pathName = location.pathname;
  const table = pathName.split("/")[3];

  const [show, setShow] = useState<boolean>(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  
  const handleDelete = (): void => {
    if (table === "suggestedBudget") {
      DeleteProposedBudget(props.id);
    } else if (table === "reports") {
      DeleteTransferBudget(props.id);
    } else if (table === "annualBudget") {
      // DeleteAnnualBudget
    }
    else if (table === "reinforcement-budget") { 
      DeleteReinforcementBudget(props.id);
    }
    handleClose();
  };

  return (
    <>
      <Button className='btn btn-light' onClick={handleShow}>
        <i className='bi bi-trash-fill brandMain-color '></i>
      </Button>

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
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
          <button
          onClick={handleDelete}  className='btn btn-danger text-white px-5 py-2'>حذف</button>
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
