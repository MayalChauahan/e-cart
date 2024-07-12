import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <div className="row my-5">
          {cart.length === 0 ? (
            <div className="text-center">
              <h2>Your Cart is Empty</h2>
              <Link to="/">
                <button className="btn btn-success">
                  Continue Shopping...
                </button>
              </Link>
            </div>
          ) : (
            cart.map((product, index) => (
              <div className="col-lg-12" key={index}>
                <div className="card mb-3" style={{ width: "700px" }}>
                  <div
                    className="row g-0"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt={product.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary me-4">
                          {product.price} ₹
                        </button>
                        <button className="btn btn-success">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div>
        {cart.length != 0 && (
          <div className="container text-center mb-5">
            <button className="btn btn-warning me-4">Check Out</button>
            <button onClick={() => setCart("")} className="btn btn-danger">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
