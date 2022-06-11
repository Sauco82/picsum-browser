import React from "react";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./css/index.css";
import Gallery from "./pages/Gallery/Gallery";
import ImageEditor from "./pages/ImageEditor/ImageEditor";

export default function App(){
  return(
    
    <Routes>
      <Route path="/" element={<Outlet />} >
        <Route index element={<Gallery />} />          
        <Route path=":id" element={<ImageEditor />} />          
      </Route>
    </Routes>
    
  );
}