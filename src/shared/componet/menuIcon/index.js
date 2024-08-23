import React, { useState } from 'react';
import './menuIcon.scss';
import { IoMdMenu } from "react-icons/io";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className='header'>
            <div className='menu_icon'>
                <IoMdMenu onClick={toggleNav} style={{ width: '50px', height: '40px' }} />
            </div>
            {isNavOpen && <Menu />}
        </div>
    );
}

function Menu() {
    return (
        <div className='menu-item'>
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Signup</a>
        </div>
    );
}
