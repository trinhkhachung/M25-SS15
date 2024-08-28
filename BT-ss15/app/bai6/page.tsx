"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(res.data)
        }
        getData()
    },[])
  return (
    <div>
        <div>Danh sách người dùng:</div>
        {data.map((item:any)=>{
            return <ul key={item.id} className='p-3'>
                <li>Tên: {item.name}</li>
                <li>Địa chỉ: {item.address.street}-{item.address.suite}-{item.address.city}</li>
                <li>Email: {item.email}</li>
                <li>------------------------------------------------------</li>
            </ul>
        })}
    </div>
  )
}
