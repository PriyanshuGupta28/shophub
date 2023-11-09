import React from "react";
import "./Card.css";
import { Link, Link as RouterLink } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CARTDATACONSTANT } from "../utility/ReduxConstants/CartConstant";

const Cards = (data) => {
  const cartData = useSelector((state) => state?.Cart?.cartData);
  const dispatch = useDispatch();
  let alreadyincart = false;
  console.log(cartData, "cartData");
  const handleAddToCart = (details) => {
    for (let i = 0; i <= cartData?.length - 1; i++) {
      if (cartData[i]?.id === details?.id) {
        alreadyincart = true;
        break;
      }
    }
    if (alreadyincart) {
      alert("Already in Cart");
    } else {
      alert("Added To The Cart");
      dispatch({
        type: CARTDATACONSTANT,
        payload: details,
      });
    }
  };
  return (
    <div className="cardRoot">
      <div className="cardUpper">
        <div>
          <RouterLink
            className="cardSingleDetails"
            to={`/shop/${data?.data?.id}`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="expand-arrows-alt"
              class="svg-inline--fa fa-expand-arrows-alt fa-w-14 fa-2x "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"
              ></path>
            </svg>
          </RouterLink>
        </div>
        <div className="cardCart" onClick={() => handleAddToCart(data?.data)}>
          <Link className="link" to={"/cart"}>
            <BsBagFill />
          </Link>
        </div>
      </div>
      <div className="cardImgDiv">
        <img
          className="cardImg"
          src={data?.data?.image}
          alt={data?.data?.title}
        />
      </div>
      <div className="cardName">{data?.data?.title}</div>
      <div className="cardPrice">$ {data?.data?.price}</div>
    </div>
  );
};

export default Cards;
