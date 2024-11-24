import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC<{isOpen: boolean; toggleSidebar: () => void}> = ({isOpen, toggleSidebar}) => {
  return (
    <div className="">
      <div className='m-auto w-full h-20 flex items-center justify-between border-b border-black bg-white px-10 absolute top-0 z-20'>
        <button
          type="button"
          onClick={toggleSidebar}
          className="bg-white font-bold border border-b-4 border-r-4 border-black py-2 px-3 rounded-lg active:border-b active:border-r text-sm"
        >
         (e)
        </button>
        <Link href="/creator/create-event" className='border border-black px-4 py-2 rounded-lg hover:border-b-4 hover:border-r-4 text-sm'>
          create an event
        </Link>
      </div>
      <div
        className={`fixed left-0 top-0 h-full w-[20rem] border-r border-black p-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className='flex flex-col gap-4 mt-[6rem]'>
          <Link href="/creator" className='w-full px-4 py-4 hover:border hover:border-black hover:border-b-4 hover:border-r-4 hover:rounded-md hover:py-4 hover:px-4 text-sm'>Dashboard</Link> 
          <Link href="/creator" className='w-full px-4 py-4 hover:border hover:border-black hover:border-b-4 hover:border-r-4 hover:rounded-md hover:py-4 hover:px-4 text-sm'>Dashboard</Link> 
          <Link href="/creator/profile" className='w-full px-4 py-4 hover:border hover:border-black hover:border-b-4 hover:border-r-4 hover:rounded-md hover:py-4 hover:px-4 text-sm'>Profile</Link> 
          <Link href="/creator" className='w-full px-4 py-4 hover:border hover:border-black hover:border-b-4 hover:border-r-4 hover:rounded-md hover:py-4 hover:px-4 text-sm'>Dashboard</Link> 
        </div>
      </div>     
    </div>
    );
};

export default Sidebar
