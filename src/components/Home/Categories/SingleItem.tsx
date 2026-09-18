import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";

interface SingleItemProps {
  item: Category;
  onClick: (id: string | number) => void;
}

const SingleItem = ({ item, onClick }: SingleItemProps) => {
  return (
    <button 
      onClick={() => onClick(item.id)} 
      className="group flex flex-col text-left w-full focus:outline-none"
    >
      <div className="relative w-full aspect-square rounded-[10px] overflow-hidden bg-white shadow-3 mb-4">
        <Image 
          src={item.img} 
          alt={item.title} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px" 
          className="object-cover" 
        />
      </div> 
      <div className="flex justify-center w-full"> 
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue"> 
          {item.title} 
        </h3> 
      </div> 
    </button>
  );
};

export default SingleItem;
