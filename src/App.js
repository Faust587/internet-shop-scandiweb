import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import CategoryPage from "./UI/pages/CategoryPage";
import ProductPage from "./UI/pages/ProductPage";
import MainLayout from "./UI/layout/MainLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="category/:categoryName" element={<MainLayout><CategoryPage /></MainLayout>} />
        <Route path="category/:categoryName/product/:productId" element={<MainLayout><ProductPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
