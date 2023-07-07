import Link from "next/link"
import Navphotos from "../components/navPhotos/Navphotos";

export default async function page() {

 

  return (
    <div className="py-5 px-5 md:px-24 min-w-[270px]">
       <Navphotos title="Fotos recientes"/>
     

    </div>
  )
}
