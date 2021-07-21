import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderArrProduct = () => {
    let { arrProduct } = this.props;
    console.log(arrProduct);
    let content = [];
    content = arrProduct.map((product, index) => {
      return <Product product={product}/>;
    });

    return content;
  };
  render() {
    return <div className="row">{this.renderArrProduct()}</div>;
  }
}
