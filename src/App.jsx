import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
import SearchItem from "./component/SearchItem";
import Cart from "./component/Cart";
import { items } from "./component/Data";
import { useState } from "react";


function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar setData={setData} cart={cart} />
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} items={data} />} />
          <Route path="/products/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
