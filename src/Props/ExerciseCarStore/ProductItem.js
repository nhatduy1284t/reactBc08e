import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    console.log(product);

    return (
      <div className="col-3">
        <div className="card">
          <img className="card-img-top" src={product.img} alt />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelId"  
              onClick={() => {
                this.props.setStateList({
                  temp: "buh",
                  kh: "xzc",
                });

                this.props.viewDetail(product)
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
