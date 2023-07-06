import { NextResponse } from 'next/server';
import { headers } from 'next/dist/client/components/headers';

export async function GET() {

    const headersList = headers();
    const token = headersList.get('x-access-token');

    if (token !== process.env.TOKEN_API) {
        return NextResponse.json({ status: "fail", error: "Invalid token" }, { status: 403 });
    }

    try {
       
        return NextResponse.json({ status: "success", data: "holas" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", error: error.message }, { status: 500 });
    }
}