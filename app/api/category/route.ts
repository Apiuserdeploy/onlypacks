import { NextResponse } from 'next/server';
import { connectMongoDb } from '../libs/mongoose';
import Categories from '../models/Categories';

export async function GET() {
    try {
        await connectMongoDb();
        const category = await Categories.find();
        return NextResponse.json({ "status": "success", "data": category });
    } catch (error: any) {
        return NextResponse.json({ "status": "fail", "error": error.message });
    }
}