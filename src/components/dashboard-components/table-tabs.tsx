import TableWithPagination from "./table";
import { data, reportData } from "../../store/data";
import { tableHeaders } from "../../store/table-headers/table-headers";
import { useState } from "react";
const tableData = tableHeaders;
import "../../styles/dashboard-styles/table-tabs.css";
export const TableTabs = () => {
  const [activeTable, setActiveTable] = useState("suggestedBudget"); // 'join' or 'service'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: any = {
    suggestedBudget: "الميزانية المقترحة",
    reports: "بيـان الحجوزات والمناقلات والصرف",
    annualBudget: "ميزانية العام",
    reinforcementBudget: "ميزانية التعزيز",
  };
  // Toggle between Tables
  const showsuggestedBudget = () => setActiveTable("suggestedBudget");
  const showreports = () => setActiveTable("reports");
  const showannualBudget = () => setActiveTable("annualBudget");
  const showreinforcementBudget = () => setActiveTable("reinforcementBudget");
  return (
    <div className='mx-5'>
      <div className='d-flex justify-content-between my-3'>
        <div className=''>
          <p className='mediumFont fontSize-16 brandMain-color'>
            {values[activeTable]}
            <span className='gray400-color regularFont fontSize-12'>
              {" "}
              (
              {activeTable === "suggestedBudget"
                ? data.length
                : reportData.length}
              )
            </span>
          </p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='mx-2'>
            <button className='btn p-2'>
              <i className='bi bi-download text-info'></i>
            </button>
          </div>
          <div className='mx-2'>
            <button className='btn p-2'>
              <i className='bi bi-sliders d-inline-block rotate-icon secondary-color'></i>
            </button>
          </div>
          <div className='mx-2'>
            <button className='btn p-2'>
              <i className='bi bi-printer-fill brandMain-color '></i>
            </button>
          </div>
          <button
            className='btn brandMain-bgColor px-4 py-2'
            onClick={showsuggestedBudget}
          >
            <span className='text-white mediumFont fontSize-14 d-flex flex-no-wrap'>
              <i className='bi bi-plus'></i> إضافة
            </span>
          </button>
        </div>
      </div>
      <div id='join' className='d-flex justify-content-center'>
        {/* Toggle Buttons */}
        <div className='col-md-12'>
          <div className='d-flex justify-content-center mb-4 tabs regularFont'>
            <button
              className={`col-md-3 btn fontSize-14 ${
                activeTable === "suggestedBudget" ? "active" : ""
              } budget`}
              onClick={showsuggestedBudget}
            >
              الميزانية المقترحة
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeTable === "reports" ? "active " : ""
              } budget`}
              onClick={showreports}
            >
              بيـان الحجوزات والمناقلات والصرف
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeTable === "annualBudget" ? "active " : ""
              } budget `}
              onClick={showannualBudget}
            >
              ميزانية العام
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeTable === "reinforcementBudget" ? "active " : ""
              } budget`}
              onClick={showreinforcementBudget}
            >
              ميزانية التعزيز{" "}
            </button>
          </div>

          {/* Table Content */}
        </div>
      </div>
      <TableWithPagination
        data={activeTable == "suggestedBudget" ? data : reportData}
        columns={tableData[activeTable]}
        tableName={activeTable}
      ></TableWithPagination>
    </div>
  );
};
