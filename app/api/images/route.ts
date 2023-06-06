import { NextResponse } from 'next/server';
import { connectMongoDb } from '../libs/mongoose';
import Images from '../models/Images';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get('search') ?? '';

    try {
        await connectMongoDb();

        const regex = new RegExp(searchTerm, 'i'); // Crear una expresión regular con el término de búsqueda (ignorando mayúsculas y minúsculas)

        console.time('DB Query'); // Iniciar el temporizador

        const images = await Images.find({
            $or: [
                {category: regex }, // Buscar por actriz (coincidencia parcial)
                {name: regex }, // Buscar por actriz (coincidencia parcial)
                {actress: regex }, // Buscar por actriz (coincidencia parcial)
                {labels: regex }, // Buscar por actriz (coincidencia parcial)
            ]
        });

        console.timeEnd('DB Query'); // Detener el temporizador y mostrar el tiempo transcurrido

        // const images = await Images.aggregate([
        //     {
        //       $match: {
        //         $or: [
        //           { category: { $regex: searchTerm, $options: 'i' } },
        //           { name: { $regex: searchTerm, $options: 'i' } },
        //           { actress: { $regex: searchTerm, $options: 'i' } },
        //           { labels: { $regex: searchTerm, $options: 'i' } }
        //         ]
        //       }
        //     }
        //   ]).exec();




        return NextResponse.json({ "status": "success", "data": images });

    } catch (error: any) {
        return NextResponse.json({ "status": "fail", "error": error.message });
    }

}

