import React from "react";
import { PaginationProps } from "../types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pages = [...Array(totalPages).keys()].map((x) => x + 1).reverse();

  return (
    <nav>
      <ul className='pagination justify-content-center '>
        <li className={` ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className='page-link'
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &laquo;
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button
              className='page-link'
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className='page-link'
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
