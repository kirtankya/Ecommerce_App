import React from 'react'
import './herobanner.scss';
import { FaApple } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function Herobanner() {
  return (
    <div className='herobanner_background'>
      <div className="container">
        <div className="herobanner_aligment">
          <div className='herobanner'>
            <div className="herobanner_main">
              <FaApple className='icons' />
              <h3>iPhone 14 Series</h3>
            </div>
            <div className="herobanner-text">
              <h2>Up to 10% off Voucher</h2>
            </div>
            <div className="button">
              <p>Shop Now</p>
              <IoMdArrowForward className='arrow' />
            </div>
          </div>
          <div className="herobanner_image">
            
          </div>
        </div>
      </div>
    </div>
  )
}
