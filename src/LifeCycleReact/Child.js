import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a:1
    };
    console.log("constructor child");
  }

  timeout;
  componentWillReceiveProps(newProps) {
    this.setState({
      a:2
    })
    console.log("im");
}
  shouldComponentUpdate(newProps, newState) {
    
    console.log("shouldComponentUpdate child");

    return true;
  }
  static getDerivedStateFromProps(newProps, currentState) {
    
    console.log("getDerivedStateFromProps child");
    return null;
  }

  render() {
    
    console.log("render child");
    return (
      <div>
        <footer className="p-5 bg-dark text-white">footer {this.state.a}</footer>
      </div>
    );
  }

  componentDidMount() {
    //Hàm setInterval kích hoạt khoảng thời gian 1 lần
    this.timeout = setInterval(() => {
      console.log("1");
    }, 1000);
    
    console.log("componentDidMount child");
  }
  componentDidUpdate(prevProps, prevState) {
    //Hạn chế setState(xem xét kỹ việc set state) trong hàm này => Dùng if để kiểm tra
    console.log("componentDidUpdate child");
  }
  componentWillUnmount() {
    //Chạy trước khi component huỷ đi (mất khỏi giao diện) => Huỷ các biến chạy ngầm hoặc xử lý chuyển trang
    clearInterval(this.timeout);
    console.log("componentWillUnmount");
  }
}
