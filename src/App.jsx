import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";

import ProductsProvider from "./Contexts/ProductsContext";
import CartProvider from "./Contexts/CartContext";
import Layout from "./Layout/Layout";

function App() {
  return (
    <CartProvider>
      <Layout>
        <ProductsProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductsProvider>
      </Layout>
    </CartProvider>
  );
}

export default App;
