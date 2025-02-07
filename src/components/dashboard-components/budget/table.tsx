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
  totalPages
}) => {

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
          {data && data.map((row, index) => (
            //console.log("row : ", row),
            <tr key={index} id={`row-${index}`}>
              {columns.map((col, i) => (
                <td
                  style={col.field == "actions" ? { width: "15%" } : {}}
                  key={i}
                >
                  {col.field == "actions" ? (
                    <TableActionsComponent
                      tableName={tableName}
                      currentId={row.id}
                      index={index}
                      data= {row}
                    />
                  ) : (                     
                    (col.field === "doorLookUp" || col.field === "sectionLookUp") && row[col.field] 
                    ? row[col.field].value 
                    : row[col.field] ?? "-"

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
