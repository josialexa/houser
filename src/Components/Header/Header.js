import React, { Component } from 'react'
import img from '../../houser_logo.png'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <img id='logo-img' alt='Houser Logo' src={img} />Houser
            </div>
        )
    }
}
