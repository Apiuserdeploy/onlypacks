import Link from "next/link";
import Image from "next/image";
import Navphotos from "../components/navPhotos/Navphotos";
import { Category } from "../interfaces/Category";

const fetchCategory = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/category", { headers: { "x-access-token": `Bearer ${process.env.DB_HOST}` } });
    const categories = await res.json()
    return { data: categories.data as Category[], revalidate: 60 }
  } catch (error: any) {
    throw new Error("Failed to fetch posts, received error: " + error.message);
  }
};

export default async function Page() {

  const categories = await fetchCategory()

  return (
    <div className="py-5 px-5 md:px-24 min-w-[270px]">  
      <Navphotos title="Principales categorías porno" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mt-10">
        {categories.data.map((category) => (
          <Link className="group" key={category._id} href={`/photos/${category.params}`} >
            <h3 className="text-white text-sm absolute p-1.5 rounded-lg thumbwook">{category.category}</h3>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image className="h-full w-full" src={category.image}   alt="Imagen de la categoria" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
