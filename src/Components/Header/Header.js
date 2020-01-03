import React from 'react'
import img from '../../houser_logo.png'
import './Header.css'

export default function Header() {
    return (
        <div id='header'>
            <img id='logo-img' alt='Houser Logo' src={img} />Houser
        </div>
    )
}
