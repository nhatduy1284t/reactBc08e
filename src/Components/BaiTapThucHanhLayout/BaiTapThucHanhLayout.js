import React, { Component } from "react";
import PreviewBar from "./PreviewBar";
import NavHeader from "./NavHeader";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

export default class BaiTapThucHanhLayout extends Component {
   render() {
      return (
         <div>
            <PreviewBar/>
            <NavHeader></NavHeader>
            <Header />
            <Section />
            <Footer />
         </div>
      );
   }
}
