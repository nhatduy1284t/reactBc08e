import React, { Component } from "react";

export default class Databinding extends Component {
   //Thuộc tính
   name = "khải";
   img = "https://picsum.photos/200/200";

   //Phương thức tự xây dựng
   renderCard = () => {
      let product = {
         id: 1,
         name: "Iphone",
         price: 1000,
         img: "https://picsum.photos/200/200",
      };

      return (
         <div className="card w-25">
            <img src={product.img} />
            <div classname="card-body">
               <p>
                  {product.name}
               </p>
               <p>
                  {product.price}
               </p>
               <button classname="btn btn-success">Mua hàng</button>
            </div>
         </div>
      );
   };

   render() {
      let hoTen = "khải";
      return (
         <div className="container">
            <div id="content">{this.name}</div>
            <img src={this.img} />
            {this.renderCard()}
         </div>
      );
   }
}
