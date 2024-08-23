import React, { useEffect } from "react";
import "./ourProduct.scss";
import dogFood from "../../../assets/images/dogfood.png";
import camero from "../../../assets/images/camero.png";
import laptop from "../../../assets/images/ideapad-gaming.png";
import productSet from "../../../assets/images/product.png";
import car from "../../../assets/images/Electric-Toy-Car.png";
import shoes from "../../../assets/images/shoes.png";
import gamePad from "../../../assets/images/GP11_PRD3 1.png";
import shirt from "../../../assets/images/satin-jacket.png";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function OurProduct() {
  const OurProduct = [
    {
      id: '13',
      img: dogFood,
      title: "Breed Dry Dog Food",
      price: "$100",
      blueIcon: [1, 2, 3],
      nullIcon: [1, 2],
      rating: "35",
    },
    {
      id: '14',
      img: camero,
      title: "CANON EOS DSLR Camera",
      price: "$360",
      blueIcon: [1, 2, 3, 4],
      nullIcon: [1],
      rating: "95",
    },
    {
      id: '15',
      img: laptop,
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      blueIcon: [1, 2, 3, 4, 5],
      rating: "325",
    },
    {
      id: '16',
      img: productSet,
      title: "Curology Product Set ",
      price: "$500",
      blueIcon: [1, 2, 3, 4],
      nullIcon: [1],
      rating: "145",
    },
    {
      id: '17',
      img: car,
      title: "Kids Electric Car",
      price: "$960",
      blueIcon: [1, 2, 3, 4, 5],
      rating: "65",
    },
    {
      id: '18',
      img: shoes,
      title: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      blueIcon: [1, 2, 3, 4, 5],
      rating: "35",
    },
    {
      id: '19',
      img: gamePad,
      title: "GP11 Shooter USB Gamepad",
      price: "$660",
      blueIcon: [1, 2, 3, 4],
      halfIcon: [1],
    },
    {
      id: '20',
      img: shirt,
      title: "Quilted Satin Jacket",
      price: "$660",
      blueIcon: [1, 2, 3, 4],
      halfIcon: [1],
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
    <div className="our_Product">
      <div className="container">
        <div className="our_Product_aligment">
          <div className="our_Product_box"></div>
          <h2>Our Products</h2>
        </div>
        <div className="our_productsText">
          <h1>Explore Our Products</h1>
        </div>
        <div className="our_product_main">
          {OurProduct.map((el) => {
            return (
              <div key={el.id} className="our_product_box">
                <div className="our_product_image">
                  <img onClick={() => redirectTopage(el.id)} src={el.img} alt="product" />
                  <div className="our_product_cart_button">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="our_product_containe">
                  <p>{el.title}</p>
                  <div className="our_product_item">
                    <span>{el.price}</span>
                    <div className="star_icon">
                      {el.blueIcon?.map((OurProduct) => (
                        <IoIosStar />
                      ))}
                      {el.nullIcon?.map((OurProduct) => (
                        <IoIosStarOutline />
                      ))}
                      {el.halfIcon?.map((OurProduct) => (
                        <IoStarHalfSharp />
                      ))}
                    </div>
                    <p>{el.rating}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="product_button">
        <button>View All Products</button>
      </div>
    </div>
  );
}
