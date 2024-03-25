import slider1 from "../../assets/images/slider/slider1.png";
import slider2 from "../../assets/images/slider/slider2.jpeg";
import React, { Component } from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
    return (
      <div className="hidden md:block w-full overflow-hidden">
        <Slider {...settings}>
          <div>
            <img
              src={slider1}
              alt="SliderOneImage"
              className="lg:h-80 md:h-60 lg:object-cover md:object-contain"
            />
          </div>
          <div>
            <img
              src={slider2}
              alt="SliderTwoImage"
              className="lg:h-80 md:h-60 lg:object-cover md:object-contain"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
