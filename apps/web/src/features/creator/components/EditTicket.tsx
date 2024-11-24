'use client'
import Reaact, { useState, useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useFormikContext, Field } from "formik";
import useTicketStore from '@/zustand/ticketStore';



const EditTicket: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [showNextPage, setNextPage] = useState<boolean>(false);
  const { dataTickets, updateTicket } = useTicketStore();

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <button 
        title="edit" 
        type='button' 
        onClick={openModal}
        className='bg-[#ff6392] border border-black rounded p-1 hover:border-b-4 hover:border-r-4 active:border-b active:border-r'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 border border-black rounded-lg shadow-lg w-[40rem]">
          <div className="flex items-center justify-between">
            <p className="text-sm">CREATE NEW TICKET</p>
            <button
              type="button"
              onClick={closeModal}
              className="px-2 py-2 bg-white text-black border border-b-4 border-r-4 border-black rounded-lg active:border-b active:border-r"
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
            {!showNextPage ? (
              <>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">title</label>
                  <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <Field
                      name="ticketName"
                      type="text"
                      className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                      placeholder="title"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">quantity</label>
                  <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <Field
                      name="qty"
                      type="number"
                      className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">price</label>
                  <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <Field
                      name="price"
                      type="number"
                      className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                      placeholder="Rp"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">description</label>
                  <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <Field
                      as="textarea"
                      name="ticketDescription"
                      className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                      placeholder="description"
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-end mt-3">
                  <button onClick={() => setNextPage(true)} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4 active:border-b active:border-r">
                      next
                  </button>
              </div>
              </>
            ) : (
              <>
                  <div className="w-full flex items-center justify-center relative gap-4">
                      <div className='w-3/4 flex flex-col items-center'>
                          <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">start date</label>
                          <Popover>
                              <PopoverTrigger asChild>
                                  <Button
                                  className="w-full bg-white text-black relative flex items-center justify-between border border-black rounded-lg h-[2.9rem] mt-2 hover:bg-white"
                                  >
                                    <div className="w-full flex items-center justify-start mt-1">
                                      <p className="font-normal"> {values[ticketStartDate] 
                                        ? format(new Date(values[ticketStartDate]), "PPP") 
                                        : ""}</p>
                                    </div>
                                    <div className="w-full flex items-center justify-end ">
                                      <CalendarIcon />
                                    </div>
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                  mode="single"
                                  selected={values[ticketStartDate]}
                                  onSelect={(date) => date && handleDateSelect(ticketStartDate, date)}
                                  initialFocus
                                  />
                              </PopoverContent>
                          </Popover>
                      </div>
                      <div className='w-1/4 flex flex-col items-center'>
                          <div className="w-full relative">
                            <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">start time</label>
                            <TimePicker 
                              value={values.ticketStartTime ? dayjs(values.ticketStartTime, formatTime) : dayjs('00:00', formatTime)}
                              onChange={handleStartTimeChange}
                              format={formatTime}  
                              className="w-full relative flex items-center border border-black rounded-lg h-[2.9rem] px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 focus-within:shadow-none focus-within:border-black hover:border-black mt-2 font-sans font-normal"/>
                          </div>
                      </div>
                  </div>
                  <div className="w-full flex items-center justify-center relative gap-4">
                      <div className='w-3/4 flex flex-col items-center'>
                          <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">end date</label>
                          <Popover>
                              <PopoverTrigger asChild>
                                  <Button
                                  className="w-full bg-white text-black relative flex items-center justify-between border border-black rounded-lg h-[2.9rem] mt-2 hover:bg-white"
                                  >
                                    <div className="w-full flex items-center justify-start mt-1">
                                      <p className="font-normal">{values[ticketEndDate] 
                                        ? format(new Date(values[ticketEndDate]), "PPP") 
                                        : ""}</p>
                                    </div>
                                    <div className="w-full flex items-center justify-end ">
                                      <CalendarIcon />
                                    </div>
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                  mode="single"
                                  selected={values[ticketEndDate]}
                                  onSelect={(date) => date && handleDateSelect(ticketEndDate, date)}
                                  initialFocus
                                  />
                              </PopoverContent>
                          </Popover>
                      </div>
                      <div className='w-1/4 flex flex-col items-center'>
                          <div className="w-full relative">
                            <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">end time</label>
                            <TimePicker 
                              value={values.ticketEndTime ? dayjs(values.ticketEndTime, formatTime) : dayjs('00:00', formatTime)}
                              onChange={handleEndTimeChange}
                              format={formatTime} 
                              className="w-full relative flex items-center border border-black rounded-lg h-[2.9rem] px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 focus-within:shadow-none focus-within:border-black hover:border-black mt-2 font-sans font-normal"/>
                          </div>
                      </div>
                  </div>                    
                  <div className="w-full flex items-center justify-start mt-3">
                      <button onClick={() => setNextPage(false)} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4 active:border-b active:border-r">
                          back
                      </button>
                  </div>
                  <div className="w-full flex justify-end space-x-2 mt-5">
                      <button
                          type="button"
                          onClick={() => editTicket()}
                          className="w-full px-4 py-2 bg-white border border-black rounded-md hover:border-b-4 hover:border-r-4 active:border-b active:border-r text-sm"
                      >
                      Add Ticket
                      </button>
                  </div>
              </>
            )}
          </div>
        </div>
      </div>
      )}


    </>
  )
}

export default EditTicket
