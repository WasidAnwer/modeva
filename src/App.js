// import { useState, useEffect } from "react";
import React from "react";
import Markup from "./screen/Markup";
import Home from "./screen/Home";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Markup />}>
          <Route index element={<Home />} />
          {/* <Route path="*" element={<h1>404 Error</h1>} /> */}
          {/* <Route path="*" element={<Page />} /> */}
        </Route>
        <Route path="404" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
