import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data.jsx";
import Products from "./Products.jsx";

const SearchItem = ({cart, setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      // console.log(data);
      setFilterData(data);
    };
    filteredData();
  }, [term]);

  return (
    <>
      <Products cart={cart} setCart={setCart} items={filterData} />
    </>
  );
};

export default SearchItem;
