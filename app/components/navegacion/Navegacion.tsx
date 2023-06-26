'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navegacion() {

    const routeName = [
        { name: "CASEROS", route: "/" },
        { name: "FOTOS", route: "/photos" },
        { name: "EN VIVO", route: "/live" },
        { name: "PRODU", route: "/produ" }
    ];

    const getRouteClass = (route: string) => {
        const pathname = usePathname()

        if (pathname === route) {
            return 'border-b-2 border-amber-500';
        } else if ((pathname === '/photos' || pathname === '/new' || pathname === '/popular') && route === '/photos') {
            return 'border-b-2 border-amber-500'
        }
        return ''
    }

    return (
        <div className='bg-zinc-950 mt-1 min-w-[260px] sm:px-10 md:px-14 lg:px-52 xl:px-64'>
            <ul className="flex justify-evenly">
                {routeName.map((route) => (
                    <li className={`${getRouteClass(route.route)} w-full hover:bg-neutral-800`} key={route.route}>
                        <Link className='text-white text-[10px] md:text-xs whitespace-nowrap flex justify-center py-3' aria-current="location" href={route.route}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}