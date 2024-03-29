
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './productItems.scss';
import productData from '../../../productData';
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import QuantityInput from '../../../shared/common/button';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../../redux/addTocart/cartSlice';

export default function ProductItems() {
    const { id } = useParams();
    const index = parseInt(id) - 1;
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        localStorage.setItem('productId', id);
        console.log('productId', id);
    }, [id]);

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addTocart(product));
        navigate('/cart');
    };

    return (
        <div className='product_By_card'>
            <div className="container">
                <div key={index} className='product_by_card'>
                    <div className="product_card_image">
                        <img src={productData[index].img} alt="" />
                    </div>
                    <div className="product_card_details">
                        <h2>{productData[index].heading}</h2>
                        <div className="product_ratingStar">
                            <div className="star_icon">
                                {productData[index].blueIcon?.map((icon, idx) => (
                                    <IoMdStar key={idx} />
                                ))}
                                {productData[index].nullIcon?.map((icon, idx) => (
                                    <IoIosStarOutline key={idx} />
                                ))}
                                {productData[index].halfIcon?.map((icon, idx) => (
                                    <IoStarHalfSharp key={idx} />
                                ))}
                            </div>
                        </div>
                        <div className="product_button">
                            <button>Electra Hub+ Choice</button>
                        </div>
                        <div className="product_price">
                            <del>{productData[index].del_price}</del>
                            <span>{productData[index].price}</span>
                        </div>
                        <div className="product_text">
                            <span>Inclusive of all taxes</span>
                        </div>
                        <div className="product_cart_button">
                            <QuantityInput value={quantity} onChange={setQuantity} />
                        </div>
                        <div className="button_aligment">
                            <div className="product_addCart">
                                <button onClick={() => handleAddToCart(productData[index])}>Add to cart</button>
                            </div>
                            <div className="product_buyNow">
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
