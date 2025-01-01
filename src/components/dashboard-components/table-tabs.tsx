import TableWithPagination from "./table";
import { data } from "../../store/data";
import { tableHeaders } from "../../store/table-headers/table-headers";
import { useState } from "react";
const { suggested } = tableHeaders;
import "../../styles/dashboard-styles/table-tabs.css";
export const TableTabs = () => {
  const [activeForm, setActiveForm] = useState("Form1"); // 'join' or 'service'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: any = {
    Form1: "الميزانية المقترحة",
    Form2: "بيـان الحجوزات والمناقلات والصرف",
    Form3: "ميزانية العام",
    Form4: "ميزانية التعزيز",
  };
  // Toggle between forms
  const showForm1 = () => setActiveForm("Form1");
  const showForm2 = () => setActiveForm("Form2");
  const showForm3 = () => setActiveForm("Form3");
  const showForm4 = () => setActiveForm("Form4");
  return (
    <div className='mx-5'>
      <div className='d-flex justify-content-between my-3'>
        <div className=''>
          <p className='mediumFont fontSize-16 brandMain-color'>
            {values[activeForm]}
            <span className='gray400-color regularFont fontSize-12'>
              {" "}
              ({data.length})
            </span>
          </p>
        </div>
        <div className='d-flex justify-content-between'>
          <div className=''>
            <button className='btn btn-light p-2'>
              <i className='bi bi-download text-info'></i>
            </button>
          </div>
          <div className=''>
            <button className='btn btn-light p-2'>
              <i className='bi bi-sliders d-inline-block rotate-icon secondary-color'></i>
            </button>
          </div>
          <div className=''>
            <button className='btn btn-light p-2'>
              <i className='bi bi-printer-fill brandMain-color '></i>
            </button>
          </div>
          <button
            className='btn brandMain-bgColor text-white px-4 py-2'
            onClick={showForm1}
          >
            + إضافة
          </button>
        </div>
      </div>
      <div id='join' className='d-flex justify-content-center'>
        {/* Toggle Buttons */}
        <div className='col-md-12'>
          <div className='d-flex justify-content-center mb-4 tabs regularFont'>
            <button
              className={`col-md-3 btn fontSize-14 ${
                activeForm === "Form1" ? "active" : ""
              } budget`}
              onClick={showForm1}
            >
              الميزانية المقترحة
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeForm === "Form2" ? "active " : ""
              } budget`}
              onClick={showForm2}
            >
              بيـان الحجوزات والمناقلات والصرف
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeForm === "Form3" ? "active " : ""
              } budget `}
              onClick={showForm3}
            >
              ميزانية العام
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeForm === "Form4" ? "active " : ""
              } budget`}
              onClick={showForm4}
            >
              ميزانية التعزيز{" "}
            </button>
          </div>

          {/* Form Content */}
        </div>
      </div>
      <TableWithPagination
        data={data}
        columns={suggested}
      ></TableWithPagination>
    </div>
  );
};
