"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            let res = await axios.get(" https://fakestoreapi.com/products")
            setData(res.data)
        }
        getData()
    },[])
  return (
    <div>
        <div>Danh sách sản phẩm:</div>
        {data.map((item:any)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </div>
  )
}
