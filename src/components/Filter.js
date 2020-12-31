import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { ORDER_FILTER, SIZE_FILTER } from "../types";
class Filter extends Component {
  handleFilterSize = (e) => {
    const filter = e.target.value;
    this.props.filterSize(filter);
  };

  handleFilterOrder = (e) => {
    const filter = e.target.value;
    this.props.filterOrder(filter);
  };

  render() {
    return (
      <div className="filter">
        <h5 className="filter-result">
          {this.props.filterProducts.length} Products
        </h5>
        <div className="filter-sort">
          <span className="mr-3">Sort by </span>
          <select
            className="btn btn-default shadow"
            value={this.props.orderFilter}
            onChange={this.handleFilterOrder}
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-sizes">
          <span className="mr-3">Sizes </span>
          <select
            className="btn btn-default shadow"
            value={this.props.sizeFilter}
            onChange={this.handleFilterSize}
          >
            <option value="">ALL</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XLL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    filterProducts: state.filterProducts,
    sizeFilter: state.sizeFilter,
    orderFilter: state.orderFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterOrder: (data) => {
      dispatch({ type: ORDER_FILTER, payload: data });
    },
    filterSize: (data) => {
      dispatch({ type: SIZE_FILTER, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
