"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { IconAdjustments, IconTrend } from '@/public/svgIcons'
import { NavProps } from '@/app/interfaces/NavProps';

const Navfotos: React.FC<NavProps> = ({ title }) => {

    const platform = [{ name: "Categorias", route: "/photos" }, { name: "Nuevo", route: "/new" }, { name: "Popular", route: "/popular" }]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    return (
        <>
            <h1 className="text-gray-300 text-base md:text-xl font-medium flex items-center gap-x-2">{title}
                <IconTrend />
            </h1>

            <div>
                <div className="mt-5 flex items-center text-center gap-3  md:hidden">

                    <button className="rounded-lg border-2 border-neutral-800 p-1 md:p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <IconAdjustments />
                    </button>

                    {platform.map(({ route, name }) => (
                        <Link key={name} className={` ${pathname === route ? 'bg-neutral-800' : ''} ${'flex-1 text-white text-sm rounded-lg border-2 border-neutral-800 p-1.5'} `} aria-current="location" href={route}>{name}</Link>
                    ))}

                </div>

                {isMenuOpen &&
                    <div className="w-full md:hidden">
                        <div className="flex flex-col items-center pt-5">
                            <h2 className="text-white text-sm my-2 text-center">Filtros</h2>

                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
                                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
                            </div>

                            <Link href="#" className="bg-amber-500 hover:bg-amber-600 text-black rounded-md py-1 mt-2 font-medium w-full flex items-center justify-center gap-x-1">Subir</Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Navfotos