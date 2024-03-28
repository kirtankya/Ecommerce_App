import React from 'react'
import './herobanner.scss';
import shopping from '../../../assets/images/shopping-bags.png';
import { PiStorefrontLight } from "react-icons/pi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";


export default function Herobanner() {
    const box = [
        {
            icon: <PiStorefrontLight />,
            number: '10.5k ',
            title: 'Sallers active our site'
        },
        {
            icon: <HiMiniCurrencyDollar />,
            number: '33k',
            title: 'Mopnthly Produduct Sale',
        },
        {
            icon: <IoBagHandleOutline />,
            number: '45.5k',
            title: 'Customer active in our site'
        },
        {
            icon: <TbMoneybag />,
            number: '25k',
            title: 'Anual gross sale in our site',
        }
    ]
    return (
        <div className='herobanner_Main'>
            <div className="container">
                <div className="herobanner_aligment">
                    <div className="herobanner_section">
                        <h1>Our Story</h1>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <span>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</span>
                    </div>
                    <div className="herobanner_image">
                        <img className='img-fluid' src={shopping} alt="shopping" />
                    </div>
                </div>
                <div className="herobanner_box_aligment">
                    {
                        box.map((el) => {
                            return (
                                <div className='herobaner_box'>
                                    <div className="herobanner_circle">
                                        <div className="icon">
                                            {el.icon}
                                        </div>
                                    </div>
                                    <div className="herobanner_text">
                                        <h1>{el.number}</h1>
                                        <p>Sallers active our site</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
