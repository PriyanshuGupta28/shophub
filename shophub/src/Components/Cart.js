import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import "./Cart.css";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from "../Actions/CartAction";

const Cart = () => {
  const cartData = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Function to increment the quantity of an item in the cart
  const handleIncrementItem = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  // Function to decrement the quantity of an item in the cart
  const handleDecrementItem = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  // Calculate the total price
  const total = cartData.cartData.reduce((acc, data) => {
    return acc + data.price * (data.quantity || 1); // Assuming you have a "quantity" property for each item
  }, 0);

  return (
    <div className="cartRoot">
      <div className="cartTotal">
        Total Price: $ {total.toFixed(2)}{" "}
        {/* Display total price with 2 decimal places */}
      </div>
      <div className="mainContainer">
        {cartData?.cartData?.map((data) => {
          return (
            <div className="cartContainer">
              <div className="cartUpper">
                <div>
                  <RouterLink
                    className="cartSingleDetails"
                    to={`/shop/${data?.id}`}
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
              </div>
              <div className="cartImgDiv">
                <img className="cartImg" src={data?.image} alt={data?.title} />
              </div>
              <div className="cartName">{data?.title}</div>
              <div className="cartPrice">$ {data?.price}</div>
              <div className="cartButtons">
                <div>
                  <button onClick={() => handleRemoveFromCart(data.id)}>
                    Remove
                  </button>
                </div>
                <div>
                  <button onClick={() => handleIncrementItem(data.id)}>
                    +1
                  </button>
                </div>
                <div>
                  <button onClick={() => handleDecrementItem(data.id)}>
                    -1
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
