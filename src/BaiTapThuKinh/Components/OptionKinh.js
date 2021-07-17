import React, { Component } from "react";
import axios from "axios";
let arrGlasses = [];
let promise = axios({
  url: "./dataGlasses.json",
  method: "GET",
  responseType: "json",
});
promise.then(function (result) {
  arrGlasses = result.data;
  console.log(arrGlasses);
});

export default class OptionKinh extends Component {
  state = {
    maKinh: "1",
    tenKinh: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };

  renderButtonOptionKinh = (ma) => {
    return (
      <button
        style={{
          width: "170px",
          height: "100px",
          backgroundColor: "white",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url('./img/glassesImage/g${ma}.jpg')`,
        }}
        onClick={() => {
          let name = "";
          let description = "";

          for (let index in arrGlasses) {
            if (arrGlasses[index]["id"] == ma) {
              name = arrGlasses[index]["name"];
              description = arrGlasses[index]["desc"];
            }
          }
          let newState = {
            maKinh: ma,
            tenKinh: name,
            desc: description,
          };
          this.setState(newState);
        }}
      ></button>
    );
  };
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
          {this.renderButtonOptionKinh(1)}
          {this.renderButtonOptionKinh(2)}
          {this.renderButtonOptionKinh(3)}
          {this.renderButtonOptionKinh(4)}
          {this.renderButtonOptionKinh(5)}
          {this.renderButtonOptionKinh(6)}
          {this.renderButtonOptionKinh(7)}
          {this.renderButtonOptionKinh(8)}
          {this.renderButtonOptionKinh(9)}

        </div>
      </div>
    );
  }
}