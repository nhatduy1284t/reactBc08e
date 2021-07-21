import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp}=this.props;

        return (
            <div className="card">
            <img height={300} src={sp.hinhAnh} alt="..." />
            <div className="card-body">
              <h3>{sp.tenSP}</h3>
              <p className="text-success">{sp.giaBan}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.xemChiTiet(sp)
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        )
    }
}
