import {
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_FROM_CART,
} from "../utility/ReduxConstants/CartConstant";

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const incrementItem = (itemId) => {
  return {
    type: INCREMENT_ITEM,
    payload: itemId,
  };
};

export const decrementItem = (itemId) => {
  return {
    type: DECREMENT_ITEM,
    payload: itemId,
  };
};
