import React, { useState } from 'react'
import IEvent from '../types';
import { useFormikContext, Field } from 'formik';
import { ErrorMessage } from 'formik';

const PickLocation: React.FC<Pick<IEvent, 'location' | 'address'| 'url'>> = ({ location, address, url}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<any>();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setFieldValue('url', '')
    }
  };


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // const addLocation = () => {
    
  // }

  return (
    <>
      <button 
        className="flex items-center justify-center gap-2"
        onClick={openModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p className="text-sm">Choose Location</p>
      </button>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 border border-black rounded-lg shadow-lg w-[30rem]">
          <div className="flex items-center justify-between">
            <p className="text-sm">ADD LOCATION</p>
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
            {!isChecked && (
              <>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">location name</label>
                  <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <Field
                      name="location"
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('location', e.target.value)}
                      className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                      placeholder="location"
                    />
                  </div>
                  <ErrorMessage name="location" component={'div'} className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">address</label>
                    <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                      <Field
                        as="textarea"
                        name="address"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('address', e.target.value)}
                        className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                        placeholder="address"
                      />
                    </div>
                </div>
              </>
            )}
            {isChecked && (
              <>
                <div className="flex flex-col items-start relative">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">location name</label>
                  <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <Field
                      name="location"
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('location', e.target.value)}
                      className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                      placeholder="location"
                    />
                  </div>
                </div>
                  <div className="flex flex-col items-start relative">
                    <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">url</label>
                      <div className="w-full relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                        <Field
                          name="url"
                          type="text"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('url', e.target.value)}
                          className="w-full pr-12 border-none focus:outline-none text-sm mt-1"
                          placeholder="url"
                        />
                      </div>
                  </div>
              </>
            )}
            <div className='flex items-center gap-3 relative'>
              <input
                type="checkbox"
                id="skipReferralCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"
              />
              <label htmlFor="skipReferralCheckbox" className="text-sm font-medium text-gray-900 w-[318px]">
                This is an online event
              </label>
            </div>
            <div className="w-full flex justify-end space-x-2 mt-5">
              <button
                type="button"
                onClick={closeModal}
                className="w-full px-4 py-2 bg-white border border-black rounded-md hover:border-b-4 hover:border-r-4 text-sm"
              >
                Add Location
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PickLocation
