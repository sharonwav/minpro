import React from 'react'
import Link from "next/link"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignInCreator: React.FC = () => {
  return (
    <main className="w-full h-screen">
      <section className="m-auto w-full max-w-screen-xl h-screen flex flex-col items-center justify-center gap-3">
        <div className="min-w-min min-h-min border border-b-4 border-black rounded-2xl flex flex-col items-start justify-center gap-3 p-2">
          <div className="flex flex-col items-start relative">
            <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">email</label>
            <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
              <input
                type="email"
                className="w-[20rem] pr-12 border-none focus:outline-none text-sm mt-1"
                placeholder="jane@gmail.com"
                />
              {/* <button className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm">
                    search
              </button> */}
            </div>
          </div>
          <div className="flex flex-col items-start relative">
            <label className="text-sm border border-black rounded-full px-2 absolute top-0 z-10 bg-white left-2">password</label>
            <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
              <input
                type="password"
                className="w-[20rem] pr-12 border-none focus:outline-none text-sm mt-1"
                placeholder="password"
                />
              {/* <button className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm">
                    search
              </button> */}
            </div>
          </div>
          <button type="button" className="w-full min-h-min py-2.5 border border-black rounded-lg text-sm font-bold mt-3 my-2 hover:border-b-4 hover:border-r-4 hover:cursor-pointer">
            sign in
          </button>
        </div>
        <label className="text-xs">don't have an account yet?  
          <span className="hover:underline">
            <Link href="/sign-up"> create account here</Link>
          </span>
        </label>
      </section>
    </main>
  )
}

export default SignInCreator
