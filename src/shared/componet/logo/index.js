import React from 'react'
import './logo.scss';
import logo from '../../../assets/logo/logo.png';

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
    )
}
