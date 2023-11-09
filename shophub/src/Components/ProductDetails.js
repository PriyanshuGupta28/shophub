import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { HOMESINGLEDATACONSTANT } from "../utility/ReduxConstants/HomeConstants";

const ProductDetails = () => {
  const disptach = useDispatch();
  const productData = useSelector((state) => state.Home?.homeSingleData);

  const { id } = useParams();
  useEffect(() => {
    // Define the API URL
    const apiUrl = `https://fakestoreapi.com/products/${id}`;

    // Use Axios to make the API call
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response data here
        console.log(response?.data);
        disptach({
          type: HOMESINGLEDATACONSTANT,
          payload: response?.data,
        });
      })
      .catch((error) => {
        // Handle any errors that may occur during the request
        console.error("An error occurred:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div key={productData?.id} className="productRoot">
      <div>
        <img
          className="productImg"
          src={productData?.image}
          alt={productData?.title}
        />
      </div>
      <div className="productText">Title : - {productData?.title}</div>
      <div className="productText">
        Description : - {productData?.description}
      </div>
      <div className="productText">Category : - {productData?.category}</div>
      <div className="productText">Category: - {productData?.category}</div>
      <div className="productText">
        Rating : - {productData?.rating?.rate} ({productData?.rating?.count})
      </div>
      <div className="productText">Price: - {productData?.price}</div>
      <div className="actionButton">
        <button>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
