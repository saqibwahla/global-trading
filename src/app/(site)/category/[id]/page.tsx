import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { staticGalleryData } from "@/components/data/gallaryData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const itemId = resolvedParams.id;
  
  const itemData = staticGalleryData[itemId as keyof typeof staticGalleryData] || null;

  if (!itemData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1170px] mx-auto">
        
        {/* Dynamic Title Section */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-10">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Trading Catalog
          </span>
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 sm:text-4xl tracking-tight mt-1">
            {itemData.title} Portfolio
          </h1>
        </div>

        {/* 2 Images per row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {itemData.images.map((img: {src: string, type: string}, idx: number) => (
            <div key={idx} className="flex flex-col space-y-4">
              
              {/* Large Image Frame */}
              <div className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 shadow-md">
                <Image
                  src={img.src}
                  alt={`${img.type} display item ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 2}
                />
              </div>

              {/* Text Meta Label Below Image */}
              <div className="px-2">
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Product Quality Type
                </span>
                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  {itemData.title} Premium Class Var-{idx + 1}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
