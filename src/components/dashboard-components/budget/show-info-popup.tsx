import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../styles/dashboard-styles/budget/show-info-popup.css";
import { IShowInfo } from "../../../types/show-info";
import { annualData } from "../../../store/data";
import { infoFields } from "../../../store/table-headers/info-fields";
import { Column } from "../../../types";
import routes from "../../../Routes/appRoutes";
const suggestedBudget: Column[] = infoFields.suggestedBudget;
const reports: Column[] = infoFields.reports;
const annualBudget: Column[] = infoFields.annualBudget;

const InfoModalComponent: React.FC<IShowInfo> = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn btn-light' onClick={handleShow}>
        <i className='bi bi-eye-fill text-success'></i>
      </Button>

      {props.tableName === "suggestedBudget" && (
        <Modal show={show} onHide={handleClose} centered className='modal'>
          <Modal.Header className='d-flex justify-content-center align-items-center mediumFont brandMain-color'>
            <Modal.Title>التفاصيل</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container mediumFont'>
              <div className='row'>
                <div className='col-6 Gray500-color'>
                  {suggestedBudget.map((header: Column, index: number) => {
                    if (header.field === "actions") return;
                    return <p key={index}>{header.label}</p>;
                  })}
                </div>
                <div className='col-6 regularFont Gray400-color'>
                  {suggestedBudget.map((header: Column, index: number) => (
                    
                    <p key={index}>{header.field === "doorLookUp" || header.field === "sectionLookUp"
                        ? props.data[header.field]?.value ?? '-'
                        : typeof props.data[header.field] === 'object'
                        ? JSON.stringify(props.data[header.field])
                        : props.data[header.field] ?? '-'}</p>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center align-items-center mediumFont'>
            <Button className='btn btn-light brandMain-bgColor text-white px-5 py-2' onClick={() => navigate(routes.ADDNEWITEM_BUDGET_ROUTE+`?id=${props.data.id}`)}>
              <i className='bi bi-pencil'></i> تعديل
            </Button>
            <Button
              className='btn btn-light Gray100-bgColor px-5 py-2'
              onClick={handleClose}
            >
              إغلاق
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {props.tableName === "reports" && (
        <Modal show={show} onHide={handleClose} centered className='modal'>
          <Modal.Header className='d-flex justify-content-center align-items-center mediumFont brandMain-color'>
            <Modal.Title>التفاصيل</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container mediumFont'>
              <div className='row'>
                <div className='col-6 Gray500-color'>
                  {reports.map((header: Column, index: number) => {
                    if (header.field === "actions") return;
                    return <p key={index}>{header.label}</p>;
                  })}
                </div>
                <div className='col-6 regularFont Gray400-color'>
                  {reports.map((header: Column, index: number) => (
                    <p key={index}>
                      {header.field === 'proposedBudgetTransferredFrom'
                        ? props.data[header.field]?.sectionLookUp?.value ?? '-'
                        : (typeof props.data[header.field] === 'object'
                          ? props.data[header.field]?.sectionLookUp?.value :
                          JSON.stringify(props.data[header.field]))
                        ?? '-'}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center align-items-center mediumFont'>
            <Button className='btn btn-light brandMain-bgColor text-white px-5 py-2' onClick={() => navigate(routes.ADDNEWITEM_REPORTS_ROUTE+`?id=${props.data.id}`)}>
              <i className='bi bi-pencil'></i> تعديل
            </Button>
            <Button
              className='btn btn-light Gray100-bgColor px-5 py-2'
              onClick={handleClose}
            >
              إغلاق
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {props.tableName === "annualBudget" && (
        <Modal show={show} onHide={handleClose} centered className='modal'>
          <Modal.Header className='d-flex justify-content-center align-items-center mediumFont brandMain-color'>
            <Modal.Title>التفاصيل</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container mediumFont'>
              <div className='row'>
                <div className='col-6 Gray500-color'>
                  {annualBudget.map((header: Column, index: number) =>
                    header.field !== "actions" ? (
                      <p key={index}>{header.label}</p>
                    ) : (
                      <></>
                    )
                  )}
                </div>
                <div className='col-6 regularFont Gray400-color'>
                  {annualBudget.map((header: Column, index: number) => (
                    <p key={index}>
                      {typeof annualData[props.currentIndex][header.field] === 'object'
                        ? JSON.stringify(annualData[props.currentIndex][header.field])
                        : annualData[props.currentIndex][header.field]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center align-items-center mediumFont'>
            <Button className='btn btn-light brandMain-bgColor text-white px-5 py-2' onClick={() => navigate(routes.ADDNEWITEM_ANNUALBUDGET_ROUTE+`?id=${props.data.id}`)}>
              <i className='bi bi-pencil'></i> تعديل
            </Button>
            <Button
              className='btn btn-light Gray100-bgColor px-5 py-2'
              onClick={handleClose}
            >
              إغلاق
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default InfoModalComponent;
