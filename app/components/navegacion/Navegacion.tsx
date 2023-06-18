'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navegacion() {

    const pathname = usePathname()

    const routeName = [{ name: "CASEROS", route: "/" }, { name: "FOTOS", route: "/photos" }, { name: "EN VIVO", route: "/live" }, { name: "PRODUCTOS", route: "/products" }]

    const getRouteClass = (route: string) => {
        if (pathname === route) {
            return 'border-b-2 border-amber-500';
        } else if (
            (pathname === '/photos' || pathname === '/new' || pathname === '/popular') &&
            route === '/photos'
        ) {
            return 'border-b-2 border-amber-500'
        }
        return ''
     }

    return (
        <div className='bg-zinc-950 min-w-[270px] mt-1 px-5 md:px-24'>
            <ul className="flex justify-evenly">
                {routeName.map(({ route, name }) => (
                    <li className={`${getRouteClass(route)} py-1.5 px-3 sm:px-10 md:px-16`} key={route}>
                        <Link className="text-white hover:text-white text-[10px] md:text-xs whitespace-nowrap" aria-current="location" href={route}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}