import Link from "next/link"
import Image from "next/image";

const fetchImages = async (actress: string) => {
    // return await fetch("", { next: { revalidate: 60 })
    //   .then(response => response.json())
    //   .catch(error => error.json());

    const res = await fetch(`http://localhost:3000/api/actress?actress=${actress}`, { next: { revalidate: 60 } })
    const data = await res.json()

    return data
}

export default async function page({ params }: any) {

    const { actress } = params

    const categories = await fetchImages(actress)

    const holas = categories.data

    return (
        <div className="py-5 px-5 md:px-24">
            <h1 className="text-white text-sm font-medium">Modelos: {holas.actress}</h1>
            <div className="flex items-center relative">
                <div className="scrollbar flex whitespace-nowrap overflow-x-auto">
                    {holas.images.map((hola: any, _id: any) => (
                        <Image className="h-full w-full p-2" sizes="(min-width: 768px) 50vw, 100%" width="50" height="50" src={hola} alt="YouPacks logo" />
                    ))}
                </div>
            </div>
            <h2></h2>
        </div>
    )
}

