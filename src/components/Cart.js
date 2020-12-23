import React, { Component } from "react";
import "../App.css";

export class Cart extends Component {
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
                      <img className="col-4 cart-img" src={e.image} />
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
              <button className="btn btn-outline-success btn-sm">
                Proceed to Order
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Cart;
