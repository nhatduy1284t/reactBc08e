import React, { Component } from "react";

export default class HandleEvent extends Component {
   ten = "Duy";
   handleClick = () => {
      alert("Sĩ đẹp trai");
   };

   showMessage =(mess) => {
       alert(`Hello ${mess}`);
   }

   render() {
      let name = "Bảo";
      return (
         <div className="container">
            HandleEvent
            <button
               id="btn"
            //    onClick={(event) => {
            //     //   alert(`${name} đẹp trai`);
            //       this.showMessage();
            //    }}
            onclick={this.handleClick}
            >
               Click me
            </button>
         </div>
      );
   }
}
