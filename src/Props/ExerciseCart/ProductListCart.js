import React, { Component } from "react";
import ProductItemCar from "./ProductItemCar";

export default class ProductListCart extends Component {
  renderProduct = () => {
    let { mangSanPham,tangGiamSoLuong } = this.props;
    return mangSanPham.map((product, index) => {
      return <ProductItemCar product={product} key={index} />;
    });
  };
  render() {
    let { mangSanPham, themGioHang } = this.props;
    return (
      <div className="row">
        {/* {this.renderProduct()} */}
        {mangSanPham.map((product, index) => {
          return <ProductItemCar product={product} key={index} themGioHang={themGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />;
        })}
      </div>
    );
  }
}
