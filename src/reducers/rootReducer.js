import {
  FETCH_PRODUCTS,
  SET_MODAL_PRODUCT,
  UNSET_MODAL_PRODUCT,
} from "../types";

const initState = {
  products: [],
  modalProduct: null,
};

const rootReducer = (state = initState, { type, payload }) => {
  let newModalProduct;
  switch (type) {
    case FETCH_PRODUCTS:
      let newData = payload;
      console.log(newData);
      return {
        ...state,
        products: newData,
      };
    case SET_MODAL_PRODUCT:
      newModalProduct = payload;
      return {
        ...state,
        modalProduct: newModalProduct,
      };
    case UNSET_MODAL_PRODUCT:
      return {
        ...state,
        modalProduct: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
