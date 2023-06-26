import Link from "next/link";
import Image from "next/image";
import Navphotos from "../components/navPhotos/Navphotos";
import { CategoryProps } from "../interfaces/CategoryProps";

const fetchCategory = async () => {
  const res = await fetch(`${process.env.HOST_NAME}/api/category`, {
    next: { revalidate: 10 },
    headers: { "x-access-token": `${process.env.TOKEN_API}` },
  });

  const categories = await res.json()

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return categories.data as CategoryProps[]
};

export default async function Page() {

  const categories = await fetchCategory()

  return (
    <div className="py-5 px-5 md:px-14 lg:px-24 xl:px-32 min-w-[260px]">
      <Navphotos title="Principales categorías porno" />
      <div className="grid gap-x-6 gap-y-10 grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mt-10">
        {categories.map((category) => (
          <Link className="group" key={category._id} href={`/photos/${category.params}`} >
            <h3 className="text-white text-sm absolute p-1.5 rounded-lg thumbwook">{category.category}</h3>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img className="w-full h-full" src={category.image} alt="Imagen de la categoria" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}