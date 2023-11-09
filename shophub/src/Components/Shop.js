import React from "react";
import { useSelector } from "react-redux";

const Shop = () => {
  const ExampleData = useSelector((state) => state.Home);
  console.log(ExampleData, "ExampleData");
  return <div>Shop</div>;
};

export default Shop;
