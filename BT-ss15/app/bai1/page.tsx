import React from 'react'
export default async function page() {
  async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json()
    return data;
}
const posts = await getData();
  return (
    <div>
        <div className='font-bold'>List post</div>      
        {posts.map((item:any)=>{
            return <li>{item.title}</li>
        })}  
    </div>
  )
}
