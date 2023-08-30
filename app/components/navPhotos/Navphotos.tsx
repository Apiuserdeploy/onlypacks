"use client"

import Link from 'next/link'
import React, { useState, Fragment } from 'react'
import { Dialog, Listbox, Menu, Popover, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { NavProps } from '@/app/interfaces/NavProps';
import { ArrowTrendingUpIcon, ChevronUpIcon, ChevronDownIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

import { Tab, } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

var categories = [
    { name: "View all", search: "" },
    { name: "Abuelita", search: "abuelita" },
    { name: "Adolescente", search: "adolescente" },
    { name: "Aficionado", search: "aficionado" },
    { name: "Africano", search: "africano" },
    { name: "Agujero De Culo", search: "agujero de culo" },
    { name: "Alto", search: "alto" },
    { name: "Anal", search: "anal" },
    { name: "Anciano", search: "anciano" },
    { name: "Argentina", search: "argentina" },
    { name: "Asiático", search: "asiático" },
    { name: "Audición", search: "audición" },
    { name: "Bajo la falda", search: "bajo la falda" },
    { name: "BDSM", search: "bdsm" },
    { name: "Beso Negro", search: "beso negro" },
    { name: "Bikini", search: "bikini" },
    { name: "Blanco", search: "blanco" },
    { name: "Bragas", search: "bragas" },
    { name: "Brasileño", search: "brasileño" },
    { name: "Bukkake", search: "bukkake" },
    { name: "Cabello corto", search: "cabello corto" },
    { name: "Cameltoe", search: "cameltoe" },
    { name: "Casero", search: "casero" },
    { name: "Chino", search: "chino" },
    { name: "Clítoris Grande", search: "clítoris grande" },
    { name: "Colegiala", search: "colegiala" },
    { name: "Colombiana", search: "colombiana" },
    { name: "Coreano", search: "coreano" },
    { name: "Cornudo", search: "cornudo" },
    { name: "Corrida", search: "corrida" },
    { name: "Corrida En El Coño", search: "corrida en el coño" },
    { name: "Corrida En La Boca", search: "corrida en la boca" },
    { name: "Corrida Interna", search: "corrida interna" },
    { name: "Cosplay", search: "cosplay" },
    { name: "Coño", search: "coño" },
    { name: "Criada", search: "criada" },
    { name: "Culo Boquiabierto", search: "culo boquiabierto" },
    { name: "Culos", search: "culos" },
    { name: "Curvilínea", search: "curvilínea" },
    { name: "Dildo", search: "dildo" },
    { name: "Doble Penetración", search: "doble penetración" },
    { name: "Ducha", search: "ducha" },
    { name: "Embarazada", search: "embarazada" },
    { name: "Enfermera", search: "enfermera" },
    { name: "Esposa", search: "esposa" },
    { name: "Estilo Perrito", search: "estilo perrito" },
    { name: "Estrella porno", search: "estrella porno" },
    { name: "Facial", search: "facial" },
    { name: "Falda", search: "falda" },
    { name: "Flaca", search: "flaca" },
    { name: "Gangbang", search: "gangbang" },
    { name: "Garganta Profunda", search: "garganta profunda" },
    { name: "Gay", search: "gay" },
    { name: "Gemelos", search: "gemelos" },
    { name: "Gimnasio", search: "gimnasio" },
    { name: "Gloryhole", search: "gloryhole" },
    { name: "Gordas", search: "gordas" },
    { name: "Gótico", search: "gótico" },
    { name: "Hermoso", search: "hermoso" },
    { name: "Indio", search: "indio" },
    { name: "Interracial", search: "interracial" },
    { name: "Japonés", search: "japonés" },
    { name: "Jeans", search: "jeans" },
    { name: "Ladyboy", search: "ladyboy" },
    { name: "Latino", search: "latino" },
    { name: "Lencería", search: "lencería" },
    { name: "Lentes", search: "lentes" },
    { name: "Lesbiana", search: "lesbiana" },
    { name: "Lindo", search: "lindo" },
    { name: "Madura", search: "madura" },
    { name: "Maduro", search: "maduro" },
    { name: "Maestro", search: "maestro" },
    { name: "Mamada", search: "mamada" },
    { name: "Mamá", search: "mamá" },
    { name: "Medias", search: "medias" },
    { name: "Mexicano", search: "mexicano" },
    { name: "Milf", search: "milf" },
    { name: "Morena", search: "morena" },
    { name: "Negra", search: "negra" },
    { name: "Orgía", search: "orgía" },
    { name: "Paja", search: "paja" },
    { name: "Paja con los Pies", search: "paja con los pies" },
    { name: "Pantalones cortos", search: "pantalones cortos" },
    { name: "Pantimedias", search: "pantimedias" },
    { name: "PAWG", search: "pawg" },
    { name: 'Pelirroja', search: 'pelirroja' },
    { name: 'Peludo', search: 'peludo' },
    { name: 'Petite', search: 'petite' },
    { name: 'Piernas', search: 'piernas' },
    { name: 'Pies', search: 'pies' },
    { name: 'Playa', search: 'playa' },
    { name: 'Polla Grande', search: 'polla grande' },
    { name: 'Punto de vista', search: 'punto de vista' },
    { name: 'Público', search: 'público' },
    { name: 'Regordeta', search: 'regordeta' },
    { name: 'Rubia', search: 'rubia' },
    { name: 'Ruso', search: 'ruso' },
    { name: 'Sandalias', search: 'sandalias' },
    { name: 'Secretaria', search: 'secretaria' },
    { name: 'Selfie', search: 'selfie' },
    { name: 'Solitario', search: 'solitario' },
    { name: 'Tacones', search: 'tacones' },
    { name: 'Tailandés', search: 'tailandés' },
    { name: 'Tanga', search: 'tanga' },
    { name: 'Tatuaje', search: 'tatuaje' },
    { name: 'Tetas caídas', search: 'tetas caídas' },
    { name: 'Tetas Grandes', search: 'tetas grandes' },
    { name: 'Tetas Naturales', search: 'tetas naturales' },
    { name: 'Transexual', search: 'transexual' },
    { name: 'Trío', search: 'trío' },
    { name: 'Vaquera', search: 'vaquera' },
    { name: 'Venezuela', search: 'venezuela' },
    { name: 'Vestido', search: 'vestido' },
    { name: 'Viejo Joven', search: 'viejo joven' },
    { name: 'Vintage', search: 'vintage' },
    { name: 'Webcams', search: 'webcams' },
    { name: 'Yoga', search: 'yoga' },
    { name: 'Árabe', search: 'árabe' }
]

const filters = [
    { name: "Nuevo", route: "new" },
    { name: "Popular", route: "popular" },
    { name: "Los mas gustados", route: "gustados" }
]

const Navfotos: React.FC<NavProps> = ({ title }) => {



    const [open, setOpen] = useState(false)

    const pathname = usePathname()
    const [openCategory, setOpenCategory] = useState(false);
    const [openFilters, setOpenFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState(filters[0])
    const [isMouseInside, setIsMouseInside] = useState(false);

    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const handleMouseEnter = () => {
        setOpenCategory(true)
        console.log("yes")
    };

    const handleMouseLeave = () => {
        setOpenCategory(false)
        console.log("no")
    };

    return (
        <div className="py-5">

            <div className="md:flex md:justify-between md:items-center">

                <h1 className="text-lg md:text-xl font-medium leading-7 text-white sm:truncate sm:tracking-tight">
                    {title}
                </h1>

                <div className="mt-5 md:mt-0">

                    <ul className="flex h-full space-x-2 md:space-x-4 whitespace-nowrap scrollbar max-[768px]:overflow-x-auto">

                        <li className='flex'>

                            <Menu as="div" className="flex">

                                <div className='relative flex'>
                                    <Menu.Button className="inline-flex items-center justify-center cursor-default rounded-lg border-2 md:border-0 text-base md:text-sm text-white border-neutral-800 py-1 md:py-0 px-3" onClick={() => setOpenCategory(!openCategory)}>
                                        Category
                                        {openCategory ?
                                            <ChevronUpIcon className="ml-3 h-4 w-4" stroke="white" strokeWidth={2} aria-hidden="true" />
                                            :
                                            <ChevronDownIcon className="ml-3 h-4 w-4" stroke="white" strokeWidth={2} aria-hidden="true" />
                                        }
                                    </Menu.Button>
                                </div>

                                <div className='hidden md:block'>
                                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                        <div className='absolute z-20 inset-x-0 backdrop-blur-sm bg-black/90 pb-4 mt-11'>
                                            <div className="mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-8">
                                                <Menu.Items className="grid md:grid-cols-4 min-[968px]:grid-cols-5 min-[1168px]:grid-cols-6">
                                                    {categories.map((route) => (
                                                        <Menu.Item key={route.name}>
                                                            <Link className='block text-white text-sm whitespace-nowrap text-left rounded-lg bg-transparent hover:bg-neutral-800 py-1 px-4' aria-current="location" href={route.name}>
                                                                {route.name}
                                                            </Link>
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </Menu>

                        </li>

                        <li className="hidden md:block">

                            <Listbox value={selectedFilters} onChange={setSelectedFilters}>
                                <div className="relative">
                                    <Listbox.Button className="inline-flex items-center justify-center cursor-default rounded-lg border-0 text-sm text-white border-neutral-800 px-3" onClick={() => setOpenCategory(false)}>
                                        {selectedFilters.name}
                                        {openFilters ?
                                            <ChevronUpIcon className="ml-3 w-4" stroke="white" strokeWidth={2} aria-hidden="true" />
                                            :
                                            <ChevronDownIcon className="ml-3 w-4" stroke="white" strokeWidth={2} aria-hidden="true" />
                                        }
                                    </Listbox.Button>
                                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                                        <Listbox.Options className="absolute right-0 z-10 mt-5 w-[195px] py-1 origin-top-right rounded-md backdrop-blur-sm bg-black/90 focus:outline-none">
                                            {filters.map((filters) => (
                                                <Listbox.Option key={filters.route} className="relative cursor-default select-none py-2 px-4 text-center text-xs text-white hover:bg-neutral-800" value={filters} >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate text-sm ${selected ? 'text-amber-600' : ''
                                                                    }`}
                                                            >
                                                                {filters.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>

                        </li>

                        {filters.map((filter) => (
                            <li key={filter.name} className='md:hidden flex'>
                                <Link className="text-center text-white text-base whitespace-nowrap rounded-lg border-2 border-neutral-800 hover:bg-neutral-800 py-[5px] px-3.5" aria-current="location" href={filter.route}>
                                    {filter.name}
                                </Link>
                            </li>
                        ))}

                    </ul>

                </div>

                <div className="md:hidden md:absolute md:z-20 md:inset-x-0 rounded-md backdrop-blur-sm bg-black/90">
                    <div className="max-w-screen-xl md:px-10 mx-auto">
                        <Transition show={openCategory} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <div className='md:hidden flex items-center justify-between rounded-lg border-2 border-neutral-800'>
                                <button type="button" className="p-1" onClick={() => setOpenCategory(false)}>
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon className="h-[26px] w-24px" stroke="white" strokeWidth={2} aria-hidden="true" />
                                </button>
                                <button type="button" className="p-2 text-white text-xs" onClick={() => setOpenCategory(false)}>
                                    <span className="sr-only">Reset filters</span>
                                    Restablecer filtros
                                </button>
                            </div>
                            <h4 className="md:hidden text-white text-sm text-center my-4">Categorias</h4>
                            <ul className="grid gap-4 md:gap-0 grid-cols-1 min-[350px]:grid-cols-2 min-[550px]:grid-cols-3 md:grid-cols-4 min-[968px]:grid-cols-5 min-[1168px]:grid-cols-6" aria-labelledby="mega-menu-dropdown-button">
                                {categories.map((route) => (
                                    <li className='w-full' key={route.name}>
                                        <Link className='block text-white text-xs md:text-sm whitespace-nowrap text-center md:text-left rounded-lg bg-neutral-900 md:bg-transparent hover:bg-neutral-800 py-2 md:py-1 px-4' aria-current="location" href={route.name}>
                                            {route.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Transition>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navfotos