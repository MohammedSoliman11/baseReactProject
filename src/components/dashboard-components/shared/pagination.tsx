import React from "react";
import { IPaginationProps } from "../../../types";
import "../../../styles/dashboard-styles/shared/pagination.css";

const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    console.log("current page pagination : ", currentPage);
    const pages = [];
    for (let i = totalPages; i >= 1; i--) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 3 && i <= currentPage + 3)
      ) {
        pages.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <button className='page-link' onClick={() => handlePageChange(i)}>
              {i}
            </button>
          </li>
        );
      } else if (i === currentPage - 4 || i === currentPage + 4) {
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
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className='pagination-button-right'
            onClick={() => handlePageChange(currentPage + 1)}
          ></button>
        </li>
        {renderPageNumbers()}
        {/* Previous Arrow */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className='pagination-button-left'
            onClick={() => handlePageChange(currentPage - 1)}
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
