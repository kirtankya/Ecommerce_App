import React, { useState } from 'react';
import './wishList.scss';
import wishlist from '../../../assets/icons/love.png';

export default function WishList() {
    const [isRed, setIsRed] = useState(false);

    const handleOnclick = () => {
        setIsRed(!isRed);
    };

    return (
        <div className={isRed ? 'red-background' : 'black-background'}>
            <div className="icons">
                <img
                    onClick={handleOnclick}
                    className={isRed ? 'red-icon' : 'black-icon'}
                    src={wishlist}
                    alt="WishList"
                />
            </div>
        </div>
    );
}
