import React from "react";
import "./fetaure.scss";
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
      <div className="container">
        <div className="fetaure_aligment">
          <div className="fetaure_box"></div>
          <h2>Featured</h2>
        </div>
        <div className="fetaure_text">
          <h2>New Arrival</h2>
        </div>
        <div className="feature_box_aligment">
          <div className="feature_product_box">
            <div className="feature_product_image">
              <div className="feature_containe">
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="feature_product_item">
            <div className="feature_item_image">
              <div className="feature_containe">
                <h3>Women’s Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="feature_product_boxs">
              <div className="feature_items_box">
                <div className="feature_box_text">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="feature_items_box">
                <div className="feature_box_text">
                  <h3>Perfume</h3>
                  <p>Gucci Intence Oud Edp</p>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  );
}
