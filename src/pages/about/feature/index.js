import React from 'react'
import service from "../../../assets/images/icon-delivery.png";
import customer from "../../../assets/images/Icon-Customer service.png";
import secure from "../../../assets/images/Icon-secure.png";

export default function Feature() {
    const Service = [
        {
            img: service,
            title: "FREE AND FAST DELIVERY",
            describe: "Free delivery for all orders over $140",
        },
        {
            img: customer,
            title: "24/7 CUSTOMER SERVICE",
            describe: "Friendly 24/7 customer support",
        },
        {
            img: secure,
            title: "MONEY BACK GUARANTEE",
            describe: "We reurn money within 30 days",
        },
    ];
    return (
        <div className="feature_main">
            <div className='container'>
                <div className="feature_service">
                    {Service.map((el) => {
                        return (
                            <div className="feature_main">
                                <div className="feature_pickup">
                                    <img src={el.img} alt="service" />
                                </div>
                                <h3>{el.title}</h3>
                                <span>{el.describe}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
