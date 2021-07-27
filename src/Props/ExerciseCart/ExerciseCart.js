import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";
import dataPhone from "../../assets/data//dataPhone.json";

export default class ExerciseCart extends Component {
  state = {
    gioHang: [
      //   {
      //     maSP: 1,
      //     tenSP: "VinSmart Live",
      //     manHinh: "AMOLED, 6.2, Full HD+",
      //     heDieuHanh: "Android 9.0 (Pie)",
      //     cameraTruoc: "20 MP",
      //     cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      //     ram: "4 GB",
      //     rom: "64 GB",
      //     giaBan: 5700000,
      //     hinhAnh: "./img/vsphone.jpg",
      //     soLuong:1
      //   },
    ],
  };
  themGioHang = (spClick) => {
    console.log(spClick);
    //Khi click vào sp thêm vào thuộc tính số lượng
    let spGioHang = { ...spClick, soLuong: 1 };
    let gioHangCapNhat = [...this.state.gioHang];

    let spGH = gioHangCapNhat.find((sp) => sp.maSP === spGioHang.maSP);

    if (spGH) {
      spGH.soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
      // gioHangCapNhat=[...gioHangCapNhat,spGioHang]
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
    console.log(this.state);
  };

  xoaGioHang = (maSPClick) => {
    console.log("maSpClick", maSPClick);
    let { gioHang } = this.state;
    let index = this.state.gioHang.findIndex((sp) => sp.maSP === maSPClick);
    if (index != -1) {
      this.state.gioHang.splice(index, 1);
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    let { gioHang } = this.state; //Lấy giỏ hàng ra
    let spTangGiam = gioHang.find((sp) => sp.maSP == maSPClick); //Tìm sản phẩm đã click

    //Tìm snả phẩm bấm tăng giảm
    if (spTangGiam) {
      //Nếu có
      spTangGiam.soLuong += soLuong; //Tăng 1 đơn vị số lượng
      if (spTangGiam.soLuong < 1) {
        //Nếu giảm số lượng tới 0
        this.xoaGioHang(maSPClick); //Thì xoá luôn
        return;
      }
    }

    this.setState({
      gioHang: gioHang,
    });
  };

  tinhTongSoLuong = () => {
    let { gioHang } = this.state;
    let tongSoLuong = gioHang
      .reduce((soLuong, sanPham, index) => {
        return (soLuong += sanPham.soLuong);
      }, 0)
      .toLocaleString();
    return tongSoLuong;
  };
  tinhTongTien = () => {
    let { gioHang } = this.state;
    let tongTien = gioHang
      .reduce((thanhTien, sanPham, index) => {
        return (thanhTien += sanPham.soLuong * sanPham.giaBan);
      }, 0)
      .toLocaleString();
    return tongTien;
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bài tập giỏ hàng</h1>
        <div className="text-right">
          <span style={{ cursor: "pointer" }} className="text text-center font-weight-bold btn btn-success" data-toggle="modal" data-target="#modelId">
            Giỏ hàng {this.tinhTongSoLuong()} - {this.tinhTongTien()}
          </span>
          <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
          <ProductListCart mangSanPham={dataPhone} themGioHang={this.themGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
        </div>
      </div>
    );
  }
}
