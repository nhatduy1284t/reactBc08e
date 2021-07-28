import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import GioHang from "./GioHang";
import dataPhone from "../../assets/data/dataPhone.json";

export default class BaiTapGioHang extends Component {
  render() {
      console.log(dataPhone);

    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <div className="text-right mb-3">
          <span
            style={{ cursor: "pointer" }}
            className="text text-center font-weight-bold text-danger mb-3"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng(0)
          </span>
        </div>
        <GioHang />
        <DanhSachSanPham mangSanPham={dataPhone}/>
      </div>
    );
  }
}
