"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Works() {
  const workImage = [
    "/images/image2.jpeg",
    "/images/image7.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image8.jpeg",
  ];
  return (
    <div className="Works">
      <div className="Works-header">
        <h2>Dedicated Teamwork at Flako Ltd</h2>
        <p>
          Dedicated team's unwavering commitment, expertise, and collaboration
          fuel excellence
        </p>
      </div>
      <div className="Works-coursel">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {workImage.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt="Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction"
                    fill
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </div>
  );
}
