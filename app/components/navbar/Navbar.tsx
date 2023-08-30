"use client"

import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon, StarIcon as StarIconOutline, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { StarIcon, CloudArrowUpIcon, QuestionMarkCircleIcon, InformationCircleIcon, FireIcon, PhotoIcon, ViewfinderCircleIcon, GifIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [clear, setClear] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const [openSearch, setOpenSearch] = useState(false)

    const handleInputClear = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setClear(false)
    };

    return (
        <>
            <nav className='bg-zinc-950'>
                <div className='mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-8'>
                    <div className="flex h-[60px] items-center justify-between gap-3">
                        <div className="flex md:hidden">
                            <button type="button" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpenSearch(!openSearch)}>
                                <span className="sr-only">Open menu</span>
                                <MagnifyingGlassIcon className="h-8 w-[26px]" stroke="#ccc" strokeWidth={3} aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden md:flex shrink-0">
                            <Link href="/">
                                <span className="sr-only">Onlypaks</span>
                                <Image width={146} height={41} src="https://icons.onlypaks.com/icon.svg" alt="Onlypaks logo" />
                            </Link>
                        </div>
                        <div className="flex shrink-0 md:hidden">
                            <Link href="/">
                                <span className="sr-only">Onlypaks</span>
                                <Image width={103} height={26} src="https://icons.onlypaks.com/icon.svg" alt="Onlypaks logo" />
                            </Link>
                        </div>
                        <Transition.Root show={openSearch} as={Fragment}>
                            <Dialog as="div" className="md:hidden fixed inset-0 z-50" onClose={setOpenSearch}>
                                <Transition.Child as={Fragment} enter="ease-out duration-100" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                    <div className="fixed inset-0 backdrop-blur-sm dark:bg-black/40 opacity-100" />
                                </Transition.Child>
                                <div className="fixed inset-0 overflow-y-auto px-4 py-2.5 sm:px-6">
                                    <div className="mx-auto sm:max-w-xl opacity-100 scale-100" data-headlessui-state="open">
                                        <Transition.Child as={Fragment} enter="ease-out duration-100" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                            <Dialog.Panel className="pointer-events-auto">
                                                <div role="combobox" aria-expanded="false" aria-haspopup="listbox" className="flex">
                                                    <form action="" role="search" className="relative flex-1">
                                                        <span className="sr-only">Search</span>
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" width="20px" height="20px">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                            </svg>
                                                        </span>
                                                        <input type="text" name="search" id="search" ref={inputRef} onChange={() => setClear(inputRef.current?.value !== "")} className="placeholder:italic block w-full rounded-full border-0 py-2 pl-12 pr-6 min-[435px]:pr-11 bg-neutral-800 text-white focus:outline-none [&amp;::-webkit-search-cancel-button]:hidden [&amp;::-webkit-search-decoration]:hidden [&amp;::-webkit-search-results-button]:hidden [&amp;::-webkit-search-results-decoration]:hidden" aria-autocomplete="both" aria-labelledby=":r1:-label" autoComplete="off" autoCorrect="off" autoCapitalize="off" enterKeyHint="search" spellCheck="false" placeholder="Buscar en onlyPaks..." />
                                                        {clear &&
                                                            <span className="max-[435px]:hidden absolute inset-y-0 right-0 flex items-center pr-3">
                                                                <button type="button" onClick={handleInputClear} className="rounded-full bg-neutral-500 hover:bg-neutral-400 p-[2px]">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} width="16px" height="16px" className="stroke-neutral-800" >
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        }
                                                    </form>
                                                    <button className="text-white pl-4 min-[436px]:pl-8" onClick={() => setOpenSearch(!openSearch)}>Cancelar</button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition.Root>
                        <div className="hidden md:flex items-center flex-1 px-3 min-[350px]:px-7 md:ml-4 gap-10">
                            <div className="w-[128px] grow max-w-lg">
                                <div className="relative">
                                    <span className="sr-only">Search</span>
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" width="20px" height="20px">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </span>
                                    <input type="text" name="search" id="search" ref={inputRef} onChange={() => setClear(inputRef.current?.value !== "")} className="placeholder:italic block w-full rounded-full border-0 py-2 pl-12 pr-6 min-[435px]:pr-11 bg-neutral-800 text-white focus:outline-none focus:ring-1 ring-zinc-700 [&amp;::-webkit-search-cancel-button]:hidden [&amp;::-webkit-search-decoration]:hidden [&amp;::-webkit-search-results-button]:hidden [&amp;::-webkit-search-results-decoration]:hidden" aria-autocomplete="both" aria-labelledby=":r1:-label" autoComplete="off" autoCorrect="off" autoCapitalize="off" enterKeyHint="search" spellCheck="false" placeholder="Buscar en onlyPaks..." />
                                    {clear &&
                                        <span className="max-[435px]:hidden absolute inset-y-0 right-0 flex items-center pr-3">
                                            <button type="button" onClick={handleInputClear} className="rounded-full bg-neutral-500 hover:bg-neutral-400 p-[2px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} width="16px" height="16px" className="stroke-neutral-800" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-5">
                                <Link href="/upload">
                                    <span>
                                        <CloudArrowUpIcon className="h-8 w-8" fill="white" aria-hidden="true" />
                                    </span>
                                </Link>
                                <Link href="/support">
                                    <span>
                                        <QuestionMarkCircleIcon className="h-8 w-8" fill="white" aria-hidden="true" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex md:hidden">
                            <button type="button" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpen(!open)}>
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-8 w-8" stroke="#F49200" strokeWidth={2} aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden md:flex">
                            <Link href="/update" className="hidden md:flex items-center gap-x-1 bg-amber-500 hover:bg-amber-600 text-black rounded-md px-3 py-0.5 font-medium">
                                <StarIcon className="h-4 w-4" fill="black" strokeWidth={2} aria-hidden="true" />Actualizar
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="md:hidden relative z-10" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 backdrop-blur-sm dark:bg-black/40 opacity-100" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20 max-[330px]:pl-10">
                                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                    <Dialog.Panel className="pointer-events-auto w-[400px]">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-zinc-950 shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-3 py-4">
                                                <div className="flex items-center justify-between">
                                                    <Link href="/" className=" flex items-center">
                                                        <span className="sr-only">Onlypaks logo</span>
                                                        <Image className="w-auto h-auto" width={100} height={28} src="https://icons.onlypaks.com/iconmenu.svg" alt="Onlypaks logo" />
                                                    </Link>
                                                    <div className="ml-3 flex items-center">
                                                        <button type="button" onClick={() => setOpen(false)}>
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
                                                        <div className="divide-y divide-neutral-900">
                                                            <div className="space-y-4 pt-5 pb-6">
                                                                <Link href="/homemade" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                    <FireIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />Caseros
                                                                </Link>
                                                                <Link href="/images" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                    <PhotoIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />Imagenes
                                                                </Link>
                                                                <Link href="/live" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                    <ViewfinderCircleIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />En vivo
                                                                </Link>
                                                                <Link href="/gifs" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3 text-sm whitespace-nowrap text-white bg-neutral-900 hover:bg-neutral-800">
                                                                    <GifIcon className="h-7 w-7" fill="white" strokeWidth={2} aria-hidden="true" />Gifs
                                                                </Link>
                                                            </div>
                                                            <div className="pt-6">
                                                                <Link href="/gifs" className="flex items-center gap-x-3 rounded-[12px] px-3 py-3 text-sm whitespace-nowrap text-white bg-[#F49200] hover:bg-amber-600">
                                                                    <StarIconOutline className="h-7 w-7" strokeWidth={2} aria-hidden="true" />Actualizar
                                                                </Link>
                                                            </div>
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