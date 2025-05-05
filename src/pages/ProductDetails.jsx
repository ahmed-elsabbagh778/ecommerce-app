import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { axiosInstance } from "../apis/config";
import { Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductsDetails = () => {
  const [productItem, setProductItem] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(productItem));
    navigate(`/Cart`);
  };

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => setProductItem(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  if (!productItem) {
    return <p>Loading...</p>;
  }

  const isAvailable = productItem.availabilityStatus === "In Stock";

  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
      <div className="row g-0">
        <div className="col-md-5 d-flex align-items-center">
          <img
            src={productItem.images[0]}
            className="img-fluid rounded-start p-3"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            alt={productItem.title}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body d-flex flex-column h-100">
            <h3 className="card-title fw-bold">{productItem.title}</h3>
            <p className="card-text">{productItem.description}</p>
            <p className="card-text">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  style={{
                    color:
                      index < Math.round(productItem.rating)
                        ? "#FFD700"
                        : "#e4e5e9",
                  }}
                >
                  ★
                </span>
              ))}
            </p>

            <h4 className="fw-bold mt-2">${productItem.price}</h4>

            <Badge bg={isAvailable ? "success" : "danger"} className="my-2 me-auto">
              {productItem.availabilityStatus}
            </Badge>

            <div className="mt-3">
              <p className="mb-1">More Information:</p>
              <Badge bg="warning" className="my-1 px-3 py-2 me-2">
                {productItem.category}
              </Badge>
              <Badge bg="warning" className="my-1 px-3 py-2">
                {productItem.brand}
              </Badge>
            </div>

            <p className="mt-3">Only {productItem.stock} items left!</p>

            <div className="mt-auto d-flex flex-wrap gap-3">
              <Button variant="success" className="flex-grow-1 rounded-pill">
                Buy Now
              </Button>
              <Button
                onClick={handleClick}
                variant="outline-dark"
                className="flex-grow-1 rounded-pill"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
