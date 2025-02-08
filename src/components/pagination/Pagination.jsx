import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

import { PaginationControls } from "./styles";

const generatePaginationNumbers = (currentPage, totalPages) => {
  const paginationNumbers = [1];

  if (currentPage > 3) {
    paginationNumbers.push("...");
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(currentPage + 1, totalPages - 1);
    i++
  ) {
    paginationNumbers.push(i);
  }

  if (currentPage < totalPages - 2) {
    paginationNumbers.push("...");
  }

  if (totalPages > 1) {
    paginationNumbers.push(totalPages);
  }

  return paginationNumbers;
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const paginationNumbers = generatePaginationNumbers(currentPage, totalPages);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    if (currentPage !== pageNumber) {
      onPageChange(pageNumber);
    }
  };

  return (
    <PaginationControls>
      <Button
        className="pagination-button"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft fontSize="small" />
      </Button>
      {paginationNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="pagination-ellipsis">
            {number}
          </span>
        ) : (
          <Button
            key={index}
            className={`pagination-button ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => handlePageClick(number)}
            disabled={currentPage === number}
          >
            {number}
          </Button>
        )
      )}
      <Button
        className="pagination-button"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronRight fontSize="small" />
      </Button>
    </PaginationControls>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
