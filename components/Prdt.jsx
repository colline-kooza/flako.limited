"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function Prdt({ data }) {
  console.log(data);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="prdt">
      <div className="prdt-details">
        <div className="prdt-image">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {data.images.map((image) => {
              return (
                <SwiperSlide>
                  <img src={image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {data.images.map((image) => {
              return (
                <SwiperSlide>
                  <img src={image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="prdt-text">
          <div className="short-description">
            <p>{data.title}</p>
            <hr />
          </div>
          <div className="keys-words">
            {data.keywords.map((key) => {
              return <p>.{key}</p>;
            })}
          </div>
          <div className="price">
            <h1>UGX 65,000</h1>
          </div>
          <div className="buy-button">
            <Link href={`/order/${data.slug}`}>Order Now</Link>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <div className="desc">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
