import React, { Component } from "react";
import { connect } from "react-redux";
import "./bootstrap.min.css";
import "./App.css";

// import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import { ORDER_FILTER, SIZE_FILTER } from "./types";

class App extends Component {
  // addToCart = (product) => {
  //   const newCart = this.state.cart.slice();
  //   let isPresent = false;

  //   newCart.forEach((e) => {
  //     if (e._id === product._id) {
  //       e.count++;
  //       isPresent = true;
  //     }
  //   });

  //   if (!isPresent) {
  //     newCart.push({ ...product, count: 1 });
  //   }

  //   this.setState({ cart: newCart });
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  // };

  // removeCartItem = (product) => {
  //   const cart = this.state.cart.slice();
  //   let newCart = cart.filter((e) => e._id !== product._id);
  //   this.setState({ cart: newCart });
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  // };

  createOrder = (order) => {
    console.log(order);
  };
  render() {
    const { products } = this.props;
    return (
      <div className="App container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            ShopNow
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Admin
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <div className="main p-1">
            <Filter />
            <Products
            // addToCart={this.addToCart}
            />
          </div>

          <div className="sidebar p-1">
            <Cart
              // cart={this.props.cart}
              // removeCartItem={this.removeCartItem}
              createOrder={this.createOrder}
            />
          </div>
        </main>
        <footer className="bg-dark text-light">
          Made by Kiran Puli, Copyright @2020
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    size: state.sizeFilter,
    order: state.orderFilter,
    // cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterSize: (data) => {
      dispatch({ type: SIZE_FILTER, payload: data });
    },
    filterOrder: (data) => {
      dispatch({ type: ORDER_FILTER, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
