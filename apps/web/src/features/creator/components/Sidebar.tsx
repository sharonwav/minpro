import React from 'react';

const Sidebar: React.FC<{isOpen: boolean; toggleSidebar: () => void}> = ({isOpen, toggleSidebar}) => {
  return (
    <div className="">
      <div className='m-auto w-full h-20 flex items-center justify-between border-b border-black bg-white px-10 absolute top-0 z-20'>
        <button
          type="button"
          onClick={toggleSidebar}
          className="bg-white font-bold border border-black py-2 px-4 rounded-lg transition-transform duration-300 hover:border-b-4 hover:border-r-4"
        >
         (e)
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 h-full w-[20rem] border-r border-black p-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
      </div>     
    </div>
    );
};

export default Sidebar
