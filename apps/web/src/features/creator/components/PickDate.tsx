import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useFormikContext } from 'formik';
import IEvent from '../types';


const PickDate: React.FC<Pick<IEvent, 'startDate' | 'endDate'>> = ({ startDate, endDate }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<any>();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleDateSelect = (name: string, date: Date) => {
    setFieldValue(name, date); 
  };


  return (
    <>
      <button 
        className="flex items-center justify-center gap-2"
        onClick={openModal}
      >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
        <p className="text-sm">Choose Date</p>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 border border-black rounded-lg shadow-lg w-[30rem]">
          <div className="flex items-center justify-between">
            <p className="text-sm">ADD DATE</p>
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
          <div className="flex flex-col space-y-3 mt-5">
                <div className="w-full flex items-center justify-center relative gap-4">
                  <div className='w-full flex flex-col items-center'>
                          <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">start date</label>
                          <Popover>
                              <PopoverTrigger asChild>
                                  <Button
                                  className="w-full bg-white text-black relative flex items-center justify-between border border-black rounded-lg h-[2.9rem] mt-2 hover:bg-white"
                                  >
                                    <div className="w-full flex items-center justify-start mt-1">
                                      <p className="font-normal">{format(values[startDate], "PPP")}</p>
                                    </div>
                                    <div className="w-full flex items-center justify-end ">
                                      <CalendarIcon />
                                    </div>
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                  mode="single"
                                  selected={values[startDate]}
                                  onSelect={(date) => date && handleDateSelect(startDate, date)}
                                  initialFocus
                                  />
                              </PopoverContent>
                          </Popover>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center relative gap-4">
                      <div className='w-full flex flex-col items-center'>
                          <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">end date</label>
                          <Popover>
                              <PopoverTrigger asChild>
                                  <Button
                                  className="w-full bg-white text-black relative flex items-center justify-between border border-black rounded-lg h-[2.9rem] mt-2 hover:bg-white"
                                  >
                                    <div className="w-full flex items-center justify-start">
                                      <p className="font-normal">{format(values[endDate], "PPP")}</p>
                                    </div>
                                    <div className="w-full flex items-center justify-end mt-1">
                                      <CalendarIcon />
                                    </div>
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                  mode="single"
                                  selected={values[endDate]}
                                  onSelect={(date) => date && handleDateSelect(endDate, date)}
                                  initialFocus
                                  />
                              </PopoverContent>
                          </Popover>
                      </div>
                </div>                    
                <div className="w-full flex items-center justify-start mt-3">
                
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

export default PickDate
