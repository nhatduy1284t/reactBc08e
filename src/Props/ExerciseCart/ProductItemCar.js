import React, { Component } from "react";

export default class ProductItemCar extends Component {
  render() {
    let { product, themGioHang,tangGiamSoLuong } = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} height={350} />
        <div className="card-body">
          <h3>{product.tenSP}</h3>
          <p>{product.giaBan.toLocaleString()}</p>
          <button className="btn btn-primary">Xem chi tiết</button>
          <button className="btn btn-success" onClick={() => {
              themGioHang(product)
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
