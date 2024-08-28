import { NextResponse } from "next/server";
async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json()
    return data;
}
export async function GET() {
    const posts = await getData();
    return NextResponse.json(posts);    
}