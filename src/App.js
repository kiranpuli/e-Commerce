import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";

import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

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

  render() {
    // console.log(data.products);
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
          <div className="main">
            <Filter
              count={this.state.products.length}
              sort={this.state.sort}
              size={this.state.size}
              filterSort={this.filterSort}
              filterSize={this.filterSize}
            />
            <Products products={this.state.products} />
          </div>

          <div className="sidebar">Cart</div>
        </main>
        <footer className="bg-dark text-light">
          Made by Kiran Puli, Copyright @2020
        </footer>
      </div>
    );
  }
}

export default App;
