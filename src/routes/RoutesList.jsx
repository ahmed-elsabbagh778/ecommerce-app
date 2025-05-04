import LayoutWithHeader from "../components/LayoutWithHeader";
import ProductsList from "../pages/ProductsList";
import NotFound from "../pages/NotFound"
import { Route, Routes } from "react-router";
import ProductsDetails from "../pages/ProductDetails";
import Cart from "../components/Cart";


export default function RoutesList() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product-details/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
