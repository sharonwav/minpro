import React from 'react'

const ListTicket = () => {
  return (
    <div className='bg-[#ff6392] w-full min-h-min border border-black rounded-lg p-3'>
      <div className='bg-[#ffe45e] w-full border border-black rounded-md flex items-center justify-between p-3'>
        <div className='flex flex-col'>
          <p className='text-sm font-bold'>VIP</p>
          <p className='text-xs mt-1'>The premium pass grants VIP lounge access</p>
          <p className='text-xs text-[#03045e]'>ends at November 30, 2024</p>
          <p className='text-sm font-bold mt-1'>2.000.000</p>
        </div>
        
        <div className='bg-[#5aa9e6] flex items-center justify-center gap-3 border border-black rounded p-1'>
            <button title="minus" type='button' className='bg-[#ff6392] border border-black rounded p-1 hover:border-b-4 hover:border-r-4 active:border-b active:border-r'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>
            <p>0</p>
            <button title="plus" type='button' className='bg-[#ff6392] border border-black rounded p-1 hover:border-b-4 hover:border-r-4 active:border-b active:border-r'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
      </div>
    </div>
  )
}

export default ListTicket
