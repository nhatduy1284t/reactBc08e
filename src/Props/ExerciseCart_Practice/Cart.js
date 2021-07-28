import React, { Component } from "react";

export default class Cart extends Component {
  renderArrProduct = () => {
    let { arrGioHang,xoaGioHang,tangGiamSoLuong } = this.props;

    return arrGioHang.map((product, index) => {
      return <tr>
        <td>{product.maSP}</td>
        <td><img src={product.hinhAnh} width={50} alt={'...'}/></td>
        <td>{product.tenSP}</td>
        <td><button className="btn btn-danger mr-2" onClick={() => {
          tangGiamSoLuong(product,-1);
        }}>-</button>
          {product.soLuong}
          <button className="btn btn-success ml-2" onClick={() => {
            this.props.themGioHang(product);
          }}>+</button>
          </td>
        <td>{product.giaBan}</td>
        <td>{(product.giaBan*product.soLuong).toLocaleString()}</td>
        <td className="btn btn-danger" onClick={() => {xoaGioHang(product.maSP)}}>Xoá</td>
        
       
      </tr>;
    });
  };
  render() {
    return (
      <div>
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table text-center">
                  <thead>
                    <tr >
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderArrProduct()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
