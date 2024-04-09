import React from "react";
import Slider from "react-slick";

export default function SliderBar({ children }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    arrows: false,
    slidesPerRow: 2,
  };
  return <Slider {...settings}>{children}</Slider>;
}
