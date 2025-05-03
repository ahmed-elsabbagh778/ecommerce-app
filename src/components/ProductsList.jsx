
import { useState } from "react";
import { axiosInstance } from "../apis/config";
import Cards from "./Card";

const ProductsList = () => {
  const [products, setCard] = useState([]);

  axiosInstance
    .get("/products")
    .then((res) => setCard(res.data.products))
    .catch((err) => console.log(err));
  return (
    <>
      <div className="container">
        <div className="row g-4 m-3">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Cards productItem={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
