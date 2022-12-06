import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PizzaMore from "./Pages/PizzaMore";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import "./scss/app.scss";

function App() {

  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/p-uno/:id" element={<PizzaMore/>} />
            {/* <Route path="*" element={<Notfound />} /> */}
          </Routes>
        </div>
    </div>
  );
}
export default App;
