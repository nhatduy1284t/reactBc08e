import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  arrProduct = this.props.arrProduct;

  renderArrProduct = () => {
    let content = [];
    for (let i = 0; i < this.arrProduct.length; i++) {
        console.log(this.arrProduct[i].img)
      content.push(<ProductItem img={this.arrProduct[i].image} price={this.arrProduct.price} name={this.arrProduct.name} />);
    }
    return content;
  };
  renderProduct = () => {
      let content = this.props.arrProduct.map((product,index) => {
          return <div className="col-4" key={index}>
              <ProductItem prd={product}/>
          </div>
      })
      return content;
  }
  render() {
    //Từ mảng này tạo ra giao diện như bài tập và sử dụng thẻ <ProductItem> để hiện thị thông tin sản phẩm
    return (
      <div className="row">
        {/* <div className="row">
            <div className="col-4">
                <ProductItem/>
            </div>
            <div className="col-4">
                <ProductItem/>
            </div>
            <div className="col-4">
                <ProductItem/>
            </div>
        </div> */}
        {this.renderArrProduct()}
      </div>
    );
  }
}
