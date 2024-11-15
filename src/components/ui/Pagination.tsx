import React from "react";

interface PaginationProps {
  page: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  handlePrevClick,
  handleNextClick,
}) => (
  <div className="flex justify-center items-center my-4">
    <button
      onClick={handlePrevClick}
      disabled={page === 1}
      className="px-4 py-2 mr-4 bg-gray-200 rounded"
    >
      Previous
    </button>
    <span className="text-xl">Page {page}</span>
    <button
      onClick={handleNextClick}
      className="px-4 py-2 ml-4 bg-gray-200 rounded"
    >
      Next
    </button>
  </div>
);

export default Pagination;
