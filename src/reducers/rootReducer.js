import {
  FETCH_PRODUCTS,
  SET_MODAL_PRODUCT,
  UNSET_MODAL_PRODUCT,
  SIZE_FILTER,
  ORDER_FILTER,
} from "../types";

const initState = {
  products: [],
  filterProducts: [],
  cart: [],
  modalProduct: null,
  sizeFilter: "",
  orderFilter: "Latest",
};

const rootReducer = (state = initState, { type, payload }) => {
  let newModalProduct;
  switch (type) {
    case FETCH_PRODUCTS:
      let newData = payload;
      // console.log(newData);
      return {
        ...state,
        products: newData,
        filterProducts: newData,
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
    case SIZE_FILTER:
      if (payload === "") {
        return {
          ...state,
          filterProducts: state.products,
          sizeFilter: payload,
        };
      } else {
        let newProducts = state.products.filter(
          (e) => e.availableSizes.indexOf(payload) >= 0
        );
        return {
          ...state,
          filterProducts: newProducts,
          sizeFilter: payload,
        };
      }
    case ORDER_FILTER:
      let newProducts = state.filterProducts
        .slice()
        .sort((a, b) =>
          payload === "highest"
            ? a.price <= b.price
              ? 1
              : -1
            : payload === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        );
      return {
        ...state,
        filterProducts: newProducts,
        orderFilter: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
