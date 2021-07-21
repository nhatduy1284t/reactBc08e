import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  state = {
    temp: "123",
  };
  renderProduct = () => {
    let { productsData } = this.props;
    let {mau}=this.props;

    return productsData.map((product, index) => {
      return <ProductItem product={product} setStateList={this.setStateList} viewDetail={this.props.viewDetail}/>;
    });
  };

  setStateList =(newS) => {
     
    this.setState(newS)
  }
  render() {
    return (
      <div className="row mt-5">
        {this.renderProduct()}
        {this.props.mau}
      </div>
    );
  }
}
