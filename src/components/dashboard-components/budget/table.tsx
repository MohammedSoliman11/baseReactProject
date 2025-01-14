import React from "react";
import Pagination from "../shared/pagination";
import { TableWithPaginationProps } from "../../../types";
import TableActionsComponent from "./table-actions";

const TableWithPagination: React.FC<TableWithPaginationProps> = ({
  data,
  columns,
  tableName,
  onPageChange: setCurrentPage,
  currentPage,
}) => {
  console.log("data : ", data);
  // console.log("current page table : ", currentPage);
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
                  style={col.field == "actions" ? { width: "15%" } : {}}
                  key={i}
                >
                  {col.field == "actions" ? (
                    <TableActionsComponent
                      tableName={tableName}
                      currentIndex={10 * currentPage - (10 - index)}
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
        totalPages={totalPages}
        onPageChange={(page: number) => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TableWithPagination;
