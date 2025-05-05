import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { Button } from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <h2>My Cart</h2>
      {cartItems.length > 0 && (
        <div className="d-flex justify-content-end">
          <h3>
            Total: $$
            {cartItems.reduce((total, productItem) => {
              return total + productItem.price * productItem.quantity;
            }, 0).toFixed(2)}
          </h3>
        </div>
      )}
      <hr />

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((productItem, index) => (
          <div
            key={index}
            className="card mb-3 bg-light"
            style={{ borderRadius: "8px" }}
          >
            <div className="row g-0">
              <div className="col-12 col-md-3">
                <img
                  src={productItem.images[0]}
                  className="img-fluid rounded-start"
                  alt={productItem.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
              </div>
              <div className="col-12 col-md-9">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-md-6">
                      <h5 className="card-title">{productItem.title}</h5>
                      <p className="card-text">{productItem.shippingInformation}</p>
                    </div>

                    <div className="col-12 col-md-3">
                      <p className="card-text">
                        <strong>Quantity: {productItem.quantity}</strong>
                      </p>
                      <p className="card-text">
                        <strong>
                          Price: $
                          {(productItem.price * productItem.quantity).toFixed(2)}
                        </strong>
                      </p>
                    </div>

                    <div className="col-12 col-md-4 d-flex justify-content-between gap-4 mt-4">
                      <div className="d-flex align-items-center">
                        <Button
                          className="px-3"
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            dispatch(decreaseQuantity(productItem.id))
                          }
                          style={{ fontWeight: "bold" }}
                        >
                          -
                        </Button>
                        <span className="mx-3">{productItem.quantity}</span>
                        <Button
                          className="px-3"
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            dispatch(increaseQuantity(productItem.id))
                          }
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        className="btn btn-danger py-1 px-4"
                        onClick={() => dispatch(removeItem(productItem.id))}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Cart;
