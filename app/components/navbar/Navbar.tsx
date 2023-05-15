"use client"

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="text-center min-w-[250px] py-1 px-5 md:px-0">
                <p className="text-gray-300 text-sm">Packs nuevos todos los dias. ¡Disfruta del mejor contenido!</p>
            </div>

            <nav className='py-3 bg-zinc-950'>

                <div className='flex flex-nowrap items-center justify-between relative px-5 md:px-24'>

                    <div className="flex items-center shrink-0 px-2 md:px-0">
                        <img className="block h-8 w-auto max-w-full md:hidden" src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/onlypacks%2FIconmovile.svg?alt=media&token=216fbbf5-dd49-488b-843c-e2099248c829" alt="YouPacks logo" />
                        <img className="hidden h-8 w-auto max-w-full md:block" src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/onlypacks%2FIcon.svg?alt=media&token=e18cf9fb-caa8-44dd-a8e3-b07bb0753269" alt="YouPacks logo" />
                    </div>

                    <div className="flex justify-center flex-1 px-2 md:ml-3">
                        <div className="w-28 grow max-w-lg">
                            <label htmlFor="search" className="sr-only"></label>
                            <div className="relative">
                                <div className="absolute pointer-events-none flex items-center inset-y-0 left-0 pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <input type="text" name="search" id="search" className="block w-full rounded-md border-0 py-1 pl-11 pr-4 bg-neutral-800 text-white focus:outline-0" placeholder="Buscar en OnlyPacks" />
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <button type="button" className="flex items-center p-1" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f59e0b" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f59e0b" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex">
                            <Link href="#" className="text-gray-300 hover:text-white rounded-md px-3 py-1.5 text-sm font-medium">Registrase</Link>
                            <Link href="#" className="text-gray-300 hover:text-white rounded-md px-3 py-1.5 text-sm font-medium">Iniciar</Link>
                            <Link href="#" className="bg-amber-500 hover:bg-amber-600 text-black rounded-md px-3 py-1.5 ml-3 text-sm font-medium flex items-center gap-x-1">Subir
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>

                {isMenuOpen &&
                    <div className="w-full md:hidden">
                        <div className="flex flex-col items-center pt-5 px-5">
                            <Link href="#" className="text-gray-300 hover:text-white rounded-md py-1.5 text-sm font-medium w-full text-center hover:bg-neutral-800">Projects</Link>
                            <Link href="#" className="text-gray-300 hover:text-white rounded-md py-1.5 mt-2 text-sm font-medium w-full text-center hover:bg-neutral-800">Calendar</Link>
                            <Link href="#" className="bg-amber-500 hover:bg-amber-600 text-black rounded-md py-1.5 mt-2 text-sm font-medium w-full flex items-center justify-center gap-x-1">Subir
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}
