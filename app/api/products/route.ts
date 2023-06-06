import { NextResponse } from 'next/server';
import jsonData from './products.json';

export async function GET() { 
  return NextResponse.json({ "status": "success", "data": jsonData });
}


// 

// delete
// export async function DELETE(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     return NextResponse.json({ id });
// }

// headers
// import { headers } from 'next/headers';

// export async function GET(request: Request) {

//     const headersList = headers();
//     const referer = headersList.get('referer');

//     return NextResponse.json( "message"+ referer );
// }

//sin parametro
// export async function GET(request: Request) {

//     const  searchParams = request.url.slice(request.url.lastIndexOf('/') + 1 )
  
//     return NextResponse.json( "hola " + searchParams );
  
//}

//parametro
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     return NextResponse.json({ id: id });
// }