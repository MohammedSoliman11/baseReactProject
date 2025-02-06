import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import TableWithPagination from "./table";
// import { mainData } from "../../../store/data";
import { tableHeaders } from "../../../store/table-headers/table-headers";
const tableData = tableHeaders;
import "../../../styles/dashboard-styles/budget/table-tabs.css";
import ShowToastComponent from "./download-notification";
import FilterModalComponent from "./filter-popup";

import routes from "../../../Routes/appRoutes";
import { getAllProposedBudget } from "../../../api/dashboard/budget/suggested-budget/GetAllProposedBudget"; // Import the API function
import {GetAllTransferBudget} from '../../../api/dashboard/budget/reports/GetAllTransferBudget'; // Import the API function
import { SuggestedBudgetQueryParams } from '../../../api/dashboard/budget/suggested-budget/types'; // Import the API types

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableTabs: React.FC<any> = (props) => {
  const navigate = useNavigate();
  
  // get SuggestedBudgetQueryParams from this page
  const [currentPage, setCurrentPage] = useState(1);
  const queryParams: SuggestedBudgetQueryParams = {
    pageNumber: currentPage,
    pageSize: 10,
  };
  const [Data, setData] = useState({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 });
  // call getAllProposedBudget api
  useEffect(() => {
    getAllProposedBudget(queryParams).then((data) => {
      setData(data);
    });
  }, [currentPage]);
  

  const [activeTable, setActiveTable] = useState(props.TableName);
  const showsuggestedBudget = () => {
    setData({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 }); // Reset Data
    setActiveTable("suggestedBudget");
    setCurrentPage(1);
  };
  const showreports = () => {
    setData({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 }); // Reset Data
    setActiveTable("reports");
    setCurrentPage(1);
  };
  const showannualBudget = () => {
    setData({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 }); // Reset Data
    setActiveTable("annualBudget");
    setCurrentPage(1);
  };
  const showreinforcementBudget = () => {
    setData({ isDone: false, totalCount: 0, data: [], message: "", statusCode: 0, outId: 0 }); // Reset Data
    setActiveTable("reinforcementBudget");
    setCurrentPage(1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: any = {
    suggestedBudget: "الميزانية المقترحة",
    reports: "بيـان الحجوزات والمناقلات والصرف",
    annualBudget: "ميزانية العام",
    reinforcementBudget: "ميزانية التعزيز",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const route: any = {
    suggestedBudget: routes.ADDNEWITEM_BUDGET_ROUTE,
    reports: routes.ADDNEWITEM_REPORTS_ROUTE,
    annualBudget: routes.ADDNEWITEM_ANNUALBUDGET_ROUTE,
    reinforcementBudget: routes.ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE,
  };
  return (
    <div className='mt-4 px-5'>
      <div className='d-flex justify-content-between my-3'>
        <div className=''>
          <p className='mediumFont fontSize-16 brandMain-color'>
            {values[activeTable]}
            <span className='Gray400-color regularFont fontSize-12'>
              {" "}
              ( {Data.totalCount} )
            </span>
          </p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='mx-2'>
            <ShowToastComponent id={0}></ShowToastComponent>
          </div>
          {
            <div className='mx-2'>
              <FilterModalComponent
                tableName={activeTable}
              ></FilterModalComponent>
            </div>
          }
          <div className='mx-2'>
            <button className='btn btn-light p-2'>
              <i className='bi bi-printer-fill brandMain-color '></i>
            </button>
          </div>
          <button
            onClick={() => navigate(route[activeTable])}
            className='btn btn-light brandMain-bgColor px-4 py-2'
          >
            <span className='text-white mediumFont fontSize-14 d-flex flex-no-wrap'>
              <i className='bi bi-plus'></i> إضافة
            </span>
          </button>
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
              onClick={() => {
                getAllProposedBudget(queryParams).then((data) => {
                  setData(data);
                  //console.log("Proposed Budget Data: ", data);
                });
                setTimeout(() => {
                  navigate(routes.SUGGESTEDTABLE_ROUTE);
                }, 1000); 
                showsuggestedBudget();
              }}
            >
              الميزانية المقترحة
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeTable === "reports" ? "active " : ""
              } budget`}
              onClick={() => {
                GetAllTransferBudget(queryParams).then((data) => {
                  setData(data);
                  //console.log("Proposed Budget Data: ", data);
                });
                navigate(routes.REPORTTABLE_ROUTE);
                showreports();
              }}
            >
              بيـان الحجوزات والمناقلات والصرف
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeTable === "annualBudget" ? "active " : ""
              } budget `}
              onClick={() => {
                navigate(routes.ANNUALTABLE_ROUTE);
                showannualBudget();
              }}
            >
              ميزانية العام
            </button>
            <button
              className={`col-md-3 btn  fontSize-14 ${
                activeTable === "reinforcementBudget" ? "active " : ""
              } budget`}
              onClick={() => {
                navigate(routes.REINFORCEMENTTABLE_ROUTE);
                showreinforcementBudget();
              }}
            >
              ميزانية التعزيز{" "}
            </button>
          </div>

          {/* Table Content */}
        </div>
      </div>

      <TableWithPagination
        data = { Data.data }
        columns = { tableData[activeTable] }
        tableName = { activeTable }
        onPageChange = { (page: number) => setCurrentPage(page) }
        currentPage = {currentPage}
        totalPages = {Number.parseInt(((Data.totalCount + (queryParams.pageSize ?? 10) - 1) / (queryParams.pageSize ?? 10)).toString())}
      ></TableWithPagination>
    </div>
  );
};
