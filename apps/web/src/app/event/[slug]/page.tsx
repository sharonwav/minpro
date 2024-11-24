import React from 'react'
import ListTicket from '@/features/event/components/ListTicket'
import PickLocation from '@/features/creator/components/PickLocation'

const EventPage: React.FC = () => {
  return (
    <main className="bg-[#7fc8f8] m-auto w-full min-h-min pt-[10rem] relative">
      <section className='w-full min-h-min'>
        <div className='m-auto w-full max-w-screen-xl h-screen'>
          <div className="w-full h-96 relative">
            <div className="w-full h-80 border border-black rounded-md">
              
            </div>
            <div className="w-full min-h-min flex gap-5 absolute bottom-0 left-10">
                <div className="w-[10rem] h-[10rem] bg-white border border-black rounded-md">

                </div>
                <div className=" h-[8rem] flex items-end text-md">
                  Pitch Black Sound
                </div>
            </div>
          </div>
          <div className='bg-[#ffe45e] w-full min-h-min border border-black rounded-md p-3 mt-[5rem]'>
            <p className='text-sm'>This is an event of blablabala</p>
          </div>
          <div className="w-full min-h-min mt-[5rem]">
            <div className='w-1/2'>
              <ListTicket />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EventPage
