import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.arrProduct.map((product, index) => {
      return <Product product={product} key={index} setStateCarStore={this.props.setStateCarStore}/>;
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
