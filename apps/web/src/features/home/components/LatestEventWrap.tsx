import React from 'react'
import Link from 'next/link'
import instance from '@/utils/axiosInstance'
import { useQuery } from '@tanstack/react-query'

const LatestEventWrap: React.FC = () => {
  return (
    <div className='m-auto w-full min-h-min grid grid-cols-4 gap-4'>
      <Link href="" className='transition h-[25rem] bg-white border border-black rounded-xl hover:border-b-4 hover:border-r-4 flex flex-col justify-between duration-300 relative'>
        <div className="absolute right-2 border border-black px-3 py-[2px] rounded-xl absolute top-3 flex items-center justify-center">
          <p className='text-sm'>on sale</p>
        </div>
        <div className='w-full h-[15rem] border-b border-black'>

        </div>
        <div className='p-2 h-[6rem]'>
          <p className='m-0 p-0 font-bold'>The Weeknd: Sao Paolo</p>
        </div>
        <div className='p-2'>
          <div className='bg-[#ffe45e] w-full h-[3rem] border border-black rounded-lg flex items-center justify-center text-xs'>
            Buy ticket
          </div>
        </div>
      </Link>
      <Link href="" className='transition h-[25rem] bg-white border border-black rounded-xl hover:border-b-4 hover:border-r-4 flex flex-col justify-between duration-300 relative'>
        <div className="absolute right-2 border border-black px-3 py-[2px] rounded-xl absolute top-3 flex items-center justify-center">
          <p className='text-sm'>on sale</p>
        </div>
        <div className='w-full h-[15rem] border-b border-black'>

        </div>
        <div className='p-2 h-[6rem]'>
          <p className='m-0 p-0 font-bold'>The Weeknd: Sao Paolo</p>
        </div>
        <div className='p-2'>
          <div className='bg-[#ffe45e] w-full h-[3rem] border border-black rounded-lg flex items-center justify-center text-xs'>
            Buy ticket
          </div>
        </div>
      </Link>
      <Link href="" className='transition h-[25rem] bg-white border border-black rounded-xl hover:border-b-4 hover:border-r-4 flex flex-col justify-between duration-300 relative'>
        <div className="absolute right-2 border border-black px-3 py-[2px] rounded-xl absolute top-3 flex items-center justify-center">
          <p className='text-sm'>on sale</p>
        </div>
        <div className='w-full h-[15rem] border-b border-black'>

        </div>
        <div className='p-2 h-[6rem]'>
          <p className='m-0 p-0 font-bold'>The Weeknd: Sao Paolo</p>
        </div>
        <div className='p-2'>
          <div className='bg-[#ffe45e] w-full h-[3rem] border border-black rounded-lg flex items-center justify-center text-xs'>
            Buy ticket
          </div>
        </div>
      </Link>
      <Link href="" className='transition h-[25rem] bg-white border border-black rounded-xl hover:border-b-4 hover:border-r-4 flex flex-col justify-between duration-300 relative'>
        <div className="absolute right-2 border border-black px-3 py-[2px] rounded-xl absolute top-3 flex items-center justify-center">
          <p className='text-sm'>on sale</p>
        </div>
        <div className='w-full h-[15rem] border-b border-black'>

        </div>
        <div className='p-2 h-[6rem]'>
          <p className='m-0 p-0 font-bold'>The Weeknd: Sao Paolo</p>
        </div>
        <div className='p-2'>
          <div className='bg-[#ffe45e] w-full h-[3rem] border border-black rounded-lg flex items-center justify-center text-xs'>
            Buy ticket
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LatestEventWrap
