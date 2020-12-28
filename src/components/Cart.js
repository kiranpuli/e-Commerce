import React, { Component } from "react";
import "../App.css";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
    };
    this.props.createOrder(order);
  };
  render() {
    const { cart } = this.props;
    let totalCount = 0;
    let totalPrice = 0;
    cart.forEach((e) => {
      totalCount += e.count;
    });
    cart.forEach((e) => {
      totalPrice += e.count * e.price;
    });
    return (
      <>
        {totalCount === 0 ? (
          <h5 className="cart-head">Cart is Empty</h5>
        ) : (
          <>
            <h5 className="cart-head">{totalCount} items in Cart</h5>
            <div className="cart-body">
              <ul className="list-group list-group-flush">
                {cart.map((e) => (
                  <li className="list-group-item" key={e._id}>
                    <div className="row">
                      <img
                        className="col-4 cart-img"
                        src={e.image}
                        alt={e.title}
                      />
                      <div className="col-8">
                        <h6>{e.title}</h6>
                        <p className="cart-desc">
                          <span>
                            {e.count}x{e.price}
                          </span>
                          <span>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => this.props.removeCartItem(e)}
                            >
                              Remove
                            </button>
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cart-footer">
              <h5>Total : ${Math.round(totalPrice * 100) / 100}</h5>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => {
                  this.setState({ showCheckout: true });
                }}
              >
                Proceed to Order
              </button>
            </div>
            {this.state.showCheckout && totalCount > 0 ? (
              <form className="checkout" onSubmit={this.createOrder}>
                <input
                  name="email"
                  onChange={this.handleChange}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <input
                  name="name"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
                <input
                  name="address"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  required
                />
                <input
                  type="submit"
                  className="btn btn-success btn-sm btn-block"
                  value="Checkout"
                  // onSubmit={this.createOrder}
                />
              </form>
            ) : null}
          </>
        )}
      </>
    );
  }
}

export default Cart;
