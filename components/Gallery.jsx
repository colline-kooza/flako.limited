"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper/modules";
import Image from "next/image";
export default function Gallery() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image6 (2).jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
  ];
  return (
    <div className="Gallery">
      <div className="gallery-header">
        <h1>Poultry Farm Gallery</h1>
        <p>
          Discover Flako Limited's essence through our captivating gallery,
          portraying the vibrant tapestry of our finest produce and products
        </p>
      </div>
      <div className="gallery-container">
        <>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {images.map((image, i) => {
              return (
                <SwiperSlide>
                  <div key={i} className="image">
                    <Image src={image} alt="" fill />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </div>
  );
}
