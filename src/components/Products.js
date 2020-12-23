import React, { Component } from "react";
import "../App.css";
export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products row">
          {this.props.products.map((e) => (
            <a
              key={e._id}
              href={"#" + e._id}
              className="card m-1"
              style={{ width: "18rem" }}
            >
              <img className="card-img-top" src={e.image} alt={e.title} />
              <div className="card-body">
                <h5 className="card-text">{e.title}</h5>
                <h5>{"$" + e.price}</h5>
                <span>
                  <button
                    onClick={() => this.props.addToCart(e)}
                    className="btn btn-success"
                  >
                    Add to cart
                  </button>
                </span>
              </div>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}
