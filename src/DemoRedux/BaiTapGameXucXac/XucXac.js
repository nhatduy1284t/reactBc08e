import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderMangXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return <img src={xucXac.hinh} width={50} alt={xucXac.hinh} key={index} />;
    });
  };
  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((tong, xucXac, index) => {
      return (tong += xucXac.diem);
    }, 0);
    
    let ketQua = tongDiem>11 ? 'Tài' : 'Xỉu';
    return `${tongDiem} - ${ketQua}`;
  };
  render() {
    let { mangXucXac } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: true,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="display-4 p-5">Tài</div>
            </button>
          </div>

          <div className="col-6 text-center">
            {/* <img src="./img/gameXucXac/1.png" width={50} alt="..."/>
              <img src="./img/gameXucXac/1.png" width={50} alt="..."/>
              <img src="./img/gameXucXac/1.png" width={50} alt="..."/> */}
            {this.renderMangXucXac()}
            <br />
            <div className="display-4">{this.renderKetQua()}</div>
          </div>

          <div className="col-3">
            <button
              className="btn btn-danger bg-dark"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: false,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="display-4 p-5">Xiu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStatetoProps)(XucXac);
