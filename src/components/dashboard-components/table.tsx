import React, { useState } from "react";
import Pagination from "../pagination";
import { TableWithPaginationProps } from "../../types";
import TableActionsComponent from "./table-actions";

const TableWithPagination: React.FC<TableWithPaginationProps> = ({
  data,
  columns,
  // tableName,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className='table-responsive regularFont fontSize-12'>
      <table className='table text-center'>
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
                <td key={i}>
                  {col.field == "actions" ? (
                    <TableActionsComponent />
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
