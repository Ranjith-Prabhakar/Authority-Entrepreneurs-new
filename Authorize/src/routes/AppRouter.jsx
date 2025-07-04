/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import AppLayout from "../layout/AppLayout";
import { Toaster } from "react-hot-toast";
import HomePage from "../pages/HomePage";
import useProductsSetter from "../hooks/setProducts";
import ProductPage from "../pages/ProductPage";
import ProductPageLayout from "../layout/ProductPageLayout";

export default function () {
  useProductsSetter();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<ProductPageLayout />}>
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </Suspense>
    </BrowserRouter>
  );
}
