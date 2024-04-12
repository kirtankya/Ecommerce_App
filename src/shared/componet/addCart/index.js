import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { addTocart } from '../../../redux/addTocart/cartSlice'; // Import the addTocart action
import './addCart.scss';
import addCart from '../../../assets/icons/shopping-cart.png';

export default function AddCart() {
    const cartCount = useSelector(state => state.cart.cartItems.length);
    const dispatch = useDispatch(); // Get the dispatch function

    // Function to handle adding an item to the cart
    const handleAddToCart = (product) => {
        // Dispatch the addTocart action
        dispatch(addTocart(product));
    };

    return (
        <Link to={'/cart'}>
            <div className="Addcart">
                <img src={addCart} alt="Add-cart" />
                <div className="addTocart" onClick={handleAddToCart}> {/* Call handleAddToCart when clicked */}
                    <p>{cartCount}</p>
                </div>
            </div>
        </Link>
    )
}
