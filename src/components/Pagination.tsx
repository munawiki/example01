import React from "react";

interface Props {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, onPageChange, totalPage }: Props) => {
  const pages = [...Array(totalPage).keys()].map((i) => i + 1);

  return (
    <div>
      {pages.map((p) => (
        <button key={p} onClick={() => onPageChange(p)} disabled={p === page}>
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
