"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel w-full h-full"
      style={{ height: "100%" }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-01.jpeg"
            alt="headphone slide 1"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-02.jpeg"
            alt="headphone slide 2"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
