import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExerciseCarStore extends Component {
  products = [
    { id: 1, name: "black car", img: "./img/car/black-car.jpg", price: 1000 },
    { id: 2, name: "red car", img: "./img/car/red-car.jpg", price: 2000 },
    { id: 3, name: "silver car", img: "./img/car/silver-car.jpg", price: 3000 },
    { id: 3, name: "Steel car", img: "./img/car/steel-car.jpg", price: 4000 },
  ];
  state = {
    productDetail: { id: 1, name: "black car", img: "./img/car/black-car.jpg", price: 1000 }
  };
  viewDetail=(itemClick) => {
    console.log(itemClick);
    this.setState({
      productDetail: itemClick
    })
  }
  render() {
    return (
      <div className="container">
        <ProductList productsData={this.products} viewDetail={this.viewDetail}/>
        <Modal productDetails={this.state.productDetail} />
      </div>
    );
  }
}
