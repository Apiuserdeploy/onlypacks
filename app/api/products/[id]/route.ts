import { NextResponse } from 'next/server';
// import jsonData from './products.json';

export async function GET(request: Request) {

  const  searchParams = request.url.slice(request.url.lastIndexOf('/') + 1 )

  return NextResponse.json( "hola " + searchParams );

}