import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img className="w-100" src={product.image} />
          <div className="card-body">
            <p className="card-title">{product.name}</p>
            <p className="card-text">{product.price} $</p>
            <button className="bg-dark text-white">Add to card</button>
          </div>
        </div>
      </div>
    );
  }
}
