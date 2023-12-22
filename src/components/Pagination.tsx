interface Props {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, onPageChange, totalPage }: Props) => {
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
