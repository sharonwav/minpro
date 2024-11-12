'use client'
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import Quill from 'quill';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const CreateEventPage: React.FC  = () => {

  useEffect(() => {
    const editor1Container = document.getElementById('editor1');
    if (editor1Container && !editor1Container.querySelector('.ql-editor')) {
      new Quill(editor1Container, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }],
          ],
        },
      });
    }

    const editor2Container = document.getElementById('editor2');
    if (editor2Container && !editor2Container.querySelector('.ql-editor')) {
      new Quill(editor2Container, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }],
          ],
        },
      });
    }
  }, []);


  return (
    <main className="w-full h-screen z-10">
      <section className="m-auto w-full max-w-screen-xl min-h-min flex items-start justify-between mt-[10rem]">
        <div className="w-2/4 min-h-min">
          <div className="w-[30rem] h-[40rem] border border-black rounded-xl">
            <div className="w-full h-[23rem] border-b border-black">
            {/* PICTURE */}
            </div>
            <div className="min-w-min h-[17rem] p-3 flex flex-col justify-between relative gap-3">
              <input type="text" placeholder="Title" className="focus:outline-none"/>
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-4">
                  <button className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                    <p className="text-sm">Choose Date</p>
                  </button>
                  <button className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm">Choose Time</p>
                  </button>
                </div>
                <div className="flex ">
                  <button className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className="text-sm">Choose Location</p>
                  </button>
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
          <TabGroup>
            <TabList className="flex items-center justify-center gap-5">
              <Tab className='border border-black rounded-md px-2 py-1'>Category</Tab>
              <Tab className='border border-black rounded-md px-2 py-1'>Description</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className='w-full min-h-min'>
                
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col">
                  <p className="mb-2">Description</p>
                  <div id="editor1" style={{ height: '200px'}} className="border border-black"></div>
                </div>
                <div className="flex flex-col">
                  <p className="mb-2">Terms and Condition</p>
                  <div id="editor2" style={{ height: '200px'}} className="border border-black"></div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </main>
  )
}

export default CreateEventPage
