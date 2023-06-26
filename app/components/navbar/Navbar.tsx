"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconStar, IconBars, IconMark, IconFire, IconPhoto, IconView, IconInformation, IconUser, IconUserPlus, IconCloudUp } from "@/public/svgIcons";

export default function Navbar() {

    const [open, setOpen] = useState(true);

    return (
        <>
            <nav className='py-3 bg-zinc-950'>
                <div className='flex items-center justify-between px-5 md:px-14 lg:px-32 xl:px-40'>
                    <div className="flex items-center shrink-0 px-2 md:px-0">
                        <Image className="block md:hidden" width={32} height={29.91} src="https://icons.onlypaks.com/iconmovile.svg" alt="Onlypaks logo" />
                        <Image className="hidden md:block" width={140} height={36.55} src="https://icons.onlypaks.com/icon.svg" alt="Onlypaks logo" />
                    </div>
                    <div className="flex items-center flex-1 px-3 min-[310px]:px-7 md:ml-4 gap-6">
                        <div className="w-[113px] grow max-w-lg">
                            <div className="relative">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="darkgrey" width="20px" height="20px">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </span>
                                <input type="text" name="search" id="search" className="placeholder:italic block w-full rounded-md border-0 py-1 pl-10 pr-4 bg-neutral-800 text-white focus:outline-none focus:ring-1" placeholder="Buscar en OnlyPaks" />
                            </div>
                        </div>
                        <Link href="#" className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-black rounded-md px-3 py-0.5 font-medium items-center gap-x-1">
                            <IconStar color="black" width="15px" height="15px" />Actulizar
                        </Link>
                    </div>
                    <div className="block md:hidden">
                        <button type="button" className="flex items-center p-1" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpen(!open)}>
                            <span className="sr-only">Close menu</span>
                            <IconBars />
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-1">
                            <Link href="#" className="text-white hover:text-gray-300 rounded-md px-3 py-1.5 text-sm font-medium">Registrase</Link>
                            <Link href="#" className="text-white hover:text-gray-300 rounded-md px-3 py-1.5 text-sm font-medium">Iniciar</Link>
                        </div>
                    </div>
                </div>
            </nav>


            <div className={`${open ?? 'hidden'} relative z-10 `} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                <div className="fixed z-10 inset-0 backdrop-blur-sm bg-black/10"></div>

                <div className="fixed z-10 inset-y-0 overflow-hidden">

                    <div className="absolute inset-0 overflow-hidden">

                        <div className={`${open ? 'translate-x-0' : 'translate-x-full'} transform transition ease-in-out duration-500 sm:duration-700 pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20`}>

                            <div className="pointer-events-none relative w-[350px] min-w-[180px]">

                                <div className="flex h-full flex-col bg-zinc-950 shadow-xl">
                                    <div className="flex-1 px-5 py-4">
                                        <div className="flex items-start justify-between">
                                            <Link href="#" className="px-1.5 flex h-7 items-center">
                                                <span className="sr-only">Onlypaks logo</span>
                                                <Image className="md:block" width={100} height={100} src="https://icons.onlypaks.com/icon.svg" alt="Onlypaks logo" />
                                            </Link>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button onClick={() => setOpen(!open)} type="button" className="p-1" aria-controls="mobile-menu" aria-expanded={open}>
                                                    <span className="sr-only">Open menu</span>
                                                    <IconMark />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="flow-root">
                                                <div className="space-y-4 py-4">
                                                    <Link href="/" className="flex w-full items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                        <IconFire color="white" width="25px" height="25px" />Caseros
                                                    </Link>
                                                    <Link href="/photos" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                        <IconPhoto color="white" width="25px" height="25px" />Imagenes
                                                    </Link>
                                                    <Link href="/live" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                        <IconView color="white" width="25px" height="25px" />En vivo
                                                    </Link>
                                                    <Link href="#" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                        <IconInformation color="white" width="25px" height="25px" />Acerca de
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-5 py-4">
                                        <div className="flex justify-center space-x-3">
                                            <Link href="#" className="flex flex-col items-center">
                                                <div className="rounded-full bg-neutral-900 hover:bg-neutral-800 p-3 mb-2">
                                                    <IconCloudUp color="white" width="25px" height="25px" />
                                                </div>
                                                <span className="text-sm text-white">Subir</span>
                                            </Link>
                                            <Link href="#" className="flex flex-col items-center">
                                                <div className="rounded-full bg-neutral-900 hover:bg-neutral-800 p-3 mb-2">
                                                    <IconUserPlus color="white" width="25px" height="25px" />
                                                </div>
                                                <span className="text-sm text-white">Registrar</span>
                                            </Link>
                                            <Link href="#" className="flex flex-col items-center">
                                                <div className="rounded-full bg-neutral-900 hover:bg-neutral-800 p-3 mb-2">
                                                    <IconUser color="white" width="25px" height="25px" />
                                                </div>
                                                <span className="text-sm text-white">Iniciar</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
