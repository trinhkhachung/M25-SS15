import React from 'react'
import Image from 'next/image';
export default async function page() {
  async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json()
    return data;
}
const posts = await getData();
  return (
    <div className='p-3'>
        <div className='font-bold'>List post</div>      
        {posts.map((item:any)=>{
            return <ul>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>
              <Image src={item.image} height={500} width={500} alt=''></Image>
            </li>
            <li>-------------------------------------</li>
            </ul>
        })}  
    </div>
  )
}
