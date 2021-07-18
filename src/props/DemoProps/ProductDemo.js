import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {
        /*
        Sự khác biệt giữa state và props?
        Giống : Cả 2 đều là thuộc tính có sẵn của React class component để binding dữ liệu hiển thị lên giao diện
        Khác :
        this.state dùng để chứa các giá trị thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState
        this.props dùng để nhận giá trị từ component cha(nơi sử dụng thẻ đó) truyền vào. Và lưu ý không thể gán lại giá trị đó
        */
       let {product} = this.props;//lấy thuộc tính product ra
        return (
            <div className="card">
                <img src={product.img} alt="..." />
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>
        )
    }
}
