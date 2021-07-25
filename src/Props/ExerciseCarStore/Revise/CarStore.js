import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
export default class CarStore extends Component {
  arrProduct = [
    { id: 1, name: "black car", img: "./img/car/black-car.jpg", price: 1000 },
    { id: 2, name: "red car", img: "./img/car/red-car.jpg", price: 2000 },
    { id: 3, name: "silver car", img: "./img/car/silver-car.jpg", price: 3000 },
    { id: 3, name: "Steel car", img: "./img/car/steel-car.jpg", price: 4000 },
  ];
  state = {
    product:this.arrProduct[0]
  }
  setStateCarStore =(newState) => {
    this.setState(newState)
  }
  render() {
    return (
      <div className="container">
        <Modal product={this.state.product} />
        <ProductList arrProduct={this.arrProduct} setStateCarStore={this.setStateCarStore}></ProductList>
      </div>
    );
  }
}
