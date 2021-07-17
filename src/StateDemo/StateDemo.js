import React, { Component } from "react";

export default class StateDemo extends Component {
   /**
    * Thuộc tính state
    *  + là thuộc tính có sẵn của react class component, dùng để chứa giá trị thay đổi trên giao diện khi người dùng thao tác (click,key,
    *  keydown,blur,...)
    *
    */

   state = {
      isLogin: false,
      fSize: 15,
      imgSrc: "",
   };

   userName = "Khải";

   renderLogin = () => {
      if (this.state.isLogin) {
         return <span className="font-weight-bold text-white">Hello {this.userName}</span>;
      }
      return (
         <button
            className="btn btn-outline-success"
            onClick={() => {
               this.handleLogin();
            }}
         >
            Đăng nhập
         </button>
      );
   };

   handleLogin = async () => {
      //   this.state.isLogin = true; //Không được gán giá trị state trực tiếp mà phải thông qua phương thức setState
      /**
        this.setState(newState) : 
            +Phương thức này do react class component cung cấp : dùng để thay đổi giá trị state
            + khi được gọi thì giao diện sẽ chạy hàm render() lại
            +setState là phương thức bất đồng bộ
        
     */
      let newState = {
         isLogin: true,
      };
      //Thay đổi giá trị state
      await this.setState(
         {
            isLogin: true,
         },
         () => {}
      );
      console.log(this.state.isLogin);
   };
   handleChangeColor = (color) => {
      this.setState(
         {
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`,
         },
         () => {
            console.log(this.state.imgSrc);
         }
      );
   };
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary bg-dark">
               <a className="navbar-brand" href="#">
                  Navbar
               </a>
               <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               />
               <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li className="nav-item active">
                        <a className="nav-link" href="#">
                           Home <span className="sr-only">(current)</span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           Link
                        </a>
                     </li>
                     <li className="nav-item dropdown">
                        <a
                           className="nav-link dropdown-toggle"
                           href="#"
                           id="dropdownId"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                        >
                           Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                           <a className="dropdown-item" href="#">
                              Action 1
                           </a>
                           <a className="dropdown-item" href="#">
                              Action 2
                           </a>
                        </div>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     {/* {this.isLogin == true ? (
            <span className="font-weight-bold text-white">Hello {this.userName}</span>
         ) : (
            <button className="btn btn-outline-success">Đăng nhập</button>
         )} */}
                     {this.renderLogin()}
                  </form>
               </div>
            </nav>

            <div className="container">
               <h3>Bài tập tăng giảm font chữ</h3>
               <p style={{ fontSize: `${this.state.fSize}px` }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic totam doloribus libero voluptate tempore
                  debitis distinctio officia autem consequatur in!
               </p>
               <div>
                  <button
                     className="btn btn-outline-danger"
                     onClick={() => {
                        this.setState({
                           fSize: this.state.fSize + 2,
                        });
                     }}
                  >
                     +
                  </button>
                  <button
                     className="btn btn-outline-danger"
                     onClick={() => {
                        this.setState({
                           fSize: this.state.fSize - 2,
                        });
                     }}
                  >
                     -
                  </button>
               </div>
            </div>

            <hr />
            <div className="container">
               <h3>bài tập chọn xe</h3>
               <div className="row">
                  <div className="col-6">
                     <img src="https://picsum.photos/200/200" class="w-100" alt="..." />
                  </div>
                  <div className="col-6">
                     <div className="row">
                        <div className="col-3">
                           <button
                              style={{ background: "red" }}
                              className="btn text-white"
                              onClick={() => {
                                 this.setState({
                                    imgSrc: "./img/CarBasic/products/red-car.jpg",
                                 });
                              }}
                           >
                              Red
                           </button>
                        </div>
                        <div className="col-3">
                           <button
                              style={{ background: "silver" }}
                              className="btn text-white"
                              onClick={() => {
                                 this.handleChangeColor("silver");
                              }}
                           >
                              Silver
                           </button>
                        </div>
                        <div className="col-3">
                           <button style={{ background: "black" }} className="btn text-white" onClick={this.handleChangeColor}> 
                              Black
                           </button>
                        </div>
                        <div className="col-3">
                           <button style={{ background: "gray" }} className="btn text-white">
                              Steel
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

