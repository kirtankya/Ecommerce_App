// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTocart, removeTocart } from '../../../redux/addTocart/cartSlice';

export default function Cart() {
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addTocart(product));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeTocart(productId)); // Pass only the ID
    };

    return (
        <div className="cart_main">
            <h2>Cart</h2>
            <div className="cart_items">
                {cart.map((item, index) => (
                    <div key={index} className="cart_item">
                        <img src={item.img} alt={item.name} />
                        <div className="product_details">
                            <p>{item.heading}</p>
                            <span>{item.price}</span>
                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
