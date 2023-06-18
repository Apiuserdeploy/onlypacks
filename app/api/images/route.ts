import { NextResponse } from 'next/server';
import { connectMongoDb } from '../libs/mongoose';
import Images from '../models/Images';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get('search') ?? '';

    try {
        await connectMongoDb();

        const images = await Images.aggregate([
            {
                $match: {
                    $or: [
                        { category: { $regex: searchTerm, $options: 'i' } },
                        { actress: { $regex: searchTerm, $options: 'i' } },
                        { labels: { $regex: searchTerm, $options: 'i' } }
                    ]
                }
            }
        ]);

        return NextResponse.json({ "status": "success", "data": images });

    } catch (error: any) {
        return NextResponse.json({ "status": "fail", "error": error.message });
    }

}

