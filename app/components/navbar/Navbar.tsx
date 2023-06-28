"use client"

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { StarIcon, CloudArrowUpIcon, QuestionMarkCircleIcon, InformationCircleIcon, FireIcon, PhotoIcon, ViewfinderCircleIcon, GifIcon } from '@heroicons/react/24/solid';

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='py-3 bg-zinc-950'>
                <div className='flex items-center justify-between px-5 md:px-14 lg:px-32 xl:px-40'>
                    <div className="flex items-center shrink-0 px-2 md:px-0">
                        <Image className="w-auto h-auto md:hidden" width={46} height={41} src="https://icons.onlypaks.com/iconmovile.svg" alt="Onlypaks logo" />
                        <Image className="w-auto h-auto hidden md:block" width={146} height={41} src="https://icons.onlypaks.com/icon.svg" alt="Onlypaks logo" />
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
                        <Link href="/update" className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-black rounded-md px-3 py-0.5 font-medium items-center gap-x-1">
                            <StarIcon className="h-4 w-4" fill="black" strokeWidth={2} aria-hidden="true" />Actulizar
                        </Link>
                    </div>
                    <div className="block md:hidden">
                        <button type="button" className="flex items-center p-1" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpen(!open)}>
                            <span className="sr-only">Close menu</span>
                            <Bars3Icon className="h-7 w-7" stroke="#F49200" strokeWidth={2} aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-1">
                            <Link href="/" className="text-white hover:text-gray-300 rounded-md px-3 py-1.5 text-sm font-medium">Registrase</Link>
                            <Link href="/" className="text-white hover:text-gray-300 rounded-md px-3 py-1.5 text-sm font-medium">Iniciar</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="md:hidden relative z-10" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 backdrop-blur-sm bg-black/10" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20 max-[330px]:pl-10">
                                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                    <Dialog.Panel className="pointer-events-auto w-[400px] min-w-[180px]">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-zinc-950 shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-5 py-4">
                                                <div className="flex items-center justify-between">
                                                    <Link href="/" className="px-1.5 flex items-center">
                                                        <span className="sr-only">Onlypaks logo</span>
                                                        <Image className="w-auto h-auto" width={100} height={28} src="https://icons.onlypaks.com/iconmenu.svg" alt="Onlypaks logo" />
                                                    </Link>
                                                    <div className="ml-3 flex items-center">
                                                        <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setOpen(false)}>
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-7 w-7" stroke="#F49200" strokeWidth={2} aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-1">
                                                    <div className="flow-root">
                                                        <div className="flex py-5">
                                                            <Link href="/upload" className="float-left text-center relative w-[33%]">
                                                                <div className="rounded-full bg-neutral-900 hover:bg-neutral-800 w-[60px] h-[60px] relative mt-0 mx-auto mb-2">
                                                                    <CloudArrowUpIcon className="h-7 w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="white" strokeWidth={2} aria-hidden="true" />
                                                                </div>
                                                                <span className="text-sm text-white">Subir</span>
                                                            </Link>
                                                            <Link href="/support" className="float-left text-center relative w-[33%]">
                                                                <div className="rounded-full bg-neutral-900 hover:bg-neutral-800 w-[60px] h-[60px] relative mt-0 mx-auto mb-2">
                                                                    <QuestionMarkCircleIcon className="h-7 w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="white" strokeWidth={2} aria-hidden="true" />
                                                                </div>
                                                                <span className="text-sm text-white">Soporte</span>
                                                            </Link>
                                                            <Link href="/about" className="float-left text-center relative w-[33%]">
                                                                <div className="rounded-full bg-neutral-900 hover:bg-neutral-800 w-[60px] h-[60px] relative mt-0 mx-auto mb-2">
                                                                    <InformationCircleIcon className="h-7 w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="white" strokeWidth={2} aria-hidden="true" />
                                                                </div>
                                                                <span className="text-sm text-white">Acerca</span>
                                                            </Link>
                                                        </div>
                                                        <div className="space-y-4 mt-4 pb-4">
                                                            <Link href="/homemade" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                <FireIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />Caseros
                                                            </Link>
                                                            <Link href="/images" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                <PhotoIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />Imagenes
                                                            </Link>
                                                            <Link href="/live" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                <ViewfinderCircleIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />En vivo
                                                            </Link>
                                                            <Link href="/gifs" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3.5 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                <GifIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />Gifs
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
