import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header style={{
                backgroundColor:'rgba(0,0,0,0.4)',
                padding:'20px 0',
                marginBottom:'50px'
            }}>
                <h1 style={{
                    fontSize:'30px'
                }} className="text-center text-white">TRY GLASSES APP ONLINE</h1>
            </header>
        )
    }
}
