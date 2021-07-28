import React, { Component } from "react";
//Thư viện kết nói redux
import { connect } from "react-redux";
export class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} height={50} />
          </td>
          <td>{spGH.soLuong}</td>
          <td>{spGH.giaBan}</td>

          <td>
            <button
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSPClick: spGH.maSP,
                  soLuong: 1,
                };
                //gọi hàm dispatch gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {spGH.giaBan * spGH.soLuong}
            <button
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSPClick: spGH.maSP,
                  soLuong: -1,
                };
                //gọi hàm dispatch gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                //Tạo ra action chứa dữ liệu gửi lên redux
                const action = {
                  type: "XOA_GIO_HANG",
                  maSPClick: spGH.maSP,
                };
                this.props.dispatch(action);
        
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
    console.log("propsGioHang", this.props);
    return (
      <div>
        {/* Button trigger modal */}

        {/* Modal */}
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sp</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>{this.renderGioHang()}</tbody>
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
//Hàm này sẽ giúp gửi dữ liệu lên redux
// const mapDispatchToProps=(dispatch) => {
//     //Trả về props là hàm
//     return {
//         xoaGioHang = (maSPClick)=> {
//             const action = {
//                 type:'XOA_GIO_HANG',
//                 maSPClick:maSPClick
//             }
//             dispatch(action);
//         }
//     }

// }

//Hàm này giúp lấy giá trị state từ redux về biến đổi thành props của component
const mapStateToProps = (rootReducer) => {
    //Trả về props là giá trị
  return {
    gioHang: rootReducer.gioHangReducer,
  };
};

//HOC
const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);

export default ComponentGioHangRedux;
