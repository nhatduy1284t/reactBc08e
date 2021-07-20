import React, { Component } from "react";

export default class ButtonKinh extends Component {
  render() {
      let {key}=this.props;
      let {glass}=this.props;
      let {setStateOptionKinh}=this.props;
    return (
      <button
        style={{
          width: "170px",
          height: "100px",
          backgroundColor: "white",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url('./img/glassesImage/g${glass.id}.jpg')`,
        }}
        onClick ={() => {
          let newState ={
            maKinh:glass.id,
            tenKinh: glass.name,
            desc: glass.desc,
          }
          setStateOptionKinh(newState)

        }}
      ></button>
    );
  }
}

