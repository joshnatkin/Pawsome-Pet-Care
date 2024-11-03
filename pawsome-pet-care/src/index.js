import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Supplies from "./pages/Supplies";
import Adopt from "./pages/Adopt";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="about" element={(<About />)} />
          <Route path="supplies" element={(<Supplies />)} />
          <Route path="adopt" element={(<Adopt />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
 <App />
);