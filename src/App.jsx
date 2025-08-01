import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";

import ProductsProvider from "./Contexts/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
