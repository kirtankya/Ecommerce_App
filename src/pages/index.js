import React from "react";
import Herobanner from "./home/herobanner";
import Product from "./home/product";
import Categories from "./home/categories";
import Selling from "./home/selling";
import Banner from "./home/banner";
import OurProduct from "./home/ourProduct";
import Feature from "./home/feature";

export default function Home() {
  return (
    <div>
      <Herobanner />
      <Product />
      <Categories />
      <Selling />
      <Banner />
      <OurProduct />
      <Feature/>
    </div>
  );
}
