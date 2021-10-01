import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        number:1,
        product : {
            name:'Iphone'
        }
    };
    console.log('constructor');
  }
  
  shouldComponentUpdate(newProps,newState) {
      console.log('shouldComponentUpdate');

      return true;
  }
  static getDerivedStateFromProps(newProps,currentState) {
      console.log('getDerivedStateFromProps');
      return null;
  }

  render() {
      
      console.log('render-parent');
    return <div className="container">
        <h3>LifeCycle</h3>
        <h3>{this.state.number}</h3>
        <button onClick={() => {
            this.state.number++;
            this.setState(this.state);
        }}>+</button>
        <h3>Parent:{this.state.product.name}</h3>
        <button onClick ={() => {
            let product = this.state.product;
            product.name ='Samsung galaxy note 20'
            this.setState({
                product:{...product}
            })
        }}>Change product</button>
        {this.state.number>2 ? '' :<Child product={this.state.product} number={this.state.number+1}/>}
      
    </div>;
  }

  componentDidMount () {
      console.log('componentDidMount');
  }
  componentDidUpdate(prevProps,prevState) {
      console.log('componentDidUpdate');
  }
}
