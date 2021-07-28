import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderItem = () => {
        let {arrProduct}=this.props;
        return arrProduct.map((product,index) => {
            return <ProductItem product={product} key={index} themGioHang={this.props.themGioHang} />
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderItem()}
            </div>
        )
    }
}
