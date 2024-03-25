import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import mobile from "../../assets/images/Categories/mobiles.svg";
import laptop from "../../assets/images/Categories/laptop.svg";
import tabs from "../../assets/images/Categories/tabs.svg";
import smartwatches from "../../assets/images/Categories/smart-watches.svg";
import accessories from "../../assets/images/Categories/accessories.svg";
import earbuds from "../../assets/images/Categories/wireless-earbuds.svg";
import lifestyle from "../../assets/images/Categories/home-and-lifestyle.svg";
import gaming from "../../assets/images/Categories/gaming.svg";
import fashion from "../../assets/images/Categories/beauty-fashion.svg";

const categor = [
  {
    imgpath: mobile,
    name: "Mobile",
  },
  {
    imgpath: laptop,
    name: "Laptop",
  },
  {
    imgpath: tabs,
    name: "Tablets",
  },
  {
    imgpath: smartwatches,
    name: "Smart Watches",
  },
  {
    imgpath: accessories,
    name: "Accessories",
  },
  {
    imgpath: earbuds,
    name: "Wireless Earbuds",
  },
  {
    imgpath: lifestyle,
    name: "Home And Lifestyle",
  },
  {
    imgpath: gaming,
    name: "Gaming",
  },
  {
    imgpath: fashion,
    name: "Fashion",
  },
];

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="px-5 md:px-8 overflow-hidden pt-5">
        <h3 className="font-semibold text-xl">Explore Popular Categories</h3>
        <Slider {...settings}>
          {categor.map((item, index) => {
            return (
              <div className="text-center py-5 group" key={index}>
                <div className="flex justify-center">
                  <img
                    src={item.imgpath}
                    className="rounded-full cursor-pointer hover:border-[2px] hover:border-[#1bab6e]"
                    alt={`${item.name}`}
                  />
                </div>
                <h3 className="group-hover:text-[#1bab6e] font-semibold hover:font-bold cursor-pointer">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
