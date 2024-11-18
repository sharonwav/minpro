'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


const HomeSlider: React.FC = () => { 

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    centerPadding: "50px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  }
  return (
    <div className="w-full slider-container">
      <Slider {...settings}>
        <Link href="" className="flex items-center justify-center w-full h-[15rem] bg-[#ff0000] relative">
          <div className="w-full">

          </div>
          <div className="flex items-center justify-center absolute bottom-2 right-2">
            <div className="border border-black rounded-lg bg-white px-4 py-2.5">
              <p className="text-xs">Buy tickets</p>
            </div>
          </div>
        </Link>
        <Link href="" className="flex items-center justify-center w-full h-[15rem] bg-[#000000] relative">
          <div className="flex items-center justify-center absolute bottom-2 right-2">
            <div className="border border-black rounded-lg bg-white px-4 py-2.5">
              <p className="text-xs">Buy tickets</p>
            </div>
          </div>
        </Link>
      </Slider>    
    </div>
  )
}

export default HomeSlider