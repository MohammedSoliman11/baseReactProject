import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../../styles/dashboard-styles/budget/show-info-popup.css";
import { IShowInfo } from "../../../types/show-info";
import { data } from "../../../store/data";
import { reportData } from "../../../store/data";
import { tableHeaders } from "../../../store/table-headers/table-headers";
import { Column } from "../../../types";

const suggestedBudget: Column[] = tableHeaders.suggestedBudget;
const reports: Column[] = tableHeaders.reports;

const InfoModalComponent: React.FC<IShowInfo> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn btn-light' onClick={handleShow}>
        <i className='bi bi-eye-fill text-success'></i>
      </Button>

      {props.tableName === "suggestedBudget" ? (
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
                    <p key={index}>
                      {data[props.currentIndex - 1][header.field]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center align-items-center mediumFont'>
            <Button className='btn btn-light brandMain-bgColor text-white px-5 py-2'>
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
      ) : (
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
                      {reportData[props.currentIndex - 1][header.field]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center align-items-center mediumFont'>
            <Button className='btn btn-light brandMain-bgColor text-white px-5 py-2'>
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
