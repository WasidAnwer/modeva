
import React from "react";
import Modeva from "./screen/Modeva";
import Home from "./screen/Home";
import Add from "./screen/products/Add";
import List from "./screen/products/List";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Modeva />}>
          <Route index element={<Home />} />
          <Route path="/AddProduct" element={<Add />} />
          <Route path="/ProductList" element={<List />} />
        </Route>
        <Route path="404" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
