import React from "react";
import Slider from "react-slick";

export default function SliderBar({ children }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return <Slider {...settings}>{children}</Slider>;
}
