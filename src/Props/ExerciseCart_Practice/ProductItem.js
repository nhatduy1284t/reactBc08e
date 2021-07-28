import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" height={350} src={product.hinhAnh} alt={"..."} />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan.toLocaleString()}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.themGioHang(product);
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    );
  }
}
