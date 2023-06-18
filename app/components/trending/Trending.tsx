"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { navRoute } from "../../../public/navRoute"

export default function Trending() {

    const containerRef = useRef<HTMLUListElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    const scrollContainer = (direction: number) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth / 2; // Desplazamiento en la mitad del ancho del contenedor
            container.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollPosition = () => {
        const container = containerRef.current;
        if (container) {
            const showLeft = container.scrollLeft > 0;
            setShowLeftButton(showLeft);

            const showRight = container.scrollLeft < container.scrollWidth - container.clientWidth;         
            setShowRightButton(showRight);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleScroll = () => {
                checkScrollPosition();
            };

            container.addEventListener('scroll', handleScroll);
            checkScrollPosition();

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <>

            <h1 className="text-gray-300 text-sm md:text-xl font-medium flex items-center gap-x-2">Packs porno calientes internacionalmente
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
            </h1>

            <div className="mt-5 flex items-center relative">

                {showLeftButton && (
                    <div className="bg-gradient-to-r from-black via-black absolute pr-5 py-2" onClick={() => scrollContainer(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                )}

                <ul ref={containerRef} className="scrollbar flex whitespace-nowrap overflow-x-auto">
                    {navRoute.map(({ route, name }) => (
                        <li className="bg-zinc-950 hover:bg-neutral-800 rounded-full border-2 border-neutral-800 mr-2 md:mr-3 px-3 md:px-5 py-1.5" key={name}>
                            <Link className="text-white text-sm sm:text-base whitespace-nowrap" aria-current="location" href={route}>{name}</Link>
                        </li>
                    ))}
                </ul>

                {showRightButton && (
                    <div className="bg-gradient-to-l from-black via-black absolute right-0 pl-5 py-2" onClick={() => scrollContainer(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    
                )}

            </div>

        </>
    )
}