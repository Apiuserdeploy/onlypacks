import Link from "next/link";
import Image from "next/image";
import Navphotos from "../components/navPhotos/Navphotos";
import { CategoryProps } from "../interfaces/CategoryProps";

const fetchCategory = async () => {
  
   // Configurar los encabezados de la solicitud
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   myHeaders.append("Access-Control-Request-Headers", "*");
   myHeaders.append("api-key", "qxVje0EsNs99LA9l56EDRPdPc8QKLtetml1YcmzoaLDxBiGrIIChyLOXi81AByzo");
 
   // Configurar el cuerpo de la solicitud
   const raw = JSON.stringify({
     "collection": "categories",
     "database": "onlypacks",
     "dataSource": "onlypacks"
   });
 
   // Configurar las opciones de la solicitud
   const requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow' as RequestRedirect // Ajustar el tipo de redirect
   };
 
   // Realizar la solicitud
   const res = await fetch("https://data.mongodb-api.com/app/data-bbmcp/endpoint/data/v1/action/find", requestOptions);

  const categories = await res.json()


  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return categories.documents as CategoryProps[]
};

export default async function Page() {

  const categories = await fetchCategory();

  return (
    <div className="py-5 px-5 md:px-14 lg:px-24 xl:px-32 min-w-[275px]">
      <Navphotos title="Principales categorías porno" />
      <div className="gap-5 columns-1 min-[500px]:columns-2 md:columns-3 lg:columns-4 xl:columns-5 xl:gap-x-6 mt-10">
        {categories.map((category) => (
          <Link key={category._id} href={`/photos/${category.params}`} >
            <div className="mb-5 break-inside-avoid-column">
              <h3 className="text-white text-sm absolute p-1.5 rounded-lg thumbwook">{category.category}</h3>
              <div className="relative w-full">
                <Image className="w-full h-full rounded-lg" src={category.image} height="400" width="600" alt="Imagen de la categoria" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}