import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";

import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
      size: "",
      sort: "",
    };
  }

  addToCart = (product) => {
    const newCart = this.state.cart.slice();
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

    this.setState({ cart: newCart });
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  removeCartItem = (product) => {
    const cart = this.state.cart.slice();
    let newCart = cart.filter((e) => e._id !== product._id);
    this.setState({ cart: newCart });
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  filterSort = (e) => {
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "highest"
            ? a.price <= b.price
              ? 1
              : -1
            : sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterSize = (e) => {
    const size = e.target.value;
    if (size === "") {
      this.setState({
        products: data.products,
        size,
      });
    } else {
      this.setState({
        products: data.products.filter(
          (e) => e.availableSizes.indexOf(size) >= 0
        ),
        size,
      });
    }
  };

  createOrder = (order) => {
    // alert("save " + order.name);
    console.log(order);
  };
  render() {
    // console.log(data.products);
    // console.log(localStorage.getItem("cart"));
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
            <Filter
              count={this.state.products.length}
              sort={this.state.sort}
              size={this.state.size}
              filterSort={this.filterSort}
              filterSize={this.filterSize}
            />
            <Products
              products={this.state.products}
              addToCart={this.addToCart}
            />
          </div>

          <div className="sidebar p-1">
            <Cart
              cart={this.state.cart}
              removeCartItem={this.removeCartItem}
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

export default App;
