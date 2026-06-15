"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pricelistImages = [
  "/images/pricelist/1.png",
  "/images/pricelist/2.png",
  "/images/pricelist/3.png",
  "/images/pricelist/4.png",
  "/images/pricelist/5.png",
  "/images/pricelist/6.png",
  "/images/pricelist/7.png",
  "/images/pricelist/8.png",
];

export default function PricelistCarousel() {
  return (
    <div className="mx-auto max-w-4xl">
      <Swiper
        modules={[Pagination]}
        // navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="pricelist-swiper"
      >
        {pricelistImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                src={image}
                alt={`Pricelist ${index + 1}`}
                width={500}
                height={900}
                className="h-auto rounded-xl shadow-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
