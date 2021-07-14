import React, { Component } from "react";

export default class Demo extends Component {
   name = "sĩ";

   renderName = () => {
      // this.name='2';
      return <span>
          {this.name} đẹp trai
      </span>;
   };
   render() {
      let productName = "Iphone x";
      let product = {
         name: "I phone X",
         price: 5000,
      };
      return (
         <div className="container">
            <h3>Sản phẩm của : {this.renderName()}</h3>
            <div className="w-25 bg-dark text-dark">
               <div className="card">
                  <img src="https://picsum.photos/200/200" />
                  <div className="card-body bg-dark text-white">
                     <h3>{product.name}</h3>
                     <p>{product.price}</p>
                     <button className="btn btn-primary">Xem chi tiết</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
