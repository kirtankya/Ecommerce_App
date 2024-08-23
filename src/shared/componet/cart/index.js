import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTocart, handleRemoveTocart, removeTocart } from '../../../redux/addTocart/cartSlice';
import './cart.scss';

export default function Cart({ setCart }) {
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addTocart(product));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeTocart(productId));
    };

    const handleRemoveItem = (id) =>{
        dispatch(handleRemoveTocart({id}));
    }


    const handleQuantityChange = (event, productId) => {
        const newQuantity = parseInt(event.target.value);
        // Find the index of the product in the cart array
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex !== -1) {
            // Create a copy of the cart array
            const updatedCart = [...cart];
            // Update the quantity of the product
            updatedCart[productIndex].quantity = newQuantity;
            // Update the cart state with the updated array using setCart
            setCart(updatedCart); // Call setCart as a function
        } else {
            console.error(`Product with ID ${productId} not found in cart.`);
        }
    };

        const calculateSubtotal = (item) => {
            // Remove currency symbol and parse price to a float
            const itemPrice = parseFloat(item.price.replace('$', ''));
            const itemQuantity = parseInt(item.quantity);

            if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
                return itemPrice * itemQuantity;
            } else {
                console.error(`Invalid price or quantity for item: ${JSON.stringify(item)}`);
                return 0;
            }
        };

        const calculateTotal = () => {
            const total = cart.reduce((acc, item) => {
                return acc + calculateSubtotal(item);
            }, 0);
            return total;
        };

        return (
            <div className="cart_main">
                <div className="container">
                    <h2>Shopping Cart</h2>
                    <div className="cart_items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart_item">
                                <img src={item.img} alt={item.name} />
                                <div className="product_details">
                                    <p>{item.heading}</p>
                                    <span>{item.price}</span>
                                    <button onClick={() => handleAddToCart(item)}>+</button>
                                    <select value={item.quantity} onChange={(e) => handleQuantityChange(e, item.id)}>
                                        {[...Array(10)].map((_, index) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))}
                                        <option value="10+">10+</option>
                                    </select>
                                    <button onClick={() => handleRemoveItem(item.id)}>-</button>
                                    <span onClick={() => handleRemoveFromCart(item.id)}>delete</span>
                                    <h3>SubTotal: {calculateSubtotal(item)}</h3>
                                </div>
                            </div>
                        ))}
                        <div>
                            Total: {calculateTotal()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
