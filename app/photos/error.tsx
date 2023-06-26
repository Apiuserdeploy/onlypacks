'use client'

import { useRouter } from 'next/navigation';

export default function Error() {

    const router = useRouter();
    // Or a custom error skeleton component
    return (
        <div className="flex justify-center items-center h-[85vh] min-w-[260px]">
            <button onClick={() => router.push('/photos')} className="bg-amber-500 hover:bg-amber-600 text-black rounded-md p-1.5 font-medium">Vuelver a cargar la pagina</button>
        </div>
    )
}