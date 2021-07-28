import React, { Component } from 'react'
import { connect } from 'react-redux';

export class SanPham extends Component {
    render() {
        console.log('props',this.props);
        let {sanPham}=this.props;
        return (
            <div className="card">
                <img className="w-100" src={sanPham.hinhAnh} height={350}/>
                <div className="card-body">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-outline-success" onClick={() => {
                        //Đưa dữ liệu lên redux
                        const action = {
                            type:'THEM_GIO_HANG',//Thuộc tính bắt buộc để xác định xử lý
                            sanPhamClick:sanPham
                        }
                        this.props.dispatch(action)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

//Kết nối redux
export default connect()(SanPham)