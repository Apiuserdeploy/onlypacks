"use client"
import { IconAdjustments, IconTrend } from '@/public/svg-icons'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navpage() {

    const platform = [{ name: "Todos" }, { name: "Amazon" }, { name: "Ebay" }]
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <h1 className="text-gray-300 text-sm md:text-xl font-medium flex items-center gap-x-2">Juguetes y Juegos para Adultos
                <IconTrend />
            </h1>

            <div>
                <div className="mt-5 flex items-center text-center gap-3 max-[350px]:gap-1 md:hidden">

                    <button className="rounded-lg border-2 border-neutral-800 p-1 md:p-2" onClick={toggleMenu}>
                        <IconAdjustments />
                    </button>

                    {platform.map(({ name }) => (
                        <Link className="flex-1 text-white text-sm rounded-lg border-2 border-neutral-800 p-1.5" aria-current="location" href={name}>{name}</Link>
                    ))} 

                </div>

                {isMenuOpen &&
                    <div className="w-full">
                        <div className="flex flex-col items-center pt-5">
                            <h2 className="text-white text-sm my-2 text-center">Filtros</h2>
                            <Link href="#" className="text-gray-300 hover:text-white rounded-md py-1.5 text-sm font-medium w-full text-center hover:bg-neutral-800">Projects</Link>
                            <Link href="#" className="text-gray-300 hover:text-white rounded-md py-1.5 mt-2 text-sm font-medium w-full text-center hover:bg-neutral-800">Calendar</Link>
                            <Link href="#" className="bg-amber-500 hover:bg-amber-600 text-black rounded-md py-1 mt-2 font-medium w-full flex items-center justify-center gap-x-1">Subir</Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
