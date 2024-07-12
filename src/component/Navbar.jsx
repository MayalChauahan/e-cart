import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsCart4 } from "react-icons/bs";

const Navbar = ({ setData, cart }) => {
  // console.log(useLocation());
  const location = useLocation();

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    // console.log(element);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price <= price);
    // console.log(element);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to="/" className="brand">
            E-Commerce
          </Link>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Products"
            />
          </form>
          <Link to="/cart" className="cart">
            <button type="button" className="btn btn-trasperant position-relative">
              <BsCart4 />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter By {"->"}</div>
            <Link onClick={() => setData(items)} className="items">
              No Filter
            </Link>
            <Link onClick={() => filterByCategory("mobiles")} className="items">
              Mobile
            </Link>
            <Link onClick={() => filterByCategory("laptops")} className="items">
              Laptop
            </Link>
            <Link onClick={() => filterByCategory("tablets")} className="items">
              Tablet
            </Link>
            <Link onClick={() => filterByPrice(29999)} className="items">
              {"<="}29999
            </Link>
            <Link onClick={() => filterByPrice(49999)} className="items">
              {"<="}49999
            </Link>
            <Link onClick={() => filterByPrice(69999)} className="items">
              {"<="}69999
            </Link>
            <Link onClick={() => filterByPrice(89999)} className="items">
              {"<="}89999
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
