import React, { useState } from 'react'
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useFormikContext } from 'formik';
import IEvent from '../types';



const PickTime: React.FC<Pick<IEvent, 'startTime' | 'endTime'>> = ({ startTime, endTime }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<any>()

  const formatTime = 'HH:mm';

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleStartTimeChange = (time: Dayjs) => {
    if (time) {
      setFieldValue('startTime', time.format(formatTime));
    } else {
      setFieldValue('startTime', '00:00');
    }
  };

  const handleEndTimeChange = (time: Dayjs) => {
    if (time) {
      setFieldValue('endTime', time.format(formatTime)); 
    } else {
      setFieldValue('endTime', '00:00');
    }
  };
  

  return (
    <>
      <button 
        className="flex items-center justify-center gap-2"
        onClick={openModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className="text-sm">Choose Time</p>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 border border-black rounded-lg shadow-lg w-[30rem]">
            <div className="flex items-center justify-between">
              <p className="text-sm">ADD TIME</p>
              <button
                type="button"
                onClick={closeModal}
                className="px-2 py-2 bg-white text-black border border-b-4 border-r-4 border-black rounded-lg focus-within:border-b focus-within:border-r"
                title="close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          <div className="flex flex-col items-start space-y-3 mt-5">
            <div className='w-full flex items-center justify-center gap-3'>
            <div className='w-1/2 flex flex-col items-center'>
              <div className="w-full relative">
                <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">start time</label>
                <TimePicker 
                  value={startTime ? dayjs(startTime, formatTime) : dayjs('00:00', formatTime)}
                  onChange={handleStartTimeChange}
                  format={formatTime} 
                  className="w-full relative flex items-center border border-black rounded-lg h-[2.9rem] px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 focus-within:shadow-none focus-within:border-black hover:border-black mt-2 font-sans font-normal"/>
              </div>
              </div>
              <div className='w-1/2 flex flex-col items-center'>
                <div className="w-full relative">
                    <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">end time</label>
                    <TimePicker 
                      value={endTime ? dayjs(endTime, formatTime) : dayjs('00:00', formatTime)}
                      onChange={handleEndTimeChange}
                      format={formatTime} 
                      className="w-full relative flex items-center border border-black rounded-lg h-[2.9rem] px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 focus-within:shadow-none focus-within:border-black hover:border-black mt-2 font-sans font-normal"/>
                </div>
              </div>  
            </div>                 
            <div className="w-full flex justify-end space-x-2 mt-5">
                <button
                  type="button"
              // onClick={handleSave}
                  className="w-full px-4 py-2 bg-white border border-black rounded-md hover:border-b-4 hover:border-r-4 text-sm"
                >
                  Add Date
                </button>
            </div>
            </div>
          </div>
        </div>
      )}        
    </>
  )
}

export default PickTime
