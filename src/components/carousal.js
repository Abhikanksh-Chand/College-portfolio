import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    // autoplay: true,
    autoplayspeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const style = {
    car: {
      width: "70vw",
      height: "200px",
      position: "relative",
      margin: "5px",
    },
    text: {
      color: "#00000",
      backgroundColor: "#3d7c98",
      textAlign: "center",
      padding: "2rem",
    },
  };

  return (
    <div>
      <Slider {...settings}>
        <div style={style.car}>
          <h3 style={style.text} >
            Hackerrank Python
          </h3>
          <p></p>
        </div>

        <div className="slides">
          <h3 style={style.text}>2</h3>
        </div>
        <div>
          <h3 style={style.text}>3</h3>
        </div>
        <div>
          <h3 style={style.text}>4</h3>
        </div>
        <div>
          <h3 style={style.text}>5</h3>
        </div>
        <div>
          <h3 style={style.text}>6</h3>
        </div>
      </Slider>
    </div>
  );
}
