import React, { useState } from "react";
import Pagination from "../pagination";
import { TableWithPaginationProps } from "../../types";
import TableActionsComponent from "./table-actions";

const TableWithPagination: React.FC<TableWithPaginationProps> = ({
  data,
  columns,
  tableName,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className='regularFont fontSize-12'>
      <table className='table table-responsive text-center'>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {columns.map((col, i) => (
                <td
                  style={
                    tableName === "reinforcementBudget" ? { width: "20%" } : {}
                  }
                  key={i}
                >
                  {col.field == "actions" ? (
                    <TableActionsComponent
                      show={tableName === "reinforcementBudget" ? false : true}
                    />
                  ) : (
                    row[col.field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TableWithPagination;
