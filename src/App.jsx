import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/404";
// import ProductProvider from "./context/ProductContext";
// import CartProvider from "./context/CartContext";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <>
      {/* <CartProvider>
        <ProductProvider> */}
          <Layout>
            <Routes>
              <Route index element={<Navigate to="products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        {/* </ProductProvider>
      </CartProvider> */}
    </>
  );
}

export default App;
