import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useFormikContext, Field } from "formik";
import IEvent from "../types";

const PaidTicket: React.FC<Pick<IEvent, 'ticketName' | 'qty' | 'price' | 'ticketDescription' | 'ticketStartDate' | 'ticketEndDate' | 'ticketStartTime' | 'ticketEndTime'>> = 
({ ticketName, qty, price, ticketDescription, ticketStartDate, ticketEndDate, ticketStartTime, ticketEndTime }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [showNextPage, setNextPage] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<any>();
  

  const formatTime = 'HH:mm';

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleDateSelect = (name: string, date: Date) => {
    setFieldValue(name, date); 
  };

  const handleStartTimeChange = (time: Dayjs) => {
    if (time) {
      setFieldValue('ticketStartTime', time.format(formatTime));
    } else {
      setFieldValue('ticketStartTime', '00:00');
    }
  };

  const handleEndTimeChange = (time: Dayjs) => {
    if (time) {
      setFieldValue('ticketEndTime', time.format(formatTime)); 
    } else {
      setFieldValue('ticketEndTime', '00:00');
    }
  };

  return (
    <>
      <button
        type="button"
        className="border border-black rounded-md px-6 py-2"
        onClick={openModal}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold">PAID TICKET</p>
          <p className="text-xs text-gray-700">CREATE</p>
        </div>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 border border-black rounded-lg shadow-lg w-[40rem]">
            <div className="flex items-center justify-between">
              <p className="text-sm">CREATE NEW TICKET</p>
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
                    <button onClick={() => setNextPage(true)} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
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
                                        <p className="font-normal">{values.ticketStartDate ? format(values.ticketStartDate, "PPP") : <span></span>}</p>
                                      </div>
                                      <div className="w-full flex items-center justify-end ">
                                        <CalendarIcon />
                                      </div>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={values.ticketStartDate}
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
                                        <p className="font-normal">{values.ticketEndDate ? format(values.ticketEndDate, "PPP") : <span></span>}</p>
                                      </div>
                                      <div className="w-full flex items-center justify-end ">
                                        <CalendarIcon />
                                      </div>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={values.ticketEndDate}
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
                        <button onClick={() => setNextPage(false)} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                            back
                        </button>
                    </div>
                    <div className="w-full flex justify-end space-x-2 mt-5">
                        <button
                            type="button"
                            // onClick={handleSave}
                            className="w-full px-4 py-2 bg-white border border-black rounded-md hover:border-b-4 hover:border-r-4 text-sm"
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
  );
};

export default PaidTicket;
