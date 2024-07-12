import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct);
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter(
      (p) => p.category === product?.category
    );
    // console.log("Related Product = ", relatedProduct);
    setRelatedProduct(relatedProduct);
  }, [id, product?.category]);

  // add to cart
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };

    setCart([...cart, obj]);
    console.log("Cart Element = ", cart);

    toast.success("Item added on Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container">
        <div className="product-single-item">
          <div className="img">
            <img src={product.imgSrc} alt={product.title} />
          </div>
          <div className="text-center">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">{product.description} </p>
            <button className="btn btn-primary me-4">{product.price} ₹</button>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
              className="btn btn-success"
            >
              Add To Cart
            </button>
          </div>
        </div>

        <h2 className="text-center">Related Products</h2>
        <Products cart={cart} setCart={setCart} items={relatedProduct} />
      </div>
    </>
  );
};

export default ProductDetail;
