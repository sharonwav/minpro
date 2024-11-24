'use client'
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PaidTicket from "@/features/creator/components/PaidTicket";
import PickDate from "@/features/creator/components/PickDate";
import PickTime from "@/features/creator/components/PickTime";
import PickLocation from "@/features/creator/components/PickLocation";
import FreeTicket from "@/features/creator/components/FreeTicket";
import Editor from "@/features/creator/components/Editor";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { createEventValidationSchema } from "@/features/creator/schemas/eventSchema";
import useTicketStore from "@/zustand/ticketStore";
import { format } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import instance from "@/utils/axiosInstance";

interface TicketData {
  ticketName: string;
  qty: number;
  price?: number;
  ticketDescription: string;
  ticketStartDate: string;
  ticketEndDate: string;
  ticketStartTime: string;
  ticketEndTime: string;
}


const CreateEventPage: React.FC  = () => {
  const [activeTab, setActiveTab] = useState("category");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { dataTickets, updateTicket, deleteTicket } = useTicketStore();
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [description, setDescription] = useState('');
  const [termsAndCondition, setTermsAndCondition] = useState('');

  const setFieldValue = (field: string, value: any) => {
    if (field === 'description') {
      setDescription(value);
    } else if (field === 'termsAndCondition') {
      setTermsAndCondition(value);
    }
  };
 
  const formatDate = (dateString: any) => {
    if (!dateString) return ''; 
    const date = new Date(dateString);
    return format(date, 'MMMM dd, yyyy'); 
  };

  const mutation = useMutation({
    mutationFn: async (values: any) => { // or use a more specific type for 'values' as shown before
      const formData = new FormData();
  
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key];
          if (Array.isArray(value)) {
            value.forEach((file: File) => formData.append(key, file));
          } else {
            formData.append(key, value.toString());
          }
        }
      }
  
      const response = await instance.post('/event/create', formData);
      return response.data; 
    },
    onSuccess: (data) => { 
      console.log('Event created successfully!', data); 
      alert('Event created successfully!'); 
    },
    onError: (error) => {
      console.error("Error creating event:", error);
      alert('Error creating event. Please check the console for details.');
    },
  });

  const handleSubmit = (values: any) => {
    console.log('Submitting values:', values);
    mutation.mutate(values);
    console.log('ini submit');
  };


 
  return (
    <main className="w-full h-screen z-10">
      <section className="m-auto w-full max-w-screen-xl min-h-min flex items-start justify-between mt-[10rem]">
        <Formik enableReinitialize
          initialValues={{
            name: '',
            image: [] as File[],
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            location: '',
            address: '',
            url: '',
            description: '',
            termsAndCondition: '',
            ticketName: '',
            qty: 0,
            price: 0,
            ticketDescription: '',
            ticketStartDate: '',
            ticketEndDate: '',
            ticketStartTime: '',
            ticketEndTime: '',
            dataTickets: []
          }}
          validationSchema={createEventValidationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Submitting values:', values);
            handleSubmit(values);
            resetForm();
          }}

        >
          {({values, setFieldValue}) => (
            <Form className="w-full flex items-start justify-center">
            <div className="w-2/4 min-h-min">
              <div className="w-[30rem] h-[40rem] border border-black rounded-xl">
              <div className="w-full h-[23rem] border-b border-black relative">
                {/* PICTURE */}
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Event"
                    className="h-full w-full object-cover rounded-t-xl"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    <p>No image selected</p>
                  </div>
                )}

                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.currentTarget.files;
                    if (files && files.length > 0) {
                      // Convert FileList to an array
                      const fileArray = Array.from(files);
                      setFieldValue('image', fileArray); // Update Formik state with the file array
                      setSelectedImage(fileArray[0]); // Optionally, preview the first selected image
                    }
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-auto text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 opacity-75 cursor-pointer"
                />
                <ErrorMessage name="shiftId" component={'div'} className="text-red-500 text-sm"/>
              </div>

                <div className="min-w-min h-[17rem] p-3 flex flex-col justify-between relative gap-3">
                  <Field name="name" type="text" placeholder="Title" className="focus:outline-none"/>
                  <ErrorMessage name="shiftId" component={'div'} className="text-red-500 text-sm"/>
                  <div className="w-full flex items-start gap-3">
                    <div className="w-1/2 flex flex-col items-start gap-4">
                      <PickDate startDate="startDate" endDate="endDate"/>
                      <PickTime startTime="startTime" endTime="endTime"/>
                    </div>
                    <div className="w-1/2 flex items-start">
                      <PickLocation address="address" location="location" url="url"/>
                    </div>
                  </div>
                  <div className="text-sm">
                    by 
                    <span>
                      <Link href="/to"className="underline"> CreatiVox</Link>
                    </span>
                  </div>
                  <div className="">
                    <button type="submit" disabled className="w-full min-h-min border rounded-md py-3 text-sm text-gray-400">Buy ticket</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/4 min-h-min flex flex-col gap-3">
              <div className="w-full min-h-min flex items-center justify-center">
                <Tabs 
                  defaultValue="category" 
                  onValueChange={(value) => setActiveTab(value)}
                  className="w-full min-h-min flex flex-col items-center justify-center" 
                  >
                  <TabsList>
                    <TabsTrigger value="category">Category</TabsTrigger>
                    <TabsTrigger value="description">Description</TabsTrigger>
                  </TabsList>
                  <TabsContent value="category" className="w-full min-h-min">
                    <div className="flex flex-col mt-2">
                      <div className="w-full flex items-center justify-center gap-5">
                        <PaidTicket 
                          ticketName={values.ticketName}
                          qty={values.qty}
                          price={values.price}
                          ticketDescription={values.ticketDescription}
                          ticketStartDate="ticketStartDate"
                          ticketEndDate="ticketEndDate"
                          ticketStartTime={values.ticketStartTime}
                          ticketEndTime={values.ticketEndTime}
                          dataTickets={dataTickets}
                        />
                        {/* <FreeTicket 
                          ticketName={values.ticketName}
                          qty={values.qty}
                          ticketDescription={values.ticketDescription}
                          ticketStartDate="ticketStartDate"
                          ticketEndDate="ticketEndDate"
                          ticketStartTime={values.ticketStartTime}
                          ticketEndTime={values.ticketEndTime}
                        /> */}
                      </div>
                      <div className="w-full min-h-min border border-black rounded-xl flex flex-col gap-3 p-3 mt-4">
                        {dataTickets.map((ticket) => (
                          <div className='bg-[#ffe45e] w-full border border-black rounded-md flex items-center justify-between p-3'>
                            <div className='flex flex-col'>
                              <p className='text-sm font-bold'>{ticket.ticketName}</p>
                              <p className='text-xs mt-1'>{ticket.ticketDescription}</p>
                              <p className='text-xs text-[#03045e]'>ends at {formatDate(ticket.ticketEndDate)}</p>
                              <p className='text-xs mt-1'>
                                Rp
                                <span className="text-sm font-bold">{new Intl.NumberFormat('id-ID', {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(ticket.price)}
                                </span>
                              </p>
                            </div>
                           
                            <div className='bg-[#5aa9e6] flex items-center justify-center gap-3 border border-black rounded p-1'>
                                <button onClick={()=> deleteTicket(ticket.ticketName)} title="delete" type='button' className='bg-[#ff6392] border border-black rounded p-1 hover:border-b-4 hover:border-r-4 active:border-b active:border-r'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                              </div>
                         </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="description" key="description" className="w-full min-h-min flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-3">
                      <label className="text-sm">Description</label>
                      <Field as="textarea" name="description" class="w-full h-[16rem] resize border border-black rounded-md p-3 text-sm focus-within:outline-none"/>
                      <ErrorMessage name="description" component={'div'} className="text-red-500 text-sm"/>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      <label className="text-sm">Terms And Condition</label>
                      <Field as="textarea" name="termsAndCondition" class="w-full h-[16rem] resize border border-black rounded-md p-3 text-sm focus-within:outline-none"/>
                      <ErrorMessage name="termsAndCondition" component={'div'} className="text-red-500 text-sm"/>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>    
              <div className="w-30 flex items-end justify-end">
                <button type="submit" >Submit</button>
              </div>         
            </div>
          </Form>
          )}
        </Formik>
      </section>
    </main>
  )
}

export default CreateEventPage
