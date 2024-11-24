'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import instance from "@/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Loading from "@/features/global/components/Loading"
import IEvent from "@/features/creator/types"

const fetchAllEvents = async () => {
  const response = await instance.get("/event/all");
  return response.data.data; // Assuming your response data is in a structure like { data: IEvent[] }
};


const Event: React.FC = () => {
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

  const { data, isLoading, error } = useQuery<IEvent[], Error>({
    queryKey: ["get-all-events"], // Key for this query
    queryFn: fetchAllEvents, // Query function
  });

  useEffect(() => {
    console.log("Query Data: ", data); // Logs when `data` changes
    if (error) {
      console.log("Error: ", error.message); // Logs any error that occurs
    }
  }, [data, error]);

  // Check if data is loading or error occurred
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading events: {error.message}</p>;
  }

  // Ensure `data` is always an array before using `map`
  if (!Array.isArray(data)) {
    return <p>No events available</p>;
  }
  console.log(data)


  return (
    <>
      <div className="bg-white relative flex items-center justify-start border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4">
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
      <main className="m-auto w-full min-h-min grid grid-cols-4 gap-4 mt-3">
        {data.map((event: any) => (
          <Link key={event.id} href={`/event/${event.id}`} className='transition h-[25rem] bg-white border border-black rounded-xl hover:border-b-4 hover:border-r-4 flex flex-col justify-between duration-300 relative'>
            <div className="absolute right-2 border border-black px-3 py-[2px] rounded-xl absolute top-3 flex items-center justify-center">
              <p className='text-sm'>on sale</p>
            </div>
            <div className='w-full h-[15rem] border-b border-black'>
              <img src={event.image} alt="Event" className="object-cover w-full h-[15rem]"/>
            </div>
            <div className='p-2 h-[6rem]'>
              <p className='m-0 p-0 font-bold'>{event.name}</p>
            </div>
            <div className='p-2'>
              <div className='bg-[#ffe45e] w-full h-[3rem] border border-black rounded-lg flex items-center justify-center text-xs'>
                Buy ticket
              </div>
          </div>
        </Link> 
        ))}    
      </main>
    </>
  )
}

export default Event
