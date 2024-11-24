'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import instance from "@/utils/axiosInstance"
import IEvent from "@/features/creator/types"
import Loading from "./Loading"

interface IHeader {
  className?: string
}

const Header: React.FC<IHeader> = ({className}) => {
  const [searchingValue, setSearchingValue] = useState('')
  const [dataEvent, setDataEvent] = useState({})

  const filterEvent = async () => {
    const response = await instance.post("/event/get-filter-event",{
      filterName: searchingValue
    });
    setDataEvent(response.data.data)
    return response.data.data
  }

  const handleSearch = async () => {
    await filterEvent()
  }
  const {data, isLoading, error} = useQuery<IEvent[], Error>({
    queryKey: ["get-all-data"],
    queryFn: filterEvent
  })

  if(isLoading){
    return <Loading />
  }

  if(error){
    return <p>Error loading events: {error.message}</p>
  }
  
  if(!Array.isArray(data)){
    return <p>No events available</p>
  }

  // useEffect(()=>{
  //   const getDataEvent = async () =>{
  //     try {
  //       const res = await instance.get("event/all") 
        
  //       setDataEvent(res.data.data)
  //       console.log(dataEvent)
  //     } catch (error) {
        
  //     }
  //   }
  // },[])
  
  

  return (
    <header className="bg-[#ff6392] w-full min-h-min fixed z-10">
      <nav className={`m-auto w-full h-20 flex items-center justify-between border-b border-black px-20 ${className}`}>
        <div className="flex items-center justify-center">
          <Link href="/home" className="flex px-4 py-2.5  rounded-xl hover:cursor-pointer text-sm">         
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="119"
            fill="none"
            viewBox="0 0 594 119"
          >
            <path
              fill="#4D78B9"
              d="M34.213 95.792C15.14 95.792.292 82.224.292 62.384s14.848-33.408 33.92-33.408 33.92 13.568 33.92 33.408-14.848 33.408-33.92 33.408m0-7.296c12.672 0 19.712-10.752 19.712-26.112s-7.04-26.112-19.712-26.112S14.5 47.024 14.5 62.384s7.04 26.112 19.712 26.112M104.946 94H78.195l-1.024-1.024v-4.864l1.023-1.024h1.92c2.56 0 4.736-2.176 4.736-4.736V46.896c0-2.816-2.175-4.608-4.735-4.608h-1.92l-1.024-1.024v-3.2l.767-1.024 16.257-6.272h3.584l.895.896-1.152 9.344c4.737-7.296 12.289-12.032 22.401-12.032 13.184 0 22.144 7.424 22.144 21.504v31.872c0 2.56 2.176 4.736 4.736 4.736h1.92l1.024 1.024v4.864L148.723 94h-26.752l-1.024-1.024v-4.864l1.024-1.024h1.92c2.56 0 4.736-2.176 4.736-4.736V51.376c0-8.448-4.48-14.08-13.056-14.08-10.752 0-17.28 9.344-17.28 19.712v25.344c0 2.56 2.176 4.736 4.736 4.736h1.92l1.024 1.024v4.864zm100.072 1.792c-25.6 0-46.848-17.536-46.848-46.592s21.248-46.592 46.848-46.592c12.032 0 21.504 3.072 27.776 6.784l1.152 1.408 1.28 18.688-1.024 1.024h-6.912l-1.024-1.024-.256-2.304c-1.152-10.88-7.68-17.024-20.736-17.024-19.328 0-31.616 17.024-31.616 39.04s12.288 39.04 31.616 39.04c10.496 0 19.456-5.76 20.736-17.024l.256-2.304 1.024-1.024h6.912l1.024 1.024-1.28 18.688-1.152 1.408c-6.272 3.712-15.744 6.784-27.776 6.784M274.185 94h-26.752l-1.024-1.024v-4.864l1.024-1.024h1.92c2.56 0 4.736-2.176 4.736-4.736V17.968c0-2.816-2.176-4.608-4.736-4.608h-1.792l-1.152-1.152V9.264l.896-1.152 16.768-6.272h3.584l.896.896-1.024 9.728v69.888c0 2.56 2.176 4.736 4.736 4.736h1.92l1.023 1.024v4.864zm23.45-73.728c-4.864 0-8.832-3.968-8.832-8.832s3.968-8.832 8.832-8.832 8.832 3.968 8.832 8.832-3.968 8.832-8.832 8.832M310.947 94h-26.752l-1.024-1.024v-4.864l1.024-1.024h1.92c2.56 0 4.736-2.176 4.736-4.736V46.896c0-2.816-2.176-4.608-4.736-4.608h-1.792l-1.152-1.152v-2.944l.896-1.152 16.768-6.272h3.456l1.024 1.024-1.024 9.6v40.96c0 2.56 2.176 4.736 4.736 4.736h1.92l1.024 1.024v4.864zm39.828 1.792c-16.256 0-31.232-12.16-31.232-32.512 0-21.888 16.768-34.304 34.688-34.304 7.552 0 14.208 1.664 19.2 4.48l.896 1.28.64 15.488-1.024 1.024h-4.736l-1.024-1.024v-1.792c0-6.656-4.736-12.288-14.464-12.288-13.568 0-20.224 11.648-20.224 24.96 0 14.72 8.832 25.088 21.376 25.088 9.216 0 15.744-4.992 19.84-12.8l1.152-.512 1.664.64.64 1.152c-3.328 10.752-11.008 21.12-27.392 21.12M412.935 94h-26.752l-1.024-1.024v-4.864l1.024-1.024h1.92c2.56 0 4.736-2.176 4.736-4.736V17.968c0-2.816-2.176-4.608-4.736-4.608h-1.792l-1.152-1.152V9.264l.896-1.152 16.768-6.272h3.584l.896.896-1.024 9.728v49.792l21.76-20.736c.768-.768 1.152-1.408 1.152-2.176 0-.896-.64-1.664-2.176-1.664h-2.688l-1.024-1.024v-4.864l1.024-1.024h21.888l1.024 1.024v4.864l-1.024 1.024h-2.304c-2.56 0-3.584 1.024-6.528 3.84l-15.488 14.976 19.712 27.648c1.536 2.176 2.688 2.944 5.12 2.944h3.2l1.024 1.024v4.864L449.927 94h-16.768l-1.664-1.024-19.072-27.264-6.144 6.016v10.624c0 2.56 2.176 4.736 4.736 4.736h1.92l1.023 1.024v4.864zm74.28 24.96h-1.792c-12.032-9.856-27.52-27.904-27.52-59.264s15.488-49.408 27.52-59.264h1.792l1.536 1.664v1.792c-14.464 16-19.072 33.92-19.072 55.808s4.608 39.808 19.072 55.808v1.792zm35.699-23.168c-15.616 0-27.648-11.008-27.648-29.056 0-20.096 15.487-37.76 37.376-37.76 13.696 0 21.76 6.912 21.76 16.64 0 10.112-7.424 16.896-22.4 18.816l-22.272 2.816-1.024 1.28c.64 9.728 6.528 17.024 18.432 17.024 8.832 0 16.896-4.992 22.656-14.72l1.152-.384 2.048 1.152v1.152c-5.632 15.36-16.896 23.04-30.08 23.04m-13.44-37.376 1.024 1.024 17.152-1.92c8.832-1.024 14.208-5.376 14.208-12.416 0-5.504-4.352-8.832-10.624-8.832-11.008 0-20.224 9.728-21.76 22.144m56.367 60.544h-1.792l-1.536-1.664v-1.792c14.464-16 19.072-33.92 19.072-55.808s-4.608-39.808-19.072-55.808V2.096l1.536-1.664h1.792c12.032 9.856 27.52 27.904 27.52 59.264s-15.488 49.408-27.52 59.264"
            ></path>
          </svg> */}
          <p>onClick(e)</p>
          </Link>
        </div>
        <div className="bg-white relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4">
          <input
            type="search"
            className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
            placeholder="type here to search"
            value={searchingValue}
            onChange={(e)=>setSearchingValue(e.target.value)}
            />
          <button onClick={handleSearch} className="bg-[#ffe45e] absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4 active:border-b active:border-r">
            search
          </button>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/home/discover" className="flex px-4 py-2.5 text-sm">         
            explore
          </Link>
          <Link href="/sign-up" className="bg-[#ffe45e] flex px-4 py-2.5 border border-black rounded-lg hover:cursor-pointer hover:border-b-4 hover:border-r-4 text-sm active:border-b active:border-r">         
            create an account
          </Link>  
          <Link href="/sign-in" className="bg-white flex px-4 py-2.5 border border-black rounded-lg hover:cursor-pointer hover:border-b-4 hover:border-r-4 text-sm active:border-b active:border-r">         
            sign in
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
