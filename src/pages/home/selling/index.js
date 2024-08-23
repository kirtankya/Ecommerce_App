import React, { useEffect } from "react";
import "./selling.scss";
import shirt from "../../../assets/images/Shirt-removebg-preview.png";
import bag from "../../../assets/images/Sophie-Hulme-stairs-2-removebg-preview.png";
import cpu from "../../../assets/images/gammaxx.png";
import table from "../../../assets/images/table.png";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Selling() {
  const sellingProduct = [
    {
      id: '9',
      img: shirt,
      heading: "The north coat",
      price: "$260",
      del_price: "$400",
      blueIcon: [1, 2, 3, 4, 5],
    },
    {
      id: '10',
      img: bag,
      heading: "Gucci duffle bag",
      price: "$960",
      del_price: "$1160",
      blueIcon: [1, 2, 3, 4],
      nullIcon: [1],
    },
    {
      id: '11',
      img: cpu,
      heading: "RGB liquid CPU ",
      price: "$160",
      del_price: "$200",
      blueIcon: [1, 2, 3, 4],
      halfIcon: [1],
    },
    {
      id: '12',
      img: table,
      heading: "Small BookSelf",
      price: "$360",
      del_price: "$500",
      blueIcon: [1, 2, 3, 4, 5],
    },
  ]

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
    <div className="selling_main">
      <div className="container">
        <div className="selling_aligment">
          <div className="selling_box"></div>
          <h2>This Month</h2>
        </div>
        <div className="selling_Items">
          <h2>Best Selling Products</h2>
          <div className="selling_button">
            <button>View All</button>
          </div>
        </div>
        <div className="selling_product">
          {sellingProduct.map((el) => {
            return (
              <div key={el.id} className="selling_item">
                <div onClick={() => redirectTopage(el.id)} className="selling_image">
                  <img src={el.img} alt="" />
                </div>
                <div className="selling_containe">
                  <p>{el.heading}</p>
                  <div className="selling_price">
                    <span>{el.price}</span>
                    <del>{el.del_price}</del>
                  </div>
                  <div className="selling_icon">
                    <div className="star_icon">
                      {el.blueIcon?.map((el) => (
                        <IoMdStar />
                      ))}
                      {el.nullIcon?.map((el) => (
                        <IoIosStarOutline />
                      ))}
                      {el.halfIcon?.map((el) => (
                        <IoStarHalfSharp />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
