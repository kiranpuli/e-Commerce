import React,{Component} from "react"
import './bootstrap.min.css'
import "./App.css"

import data from "./data.json"
import Products from "./components/Products";
class App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""
    }
  }
  
  render(){
    console.log(data.products)
      return (
        <div className="App container-fluid">
          <nav className="navbar navbar-dark bg-dark">
              <a href="/" className="navbar-brand">ShopNow</a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">Admin</a>
                </li>
              </ul>
          </nav>
          <main>
            <div className="main">
              <Products products={this.state.products}/>
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
