import React, { Component } from "react";
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/react";
import ButtonKinh from "./ButtonKinh";
import PostData from "../Data/dataGlasses.json";

export default class OptionKinh extends Component {
  state = {
    maKinh: "1",
    tenKinh: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };

  setStateOptionKinh=setStateOptionKinh.bind(this);

  renderArrButtonKinh = () => {
    let arrGlasses = PostData;
    let content = [];
    content = arrGlasses.map((glass, index) => {
      return <ButtonKinh data={this.state} setStateOptionKinh={this.setStateOptionKinh} glass={glass} key={index}></ButtonKinh>;
    });


    return content;
  };
  // renderButtonOptionKinh = (ma) => {
  //   return (
  //     <button
  //       style={{
  //         width: "170px",
  //         height: "100px",
  //         backgroundColor: "white",
  //         backgroundSize: "100%",
  //         backgroundPosition: "center",
  //         backgroundRepeat: "no-repeat",
  //         backgroundImage: `url('./img/glassesImage/g${ma}.jpg')`,
  //       }}
  //       onClick={() => {
  //         let name = "";
  //         let description = "";
  //       }}
  //     ></button>
  //   );
  // };
  render() {
    return (
      <div
        className="container pb-5"
        style={{
          position: "relative",
          zIndex: "9",
        }}
      >
        <div className="d-flex justify-content-around mb-5 position-relative">
          <div className="text-center position-relative">
            <img
              style={{
                width: "250px",
              }}
              src="./img/glassesImage/model.jpg"
            />
            <img
              src={`./img/glassesImage/v${this.state.maKinh}.png`}
              style={{
                position: "absolute",
                width: "130px",
                top: "80px",
                left: "60px",
                opacity: "0.7",
              }}
            />
            <div className="position-absolute w-100" style={{ bottom: "0", left: "0", backgroundColor: "rgba(255, 165, 0,0.2)" }}>
              <h1 style={{ fontSize: "22px", color: "purple" }}>{this.state.tenKinh}</h1>
              <p className="text-white font-weight-bold">{this.state.desc}</p>
            </div>
          </div>

          <div className="text-center">
            <img
              style={{
                width: "250px",
              }}
              src="./img/glassesImage/model.jpg"
            />
          </div>
        </div>

        <div>
          {this.renderArrButtonKinh()}
        </div>
      </div>
    );
  }
}
function setStateOptionKinh(newState) {
  this.setState(newState);
}