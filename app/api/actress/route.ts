import { NextResponse } from 'next/server';
import { connectMongoDb } from '../libs/mongoose';
import Actress from '../models/Actress';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const actressId = searchParams.get('actress') ?? '';

    try {
        await connectMongoDb();
        const actress = await Actress.findOne({ actressid: actressId })
        return NextResponse.json({ "status": "success", "data": actress });
    } catch (error: any) {
        return NextResponse.json({ "status": "fail", "error": error.message });
    }
}