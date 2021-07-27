import React, { Component } from "react";

export default class Cart extends Component {
  renderGioHang = () => {
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img width={50} src={spGH.hinhAnh} alt="..." />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                tangGiamSoLuong(spGH.maSP, 1);
              }}
            >
              +
            </button>
            {spGH.soLuong.toLocaleString()}
            <button
              className="btn btn-primary ml-2 "
              onClick={() => {
                tangGiamSoLuong(spGH.maSP, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{spGH.giaBan.toLocaleString()}</td>
          <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoaGioHang(spGH.maSP);
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title bg-success">Giỏ hàng</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>gio</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>1</td>
                      <td>Iphone</td>
                      <td>
                        <img width={50} src="https://picsum.photos/200/200" alt="..." />
                      </td>
                      <td>
                        <button className="btn btn-primary mr-2">+</button>
                        10
                        <button className="btn btn-primary ml-2">-</button>
                      </td>
                      <td>1.000</td>
                      <td>10.000</td>
                      <td>
                        <button className="btn btn-danger">Xoá</button>
                      </td>
                    </tr> */}
                    {this.renderGioHang()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
