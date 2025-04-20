
import React from "react";
import Markup from "./screen/Markup";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Header from "./components/Header";
import Add from "./screen/products/Add";
import ProductList from "./screen/products/productList";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <Routes>
        <Route path="/" element={<Markup />}>
          <Route index element={<Home />} />
          <Route path="/AddProduct" element={<Add />} />
          <Route path="/ProductList" element={<ProductList />} />
          {/* <Route path="*" element={<Page />} /> */}
        </Route>
        <Route path="404" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
