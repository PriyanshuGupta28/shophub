import {
  HOMEDATACONSTANT,
  HOMESINGLEDATACONSTANT,
} from "../utility/ReduxConstants/HomeConstants";

const InitState = {
  homeData: [],
  homeSingleData: [],
};
export default (state = InitState, action) => {
  switch (action.type) {
    case HOMEDATACONSTANT: {
      return {
        ...state,
        homeData: action.payload ?? [],
      };
    }
    case HOMESINGLEDATACONSTANT: {
      return {
        ...state,
        homeSingleData: action.payload ?? [],
      };
    }
    default:
      return state;
  }
};
