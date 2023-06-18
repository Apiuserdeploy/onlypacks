import Link from "next/link"
import Navphotos from "../components/navPhotos/Navphotos";

const fetchCategory = async () => {
  // return await fetch("", { next: { revalidate: 60 })
  //   .then(response => response.json())
  //   .catch(error => error.json());


  const res = await fetch(`http://localhost:3000/api/category`, { next: { revalidate: 60 } })
  const data = await res.json()

  return data
}

export default async function page() {

  const categories = await fetchCategory()

  const holas = categories.data

  return (
    <div className="py-5 px-5 md:px-24 min-w-[270px]">
       <Navphotos title="Fotos recientes"/>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mt-10">
        {holas.map((hola: any, _id: any) => (
          <Link key={_id} href={`/fotos/${hola.params}`} className="group">
            <h3 className="text-white text-sm absolute p-1.5 rounded-lg thumbwook">{hola.category}</h3>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img src={hola.image} alt="Imagen del producto" className="h-full w-full" />
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
