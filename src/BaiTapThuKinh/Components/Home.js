import React, { Component } from "react";
import Header from "./Header";
import OptionKinh from "./OptionKinh";
export default class Home extends Component {
   render() {
      return (
         <div
            style={{
               backgroundImage: "url('./img/glassesImage/background.jpg')",
               position:"relative"
            }}

         >
            <div style={{
               position:'absolute',
               top:'0',
               left:'0',
               width:'100%',
               height:'100%',
               backgroundColor:'rgba(0,0,0,0.2)',
               zIndex:'5',
            }}></div>
            <Header />
            <OptionKinh />
         </div>
      );
   }
}
