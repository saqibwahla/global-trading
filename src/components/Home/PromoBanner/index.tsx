import React from "react";
import Image from "next/image";

const PromoBanner = () => {
    
  return (
    <section className="overflow-hidden py-20">
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      
      {/* 'items-stretch' forces both blocks to maintain the exact same height */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Image Container Block */}
        <div className="relative w-full min-h-[250px] sm:min-h-[320px] lg:min-h-full rounded-lg bg-[#F5F5F7] overflow-hidden shadow-sm flex items-center justify-center">
          <Image
            src="/images/promo/promo-01.jpeg"
            alt="promo img"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            /* 
              CRITICAL FIX: 
              - 'object-contain' keeps 100% of the photo completely visible (no cutting on any side).
              - Removed nested roundings so the asset scales safely within the rounded outer container.
            */
            className="absolute inset-0 w-full h-full object-contain p-2" 
            priority
          />
        </div>
  
        {/* Right Column: YouTube Video Player Container */}
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-black shadow-md">
        <iframe
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/FlW-tZBMpAM?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1;mute=1" 
                  title="GlobalTrade Corporate Profile Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
        </div>
  
      </div>
  
    </div>
  </section>
  
  

  );
};

export default PromoBanner;
