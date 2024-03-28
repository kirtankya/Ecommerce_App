import React, { useEffect, useState } from 'react'
import './product.scss';
import ProductCard from '../../../shared/componet/product_card';

export default function Product() {
    const [totalSeconds, setTotalSeconds] = useState(3600); // Initial value of 3600 seconds (1 hour)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTotalSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return (
        <>
            <div className='product_main'>
                <div className="container">
                    <div className="product_day">
                        <div className="product_box">

                        </div>
                        <h2>Today’s</h2>
                    </div>
                    <div className="product_sales">
                        <div className="product_text">
                            <h1>Flash Sales</h1>
                        </div>
                        <div className="product_sales_timer">
                            <div className="product_sales_day">
                                <span>Days</span>
                                <h2>{days}</h2>
                            </div>
                            <div className="product_sales_hours">
                                <span>Hours</span>
                                <h2>{hours}</h2>
                            </div>
                            <div className="product_sales_minutes">
                                <span>Minutes</span>
                                <h2>{minutes}</h2>
                            </div>
                            <div className="product_sales_seconds">
                                <span>Seconds</span>
                                <h2>{seconds}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card_main">
                <ProductCard className="cards" />
            </div>

        </>
    )
}
