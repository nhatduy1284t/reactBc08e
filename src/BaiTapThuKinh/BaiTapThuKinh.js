import axios from 'axios'
import React, { Component } from 'react'
import Home from './Components/Home'

export default class BaiTapThuKinh extends Component {
    render() {
        return (
            <div style={{
                backgroundColor:'black',
                position:'relative',
                zIndex:'1'
            }}>
                <Home/>
            </div>
        )
    }
}
// var promise = axios({
//     url:"./dataGlasses.json",
//     method:'GET',
//     responseType:'json'
//  })
 
//  promise.then(function (result) {
//    console.log("result", result.data);
//    document.querySelector('body').innerHTML=result.data.title;
//  });