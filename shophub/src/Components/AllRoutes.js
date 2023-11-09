import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Shop from "./Shop";
import MyAccount from "./MyAccount";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shop/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
