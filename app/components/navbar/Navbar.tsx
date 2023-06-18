"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBars, IconCamara, IconMark } from "@/public/svgIcons";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>

            <nav className='py-3 min-w-[270px] bg-zinc-950'>

                <div className='flex flex-nowrap items-center justify-between relative px-5 md:px-24'>

                    <div className="flex items-center shrink-0 px-2 md:px-0">
                        <Image className="block h-8 w-auto max-w-full md:hidden" width={100} height={100} src="https://icons.onlypaks.com/iconmovile.svg" alt="YouPacks logo" />
                        <Image className="hidden h-8 w-auto max-w-full md:block" width={100} height={100} src="https://icons.onlypaks.com/icon.svg" alt="YouPacks logo" />
                    </div>

                    <div className="flex justify-center flex-1 px-2 md:ml-3">
                        <div className="w-[140px] grow max-w-lg">
                            <label htmlFor="search" className="sr-only"></label>
                            <div className="relative">
                                <div className="absolute pointer-events-none flex items-center inset-y-0 left-0 pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="darkgrey" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <input type="text" name="search" id="search" className="block w-full rounded-md border-0 py-1 pl-11 pr-4 bg-neutral-800 text-white focus:outline-0" placeholder="Buscar en OnlyPacks" />
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <button type="button" className="flex items-center p-1" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <IconMark />
                            ) : (
                                <IconBars />
                            )}
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center gap-5">
                            <Link href="#" className="text-white hover:text-gray-300 rounded-md px-3 py-1.5 text-sm font-medium">Registrase</Link>
                            <Link href="#" className="text-white hover:text-gray-300 rounded-md px-3 py-1.5 text-sm font-medium">Iniciar</Link>
                            <Link href="#" className="bg-amber-500 hover:bg-amber-600 text-black rounded-md px-3 py-1.5 ml-3 font-medium flex items-center gap-x-1">Subir
                                <IconCamara />
                            </Link>
                        </div>
                    </div>

                </div>

                {isMenuOpen &&
                    <div className="w-full md:hidden">
                        <div className="flex flex-col items-center pt-5 px-5">
                            <Link href="#" className="text-white hover:text-gray-300 rounded-md py-1.5 text-sm font-medium w-full text-center hover:bg-neutral-800">Projects</Link>
                            <Link href="#" className="text-white hover:text-gray-300 rounded-md py-1.5 mt-2 text-sm font-medium w-full text-center hover:bg-neutral-800">Calendar</Link>
                            <Link href="#" className="bg-amber-500 hover:bg-amber-600 text-black rounded-md py-1 mt-2 font-medium w-full flex items-center justify-center gap-x-1">Subir
                                <IconCamara />
                            </Link>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}
