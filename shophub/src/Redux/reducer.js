import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import CartReducer from "./CartReducer";

export const reducer = combineReducers({
  Home: HomeReducer,
  Cart: CartReducer,
});
