import React, { useState } from "react";
import { IPaginationProps } from "../../../types";
import "../../../styles/dashboard-styles/shared/pagination.css";

const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [page, setPage] = useState(currentPage || 1);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = totalPages; i >= 1; i--) {
      if (i === 1 || i === totalPages || (i >= page - 3 && i <= page + 3)) {
        pages.push(
          <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
            <button className='page-link' onClick={() => handlePageChange(i)}>
              {i}
            </button>
          </li>
        );
      } else if (i === page - 4 || i === page + 4) {
        pages.push(
          <li key={i} className='page-item'>
            <span className='page-link'>...</span>
          </li>
        );
      }
    }
    return pages;
  };

  return (
    <div>
      <ul className='pagination justify-content-center align-items-center'>
        {/* Next Arrow */}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button
            className='pagination-button-right'
            onClick={() => handlePageChange(page + 1)}
          ></button>
        </li>
        {renderPageNumbers()}
        {/* Previous Arrow */}
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className='pagination-button-left'
            onClick={() => handlePageChange(page - 1)}
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
