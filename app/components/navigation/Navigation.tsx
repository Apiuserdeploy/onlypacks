'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname()

    const routeName = [
        { name: "CASEROS", route: "/" },
        { name: "IMAGENES", route: "/images" },
        { name: "GIFS", route: "/gifs" },
        { name: "EN VIVO", route: "/live" },
    ];

    const getRouteClass = (route: string) => {
        if (pathname === route) {
            return 'bg-amber-500';
        } else if ((pathname === '/photos' || pathname === '/new' || pathname === '/popular') && route === '/photos') {
            return 'bg-amber-500'
        }
        return ''
    }

    return (
        <div className="bg-zinc-950">
            <div className="mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-48">
                <ul className="flex flex-nowrap">
                    {routeName.map((route) => (
                        <li className="flex-1" key={route.route}>
                            <Link className="grid text-white text-[10px] md:text-xs md:font-medium whitespace-nowrap border-x-[1px] border-t-[1px] border-transparent hover:bg-neutral-900 hover:border-x-[1px] hover:border-t-[1px] hover:border-neutral-800 active:bg-transparent" aria-current="location" href={route.route}>
                                <span className="my-[10px] mx-0 w-full text-center">
                                    {route.name}
                                    <span className={`${getRouteClass(route.route)} w-full h-[1px] md:h-[2px] my-0 mx-auto top-[9px] relative block`}></span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}