import { axiosInstance } from "../apis/config";
import Cards from "./Card";

const ProductsList = () => {
  [products, setCard] = useState([]);

  axiosInstance
    .get("/products")
    .then((res) => setCard(res.data.products))
    .catch((err) => console.log(err));
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-4" key={product.id}>
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
