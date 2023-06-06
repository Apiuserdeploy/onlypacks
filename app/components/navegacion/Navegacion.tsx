'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navegacion() {

    const pathname = usePathname()

    const routeName = [{ name: "CASEROS", route: "/" }, { name: "FOTOS", route: "/fotos" }, { name: "EN VIVO", route: "/vivo" }, { name: "PRODUCTOS", route: "/productos" }]

    return (
        <div className='bg-zinc-950 min-w-[270px] mt-1'>
            <ul className="flex justify-evenly">
                {routeName.map(({ route, name }) => (
                    <li className={` ${pathname === route ? 'border-b-2 border-amber-500' : ''} ${'py-1 px-3 md:px-9'}  `} key={route}>
                        <Link className="text-gray-300 hover:text-white text-[10px] md:text-xs whitespace-nowrap" aria-current="location" href={route}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
