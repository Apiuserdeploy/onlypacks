'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navegacion() {

    const pathname = usePathname()

    const navRoute = [
        {
            name: "CASEROS",
            route: "/",
        },
        {
            name: "FOTOS",
            route: "/fotos"
        },
        {
            name: "EN VIVO",
            route: "/vivo"
        },
        {
            name: "PRODUCTOS",
            route: "/productos"
        },
    ]

    return (
        <div className='bg-zinc-950 mt-1'>
            <ul className="flex justify-evenly flex-nowrap min-w-[250px]">
                {navRoute.map(({ route, name }) => (
                    <li className={` ${pathname === route ? 'border-b-2 border-amber-500' : ''} ${'py-1 px-3'}  `} key={route}>
                        <Link className="text-gray-300 hover:text-white sm:text-xs text-[9px] whitespace-nowrap" aria-current="location" href={route}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
