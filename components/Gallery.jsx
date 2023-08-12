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

export default function Gallery({ data, header, paragraph }) {
  return (
    <div className="Gallery">
      <div className="gallery-header">
        <h1>{header}</h1>
        <p>{paragraph}</p>
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
            {data.map((image, i) => {
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
