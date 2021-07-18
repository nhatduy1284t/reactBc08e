import React, { Component } from 'react'

export default class ProductItem extends Component {



    // render() {
    //     let {prd} =this.props;
    //     return (
    //         <div className="col-4">
    //             <img width={300} src={prd.image}/>
    //             <div className="card-body">
    //                 <h3>{prd.name}</h3>
    //                 <span>Price</span>
    //                 <button>add to cart</button>
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="col-4">
                <img width={300} src={this.props.img}/>
                <div className="card-body">
                    <h3>{this.props.name}</h3>
                    <span>Price</span>
                    <button>add to cart</button>
                </div>
            </div>
        )
    }
}
