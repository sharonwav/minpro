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



const CreateEventPage: React.FC  = () => {
  const [activeTab, setActiveTab] = useState("category");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

 

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };



  return (
    <main className="w-full h-screen z-10">
      <section className="m-auto w-full max-w-screen-xl min-h-min flex items-start justify-between mt-[10rem]">
        <Formik
          initialValues={{
            name: '',
            image: '',
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            location: '',
            address: '',
            url: '',
            description: '',
            termsAndContition: '',
            ticketName: '',
            qty: 0,
            price: 0,
            ticketDescription: '',
            ticketStartDate: '',
            ticketEndDate: '',
            ticketStartTime: '',
            ticketEndTime: ''
          }}
          validationSchema={createEventValidationSchema}
          onSubmit={() => {

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

                <Field
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleImageChange(e);
                    setFieldValue("image", e.currentTarget.files?.[0] || null);
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-auto text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 opacity-75 cursor-pointer"
                />
              </div>

                <div className="min-w-min h-[17rem] p-3 flex flex-col justify-between relative gap-3">
                  <Field name="name" type="text" placeholder="Title" className="focus:outline-none"/>
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
                <Tabs defaultValue="category" className="w-full min-h-min flex flex-col items-center justify-center" onValueChange={(value) => setActiveTab(value)}>
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
                          ticketStartDate={values.ticketStartDate}
                          ticketEndDate={values.ticketEndDate}
                          ticketStartTime={values.ticketStartTime}
                          ticketEndTime={values.ticketEndTime}
                        />
                        <FreeTicket 
                          ticketName={values.ticketName}
                          qty={values.qty}
                          ticketDescription={values.ticketDescription}
                          ticketStartDate={values.ticketStartDate}
                          ticketEndDate={values.ticketEndDate}
                          ticketStartTime={values.ticketStartTime}
                          ticketEndTime={values.ticketEndTime}
                        />
                      </div>
                      <div className="w-full min-h-min border border-black rounded-xl p-3 mt-4">
                        <div className="w-full h-20 border border-black rounded-lg">
                          <div className="">

                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="description" key="description" className="w-full min-h-min">
                    <Editor setFieldValue={setFieldValue}/>
                  </TabsContent>
                </Tabs>
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
