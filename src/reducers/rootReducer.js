import {
  FETCH_PRODUCTS,
  SET_MODAL_PRODUCT,
  UNSET_MODAL_PRODUCT,
  SIZE_FILTER,
  ORDER_FILTER,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
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
  let newModalProduct, product;
  let newCart;
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
    case ADD_TO_CART:
      newCart = state.cart.slice();
      product = payload;
      let isPresent = false;
      newCart.forEach((e) => {
        if (e._id === product._id) {
          e.count++;
          isPresent = true;
        }
      });

      if (!isPresent) {
        newCart.push({ ...product, count: 1 });
      }
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_CART_ITEM:
      product = payload;
      newCart = state.cart.filter((e) => e._id !== product._id);
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default rootReducer;

// addToCart = (product) => {
// const newCart = this.state.cart.slice();
// let isPresent = false;

// newCart.forEach((e) => {
//   if (e._id === product._id) {
//     e.count++;
//     isPresent = true;
//   }
// });

// if (!isPresent) {
//   newCart.push({ ...product, count: 1 });
// }

// this.setState({ cart: newCart });
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };
