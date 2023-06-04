import React from "react";
import Slider from "react-slick";
import './Carousel.css';
import menuItemsData from '../../Menu/data';
import { FaArrowRight } from 'react-icons/fa';

const MultipleItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    className: "slider", // Added className to the settings
  };

  return (
    <div className="carousel">
      <h2 className="carousel-title">Chef's Selection Showcase</h2>
      <Slider {...settings}>
        {menuItemsData.slice(0, 4).map(({ id, name, info, price, img }) => (
          <div className="carousel-item" key={id}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{info}</p>
            <p>{price}</p>
          </div>
        ))}
      </Slider>
      <button className="carousel-menu-btn">View More <FaArrowRight className="right" /></button>
    </div>
  );
};

export default MultipleItems;
