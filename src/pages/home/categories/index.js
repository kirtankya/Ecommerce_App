import React from "react";
import "./categories.scss";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";

export default function Categories() {
  const category = [
    {
      icon: <IoPhonePortraitOutline />,
      name: "Phones",
    },
    {
      icon: <RiComputerLine />,
      name: "Computer",
    },
    {
      icon: <BsSmartwatch />,
      name: "SmartWatch",
    },
    {
      icon: <FaCameraRetro />,
      name: "Camera",
    },
    {
      icon: <FaHeadphones />,
      name: "HeadPhone",
    },
    {
      icon: <SiFacebookgaming />,
      name: "Gaming",
    },
  ];
  return (
    <div className="categories_main">
      <div className="container">
        <div className="categories_aligment">
          <div className="categories_box"></div>
          <h2>Categories</h2>
        </div>
        <div className="categories_browse">
          <h2>Browse By Category</h2>
        </div>
        <div className="categories_Items">
          {category.map((el) => {
            return (
              <div className="categories_Item">
                <div className="categories_icons">{el.icon}</div>
                {/* <img src={el.img} alt="image" /> */}
                <p>{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
