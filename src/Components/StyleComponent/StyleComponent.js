import React, { Component } from 'react'

import style from './StyleComponent.module.css'
export default class StyleComponent extends Component {
    render() {
        return (
            <div>
                style component
                <p className={`${style.fontBold} ${style['p-green']}`}>Hello</p>
            </div>
        )
    }
}
