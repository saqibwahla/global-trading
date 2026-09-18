"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { staticGalleryData } from "@/components/Home/Categories/gallaryData";

interface GalleryModalProps {
  itemId: string | number | null;
  onClose: () => void;
}

const GalleryModal = ({ itemId, onClose }: GalleryModalProps) => {
  // Cancelable: Close modal on pressing the 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (itemId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent page background scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [itemId, onClose]);

  if (!itemId) return null;

  const itemData = staticGalleryData[itemId];

  if (!itemData) return null;

  return createPortal(
    /* Backdrop Overlay - Clicking here cancels and closes the modal */
    <div 
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      style={{ zIndex: 99999 }} // Ensures it layers entirely over sticky headers
    >
      
      {/* Modal Card - stopPropagation avoids closing when clicking inside the window */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-neutral-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50"
      >
        
        {/* Header Bar Area */}
        <div className="px-6 py-5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md z-20">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              {itemData.title}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Showing {itemData.images.length} items
            </p>
          </div>

          {/* Top Right Cross Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close gallery"
          >
            <svg 
              xmlns="http://w3.org" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Vertically Scrollable Images Workspace */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {/* Changed grid layout to exactly 2 columns on larger views with increased scale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itemData.images.map((imgUrl, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                
                {/* Image Container Card */}
                <div className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/30 dark:border-neutral-800/30 shadow-md">
                  <Image
                    src={imgUrl.src}
                    alt={`${itemData.title} display item ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={idx < 2 ? "eager" : "lazy"} // Eager load the first row for optimized LCP performance
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Subtext display area below the image */}
                <div className="px-1">
                  <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                    {imgUrl.type}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GalleryModal;
