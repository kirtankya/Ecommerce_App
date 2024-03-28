import React, { useState } from 'react';
import './cart.scss';

export const addToCart = (product, cart, setCart) => {
    setCart(prevCart => [...prevCart, product]);
};




export default function Cart() {
    const [cart, setCart] = useState([]);

    return (
        <div className="cart_main">
            <div className="container">
                <div className='main_cart'>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map((item, index) => (
                            item && (
                                <li key={index}>
                                    {item.name} - ${item.price} - Quantity: {item.quantity}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
