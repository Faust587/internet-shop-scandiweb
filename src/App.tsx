import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import CategoryPage from "./UI/pages/CategoryPage";
import ProductPage from "./UI/pages/ProductPage";
import MainLayout from "./UI/layout/MainLayout";
import CartPage from "./UI/pages/CartPage";
import SuccessOrderPage from "./UI/pages/SuccessOrderPage";

function App() {
  return (
    <BrowserRouter basename="/internet-shop-scandiweb">
      <Routes>
        <Route path="/" element={<MainLayout><></></MainLayout>} />
        <Route path="/success-order" element={<SuccessOrderPage />} />
        <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
        <Route path="category/:categoryName" element={<MainLayout><CategoryPage /></MainLayout>} />
        <Route path="category/:categoryName/product/:productId" element={<MainLayout><ProductPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
