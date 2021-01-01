import React, { Component } from "react";
import "../App.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { connect } from "react-redux";
import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  SET_MODAL_PRODUCT,
  UNSET_MODAL_PRODUCT,
} from "../types";

class Products extends Component {
  async componentDidMount() {
    const res = await fetch("/api/products");
    const data = await res.json();
    this.props.fetchProducts(data);
  }

  render() {
    const { filterProducts, modalProduct } = this.props;
    console.log(filterProducts + "\n");
    return (
      <div>
        <Fade bottom cascade={true}>
          {filterProducts.length === 0 ? (
            <h1 className="text-center text-info p-5">
              Oops no more products...
            </h1>
          ) : (
            <ul className="products row">
              {filterProducts.map((e) => (
                <a
                  key={e._id}
                  href={"#" + e._id}
                  className="card m-1"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top"
                    src={e.image}
                    alt={e.title}
                    onClick={() => {
                      this.props.setModalProduct(e);
                    }}
                  />
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
          )}
        </Fade>

        {modalProduct ? (
          <Modal isOpen={true}>
            <button
              onClick={this.props.unsetModalProduct}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
            <Zoom>
              <div className="product-modal row">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.title}
                  className="modal-img shadow-lg col-4"
                />
                <div className="col-8 modal-desc">
                  <h3>{modalProduct.title}</h3>
                  <h4 className="lead">{modalProduct.description}</h4>
                  <h4>Price : ${modalProduct.price}</h4>
                  <button
                    onClick={() => this.props.addToCart(modalProduct)}
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

const mapStateToProps = (state) => {
  return {
    filterProducts: state.filterProducts,
    modalProduct: state.modalProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    },
    setModalProduct: (data) => {
      dispatch({ type: SET_MODAL_PRODUCT, payload: data });
    },
    unsetModalProduct: () => {
      dispatch({ type: UNSET_MODAL_PRODUCT, payload: null });
    },
    addToCart: (data) => {
      dispatch({ type: ADD_TO_CART, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
