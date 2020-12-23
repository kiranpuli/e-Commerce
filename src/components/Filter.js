import React, { Component } from "react";
import "../App.css";
export class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <h5 className="filter-result">{this.props.count} Products</h5>
        <div className="filter-sort">
          <span className="mr-3">Sort by </span>
          <select
            className="btn btn-default shadow"
            value={this.props.sort}
            onChange={this.props.filterSort}
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
            value={this.props.size}
            onChange={this.props.filterSize}
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

export default Filter;
