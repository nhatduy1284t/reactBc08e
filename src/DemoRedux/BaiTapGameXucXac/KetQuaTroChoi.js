import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
    
  render() {
    return (
      <div className="container display-4 text-center">
        <div>
          Bạn chọn: <span className="text-warning">{this.props.banChon ? 'Tài' : 'Xỉu'}</span>
        </div>
        <div>
          Số bàn thắng: <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div>
          Tổng số bàn chơi: <span className="text-primary">{this.props.soBanChoi}</span>
        </div>
        <button className="btn bg-success mt-5" onClick={()=> {
            const action ={
                type:'PLAY_GAME'
            }
            this.props.dispatch(action);
        }}>
          <div className="display-4">Play game</div>
        </button>
      </div>
    );
  }
}

const mapStatetoProps = (rootReducer) => {
  return {
    soBanChoi: rootReducer.baiTapGameXucXacReducer.soBanChoi,
    soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
    banChon: rootReducer.baiTapGameXucXacReducer.banChon,
  };
};

export default connect(mapStatetoProps)(KetQuaTroChoi);
