import Link from "next/link";
import Image from "next/image";
import Navphotos from "../components/navPhotos/Navphotos";
import { CategoryProps } from "../interfaces/CategoryProps";

const fetchCategory = async () => {
  const res = await fetch(`https://hello-world.apiuserdeploy.workers.dev`, {
    next: { revalidate: 60 },
    headers: { "x-access-token": `${process.env.TOKEN_API}` },
  });

  const categories = await res.json()

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return categories.data.documents as CategoryProps[]
};

export default async function Page() {
  const categories = await fetchCategory();

  return (
    <div className="mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-8">
      <Navphotos title="Principales categorías porno" />
      <div className="gap-5 columns-1 min-[450px]:columns-2 md:columns-3 lg:columns-4 2xl:columns-5">
        {categories.map((category) => (
          <Link key={category._id} href={`/photos/${category.params}`} >
            <div className="mb-5 break-inside-avoid-column">
              <span className="text-white text-sm absolute z-[2] p-1.5 rounded-md thumbwook">{category.category}</span>
              <Image className="w-full h-full rounded-md" src={category.image} height="400" width="600" alt="Imagen de la categoria" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}