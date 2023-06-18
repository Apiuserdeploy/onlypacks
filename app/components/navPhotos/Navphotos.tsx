"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { IconAdjustments, IconTrend } from '@/public/svgIcons'
import { NavProps } from '@/app/interfaces/NavProps';

const Navfotos: React.FC<NavProps> = ({title}) => {


    const platform = [{ name: "Categorias", route: "/photos" }, { name: "Nuevo", route: "/new" }, { name: "Popular", route: "/popular" }]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
    // Obtiene el objeto router

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <h1 className="text-gray-300 text-base md:text-xl font-medium flex items-center gap-x-2">{title}
                <IconTrend />
            </h1>

            <div>
                <div className="mt-5 flex items-center text-center gap-3 max-[350px]:gap-1 md:hidden">

                    <button className="rounded-lg border-2 border-neutral-800 p-1 md:p-2" onClick={toggleMenu}>
                        <IconAdjustments />
                    </button>

                    {platform.map(({ route, name }) => (
                        <Link key={name} className={` ${pathname === route ? 'bg-neutral-800' : ''} ${'flex-1 text-white text-sm rounded-lg border-2 border-neutral-800 p-1.5'} `} aria-current="location" href={route}>{name}</Link>
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

export default Navfotos