import React from 'react'
import './addCart.scss';
import addCart from '../../../assets/icons/shopping-cart.png';
import { Link } from 'react-router-dom';

export default function AddCart() {
    return (
        <Link to={'/cart'}>
            <div className="Addcart">
                <img src={addCart} alt="Add-cart" />
            </div>
        </Link>
    )
}
