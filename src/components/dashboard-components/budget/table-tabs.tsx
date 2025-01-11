import TableWithPagination from "./table";
import { data, reportData } from "../../../store/data";
import { tableHeaders } from "../../../store/table-headers/table-headers";
import { useState } from "react";
const tableData = tableHeaders;
import "../../../styles/dashboard-styles/budget/table-tabs.css";
import ShowToastComponent from "./download-notification";
import FilterModalComponent from "./filter-popup";
import { Link } from "react-router-dom";

import routes from "../../../Routes/appRoutes";

export const TableTabs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTable, setActiveTable] = useState("suggestedBudget"); // 'join' or 'service'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: any = {
    suggestedBudget: "الميزانية المقترحة",
    reports: "بيـان الحجوزات والمناقلات والصرف",
    annualBudget: "ميزانية العام",
    reinforcementBudget: "ميزانية التعزيز",
  };

  console.log("current page table tabe: ", currentPage);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const route: any = {
    suggestedBudget: routes.ADDNEWITEM_BUDGET_ROUTE,
    reports: routes.ADDNEWITEM_REPORTS_ROUTE,
    annualBudget: routes.ADDNEWITEM_ANNUALBUDGET_ROUTE,
    reinforcementBudget: routes.ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE,
  };
  // Toggle between Tables
  const showsuggestedBudget = () => {
    setActiveTable("suggestedBudget");
    setCurrentPage(1);
  };
  const showreports = () => {
    setActiveTable("reports");
    setCurrentPage(1);
  };
  const showannualBudget = () => {
    setActiveTable("annualBudget");
    setCurrentPage(1);
  };
  const showreinforcementBudget = () => {
    setActiveTable("reinforcementBudget");
    setCurrentPage(1);
  };
  return (
    <div className='mx-5 mt-4'>
      <div className='d-flex justify-content-between my-3'>
        <div className=''>
          <p className='mediumFont fontSize-16 brandMain-color'>
            {values[activeTable]}
            <span className='Gray400-color regularFont fontSize-12'>
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
            <ShowToastComponent></ShowToastComponent>
          </div>
          {activeTable !== "reports" && (
            <div className='mx-2'>
              <FilterModalComponent
                tableName={activeTable}
              ></FilterModalComponent>
            </div>
          )}
          <div className='mx-2'>
            <button className='btn btn-light p-2'>
              <i className='bi bi-printer-fill brandMain-color '></i>
            </button>
          </div>
          <Link
            to={route[activeTable]}
            className='btn btn-light brandMain-bgColor px-4 py-2'
          >
            <span className='text-white mediumFont fontSize-14 d-flex flex-no-wrap'>
              <i className='bi bi-plus'></i> إضافة
            </span>
          </Link>
        </div>
      </div>

      <div id='' className='d-flex justify-content-center'>
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
        onPageChange={(page: number) => setCurrentPage(page)}
        currentPage={currentPage}
      ></TableWithPagination>
    </div>
  );
};
