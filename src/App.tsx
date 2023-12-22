import { useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get("page")) || 1;
  const handlePageChange = (page: number) => {
    navigate(`/?page=${page}`);
  };

  useEffect(() => {
    console.log("Fetch()!!");
  }, [page]);

  return (
    <>
      <Pagination page={page} totalPage={10} onPageChange={handlePageChange} />
    </>
  );
}

export default App;
