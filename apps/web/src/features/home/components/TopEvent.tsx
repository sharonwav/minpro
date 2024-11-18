import React from 'react'

const TopEvent: React.FC = () => {
  return (
    <main className='m-auto w-full min-h-min max-w-screen-2xl flex mt-[10rem] mb-[10rem] border border-black rounded-lg'>   
      <div className='w-2/4 h-[40rem] border-r border-black relative'>
        <div className='bg-[#5aa9e6] border border-black rounded-xl min-w-min absolute top-2 left-2 flex items-center justify-between gap-5 py-2 px-3'>
          <div className='bg-[#ffe45e] border border-black rounded-full w-7 h-7 flex items-center justify-center'>
            1
          </div>
          <p className='text-sm font-bold'>Top event: <span>The Weeknd tour</span></p>
        </div>
      </div>
      <div className='w-2/4 h-full grid grod-rows-2'>
       <div className='h-[350px] border-b border-black'>
        <div className='bg-[#5aa9e6] border border-black rounded-xl min-w-min absolute flex items-center justify-between gap-5 mt-2 ml-2 py-2 px-3'>
          <div className='bg-[#ffe45e] border border-black rounded-full w-7 h-7 flex items-center justify-center'>
            2
          </div>
          <p className='text-sm font-bold'>Top event: <span>The Weeknd tour</span></p>
        </div>
       </div>
       <div className='h-[200px]'>
        <div className='bg-[#5aa9e6] border border-black rounded-xl min-w-min absolute flex items-center justify-between gap-5 mt-2 ml-2 py-2 px-3'>
          <div className='bg-[#ffe45e] border border-black rounded-full w-7 h-7 flex items-center justify-center'>
            3
          </div>
          <p className='text-sm font-bold'>Top event: <span>The Weeknd tour</span></p>
        </div>
       </div>
      </div>
    </main>
  )
}

export default TopEvent
