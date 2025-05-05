import LayoutWithHeader from "../components/LayoutWithHeader";
// import ProductsList from "../pages/ProductsList";
// import NotFound from "../pages/NotFound"
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
// import ProductsDetails from "../pages/ProductDetails";
// import Cart from "../components/Cart";
// import Register from "../pages/Register";


// const LayoutWithHeader = lazy(() => import("../components/LayoutWithHeader"));
const ProductsList = lazy(() => import("../pages/ProductsList"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProductsDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../components/Cart"));
const Register = lazy(() => import("../pages/Register"));

export default function RoutesList() {
  return (
    <Suspense fallback={<div className="spinner-border top-50 start-50 position-absolute">.</div>}>
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product-details/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}
