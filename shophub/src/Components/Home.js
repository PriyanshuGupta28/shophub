import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Cards";
import axios from "axios";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { HOMEDATACONSTANT } from "../utility/ReduxConstants/HomeConstants";

const Home = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.Home);
  console.log(productData, "ExampleData");

  useEffect(() => {
    // Define the API URL
    const apiUrl = "https://fakestoreapi.com/products";

    // Use Axios to make the API call
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response data here
        console.log(response?.data);
        dispatch({
          type: HOMEDATACONSTANT,
          payload: response?.data,
        });
      })
      .catch((error) => {
        // Handle any errors that may occur during the request
        console.error("An error occurred:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  console.log(productData, "productData");
  return (
    <div className="cardsRoot">
      {productData?.homeData?.map((e) => {
        return <Cards data={e} />;
      })}
    </div>
  );
};

export default Home;
