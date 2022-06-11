import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">    
      <h1>General header</h1>
      <Link to="/">Home</Link>
      <Link to="/hello">Hello</Link>
      <Routes>
        <Route path="/"  element={<Counter />} />
        <Route path="/hello"  element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
