import { useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const handlePageChange = (newPage: number) => {
    navigate(`/?page=${newPage}`);
  };

  useEffect(() => {
    console.log("Data fetch for page", page);
    // Place your data fetch logic here
  }, [page]);

  return (
    <Pagination
      currentPage={page}
      totalPage={10}
      onPageChange={handlePageChange}
    />
  );
}

export default App;
