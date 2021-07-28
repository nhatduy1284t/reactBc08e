import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import arrProduct from "../../assets/data/dataPhone.json";
export default class ExerciseCartPractice extends Component {
  state = {
    arrGioHang: [],
  };

  themGioHang = (sanPhamClick) => {
    //Thêm attribute số lượng sp
    sanPhamClick = { ...sanPhamClick, soLuong: 1 };

    //bócgiỏ hàng ra ngoài
    let { arrGioHang } = this.state;

    let sanPhamKiemTra = arrGioHang.find((sanPham, index) => {
      if (sanPham.maSP === sanPhamClick.maSP) {
        return sanPham;
      }
      
    });

    if (sanPhamKiemTra) {
      sanPhamKiemTra.soLuong++;
    } else {
      arrGioHang.push(sanPhamClick);
    }

    //Set lại giỏ hàng
    this.setState({
      arrGioHang: arrGioHang,
    });
  };

  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);
    let { arrGioHang } = this.state;
    arrGioHang = arrGioHang.filter((sanPham) => maSPClick !== sanPham.maSP);
    this.setState({
      arrGioHang: arrGioHang,
    });
  };
  tangGiamSoLuong = (sanPham,soLuong) => {
    if(sanPham.soLuong>1)
    {sanPham.soLuong+=Number(soLuong);}
    else {
      alert("Số lượng phải tối thiểu là 1 nhé bạn !");
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="text-right">
          <button className="btn btn-primary" data-toggle="modal" data-target="#modelId">
            Giỏ hàng
          </button>
        </div>
        <Cart arrGioHang={this.state.arrGioHang} themGioHang={this.themGioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} key={1} />
        <ProductList arrProduct={arrProduct} themGioHang={this.themGioHang} />
      </div>
    );
  }
}
