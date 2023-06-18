import { NextResponse } from 'next/server';
import { connectMongoDb } from '../libs/mongoose';
import Categories from '../models/Categories';
import { headers } from 'next/dist/client/components/headers';

export async function GET() {

    const headersList = headers();
    const token = headersList.get('x-access-token');

    if (token !== process.env.TOKEN) {
        return NextResponse.json({ status: "fail", error: "Invalid token" }, { status: 401});
    }
    
    try {
        await connectMongoDb();
        const category = await Categories.find();
        return NextResponse.json({ status: "success", data: category }, { status: 200});
    } catch (error: any) {
        return NextResponse.json({ status: "fail", error: error.message }, { status: 500});
    }
}