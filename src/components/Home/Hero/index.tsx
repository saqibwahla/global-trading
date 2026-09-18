import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <Image
        src="/images/hero/hero-walpaper.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#E5EAF4]/40 pointer-events-none" />

      <div className="relative z-1 max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,757px)_393px] xl:h-[500px] gap-5">
          {/* <div className="relative rounded-[10px] bg-white overflow-hidden h-[500px] xl:h-full">
            <HeroCarousel />
          </div> */}

          {/* <div className="flex flex-col sm:flex-row xl:flex-col gap-5 h-auto xl:h-full">
            <a
              href="#"
              className="w-full relative rounded-[10px] overflow-hidden bg-white flex-1 min-h-[237px] sm:min-h-[250px] xl:min-h-0"
            >
              <Image
                src="/images/hero/pakistani-rice.webp"
                alt="Hero banner"
                fill
                sizes="(max-width: 1280px) 100vw, 393px"
                className="object-cover"
              />
            </a>
            <a
              href="#"
              className="w-full relative rounded-[10px] overflow-hidden bg-white flex-1 min-h-[237px] sm:min-h-[250px] xl:min-h-0"
            >
              <Image
                src="/images/hero/traditional-basmati-rice.webp"
                alt="Traditional basmati rice"
                fill
                sizes="(max-width: 1280px) 100vw, 393px"
                className="object-cover"
              />
            </a>
          </div> */}
        </div>
      </div>

      {/* <div className="relative z-1">
        <HeroFeature />
      </div> */}
    </section>
  );
};

export default Hero;
