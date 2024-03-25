import React from "react";
import AutoPlay from "../components/home/Slider";
import SwipeToSlide from "../components/home/Categories";
import banneriphone from "../assets/images/iphonebanner.png"
import { ProductsCard } from "../components/home/ProductsCard";
import { ProductsCard2 } from "../components/home/ProductCard2";
import { Brands } from "../components/home/Brands";
import { ProductsCard3 } from "../components/home/ProductCard3";
import { Shopprice } from "../components/home/Shopprice";
import { Assured } from "../components/home/Assured";

export const Home = () => {
  return (
    <div>
      <AutoPlay />
      <SwipeToSlide />
      <ProductsCard />
      <img src={banneriphone} alt="banneriphone image" className="px-5 md:px-8 rounded-lg" />
      <ProductsCard2 />
      <Brands />
      <ProductsCard3 />
      <Shopprice />
      <Assured />
    </div>
  );
};
