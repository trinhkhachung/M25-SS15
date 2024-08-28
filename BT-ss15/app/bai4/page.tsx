"use client"
import useSWR from "swr"
import axios from "axios"

const getData = (url:string)=>
  axios.get(url)
  .then(res=>{
    return res.data
  })

export default function page() {
  const {data,error} = useSWR("https://example.com/invalid-endpoint",getData)
  if(error) return <div>Lỗi máy chủ</div>
  if(!data) return <div>đang tải dữ liệu . . . </div>
  return (
    <div>
      fetching data với thư viện swr
    {data.map((item:any)=>{
      return <li key={item.id}>{item.name}</li>
    })}
    </div>
  )
}