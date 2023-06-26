"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

// import { products } from "@/public/products";
import { IconShopping } from "@/public/svgIcons"

export default function Page() {

    return (
        <div className="py-5 px-5 md:px-24 min-w-[270px]">

            {/* <Navpage /> */}
{/* 
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mt-10">
                {products.map((product, index) => (
                    <a key={index} href={product.linkUrl} className="group" target="_blank" rel="noopener">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img src={product.imgUrl} alt="Imagen del producto" className="h-full w-full object-cover object-center group-hover:opacity-95" />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-300">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-slate-200">US$ <span className="line-through text-green-600">{product.price + 1}</span> {product.price}</p>
                        <button className="mt-1 rounded-full w-full py-1 bg-orange-500 hover:bg-orange-400 font-medium flex items-center justify-center gap-x-1">
                            {product.platform} <IconShopping/>
                        </button>
                    </a>
                ))}
            </div> */}

        </div>
    );
}
