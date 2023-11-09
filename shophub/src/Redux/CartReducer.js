import {
  CARTDATACONSTANT,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_FROM_CART,
} from "../utility/ReduxConstants/CartConstant";
const InitaState = {
  cartData: [],
};

export default (state = InitaState, action) => {
  switch (action.type) {
    case CARTDATACONSTANT: {
      return {
        ...state,
        cartData: [...state?.cartData, action.payload ?? []],
      };
    }
    case REMOVE_FROM_CART:
      // Remove the item from the cart based on its ID
      const updatedCartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartData: updatedCartData,
      };
    case DECREMENT_ITEM:
      // Decrement the quantity of an item in the cart based on its ID
      const updatedCartDataDecremented = state.cartData.map((item) => {
        if (item.id === action.payload) {
          // Assuming you have a "quantity" property for each item
          item.quantity = Math.max((item.quantity || 1) - 1, 1); // Ensure quantity does not go below 1
        }
        return item;
      });

      return {
        ...state,
        cartData: updatedCartDataDecremented,
      };

    case INCREMENT_ITEM:
      // Increment the quantity of an item in the cart based on its ID
      const updatedCartDataIncremented = state.cartData.map((item) => {
        if (item.id === action.payload) {
          // Assuming you have a "quantity" property for each item
          item.quantity = (item.quantity || 1) + 1;
        }
        return item;
      });

      return {
        ...state,
        cartData: updatedCartDataIncremented,
      };

    default:
      return state;
  }
};
