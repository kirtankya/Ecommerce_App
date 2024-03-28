import React, { useEffect, useState } from "react";
import "./product_card.scss";
import gamer from "../../../assets/images/g92-2-500x500 1.png";
import keyboard from "../../../assets/images/Frame 612.png";
import lcd from "../../../assets/images/Frame 613.png";
import chair from "../../../assets/images/Frame 614.png";
import laptop from "../../../assets/images/pexels-pixabay-4158-removebg-preview.png";
import watch from "../../../assets/images/pexels-joey-nguyễn-2113994-removebg-preview (1).png";
import headphone from "../../../assets/images/pexels-dzenina-lukac-815494-removebg-preview.png";
import gamingGoggles from "../../../assets/images/pexels-cottonbro-studio-4009591-removebg-preview.png";
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function ProductCard() {
  const Card = [
    {
      id: '1',
      img: gamer,
      heading: "HAVIT HV-G92 Gamepad",
      price: "$120",
      del_price: "$160",
      blueIcon: [1, 2, 3, 4, 5],
    },
    {
      id: '2',
      img: keyboard,
      heading: "AK-900 Wired Keyboard",
      price: "$960",
      del_price: "$1160",
      blueIcon: [1, 2, 3, 4],
      nullIcon: [1],
    },
    {
      id: '3',
      img: lcd,
      heading: "IPS LCD Gaming Monitor",
      price: "$370",
      del_price: "$400",
      blueIcon: [1, 2, 3, 4, 5],
    },
    {
      id: '4',
      img: chair,
      heading: "S-Series Comfort Chair",
      price: "$375",
      del_price: "$400",
      blueIcon: [1, 2, 3, 4],
      halfIcon: [1],
    },
    {
      id: '5',
      img: laptop,
      heading: "Gaming Laptop & Mobile",
      price: "$500",
      del_price: "$800",
      blueIcon: [1, 2, 3, 4],
      halfIcon: [1],
    },
    {
      id: '6',
      img: watch,
      heading: "TIMEWEAR New Track",
      price: "$260",
      del_price: "$700",
      blueIcon: [1, 2, 3, 4],
      nullIcon: [1],
    },
    {
      id: '7',
      img: headphone,
      heading: "Sony WH-CH720N, Wireless",
      price: "$700",
      del_price: "$1299",
      blueIcon: [1, 2, 3, 4, 5],
    },
    {
      id: '8',
      img: gamingGoggles,
      heading: "Gameing With Goggles",
      price: "$655",
      del_price: "$999",
      blueIcon: [1, 2, 3, 4, 5],
    },
  ];



  const navigate = useNavigate();
  const redirectTopage = (productId) => {
    localStorage.setItem('selectProductId', String(productId))
    navigate(`/products/${productId}`);
  }

  useEffect(() => {
    const selectProductId = localStorage.getItem('selectProductId')
    console.log('*********', selectProductId);
  }, [])


  return (
    <div className="container">
      <div className="product_card">
        {Card.map((el) => {
          return (
            <div key={el.id} className="product_main_card">
              <div className="product_image">
                <>
                  <img onClick={() => redirectTopage(el.id)} src={el.img} alt="game-pad" />
                  <div className="product_cart_button">
                    <button>Add to cart</button>
                  </div>
                </>
              </div>
              <div className="product_details">
                <h3>{el.heading}</h3>
                <div className="price_aligment">
                  <span>{el.price}</span>
                  <del>{el.del_price}</del>
                </div>
                <div className="star_icon">
                  {el.blueIcon?.map((Card) => (
                    <IoMdStar />
                  ))}
                  {el.nullIcon?.map((Card) => (
                    <IoIosStarOutline />
                  ))}
                  {el.halfIcon?.map((Card) => (
                    <IoStarHalfSharp />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="product_button">
        <button>View All Products</button>
      </div>
    </div>
  );
}
