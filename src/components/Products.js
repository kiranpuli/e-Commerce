import React, { Component } from "react";
import "../App.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  render() {
    const product = this.state.product;
    return (
      <div>
        <Fade bottom cascade={true}>
          <ul className="products row">
            {this.props.products.map((e) => (
              <a
                key={e._id}
                href={"#" + e._id}
                className="card m-1"
                style={{ width: "18rem" }}
                onClick={() => {
                  this.setState({ product: e });
                }}
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
        </Fade>
        {product ? (
          <Modal isOpen={true}>
            <button
              onClick={() => this.setState({ product: null })}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
            <Zoom>
              <div className="product-modal row">
                <img
                  src={product.image}
                  alt={product.title}
                  className="modal-img shadow-lg col-4"
                />
                <div className="col-8 modal-desc">
                  <h3>{product.title}</h3>
                  <h4 className="lead">{product.description}</h4>
                  <h4>Price : ${product.price}</h4>
                  <button
                    onClick={() => this.props.addToCart(product)}
                    className="btn btn-success"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Zoom>
          </Modal>
        ) : null}
      </div>
    );
  }
}
