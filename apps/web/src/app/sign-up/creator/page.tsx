'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"

const SignUpCreator: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)


    
  return (
    <main className="w-full h-screen">
      <section className="m-auto w-full max-w-screen-xl h-screen flex flex-col items-center justify-center relative">
        {!showPassword? (
          <>
            <div className="flex flex-col items-center justify-center relative p-5">
            <label className="text-sm border border-black rounded-full px-2 absolute top-3 left-8 z-10 bg-white">enter your email here</label>
            <div className="min-w-min min-h-min border border-black rounded-xl p-2">
              <div className="flex flex-col items-start mt-5">
                <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                  <input
                    type="email"
                    className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                    placeholder="jane@gmail.com"
                    />
                  <button onClick={() => setShowPassword(true)} className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                        next
                  </button>
                </div>
              </div>
             </div>
            </div>
          </>
        ): (
          <>
            <div className="flex flex-col items-center justify-center relative p-5">
            <label className="text-sm border border-black rounded-full px-2 absolute top-3 right-8 z-10 bg-white">enter your password here</label>
              <div className="min-w-min min-h-min border border-black rounded-xl p-2">
                <div className="flex flex-col items-start mt-5 relative">
                    <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 my-3 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <input
                        type="password"
                        className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                        placeholder="password"
                        />
                    </div>

                    <label className="text-sm border border-black rounded-full px-2 absolute top-[3.7rem] left-2 z-10 bg-white">confirm password</label>
                    <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <input
                        type="password"
                        className="w-[20rem] pr-12 border-none focus:outline-none text-sm mt-1"
                        placeholder="password"
                        />
                    <button onClick={() => setShowPassword(false)} className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                            back
                    </button>
                    </div>
                </div>
                <button type="submit" className="w-full px-4 py-2.5 border border-black rounded-lg text-sm mt-[2rem] hover:border-b-4 hover:border-r-4">
                    submit
                </button>
              </div>
            </div>
          </>
        )}
        <label className="text-xs">switching to a user account?  
          <span className="hover:underline">
            <Link href="/sign-up"> click here</Link>
          </span>
        </label>
      </section>
    </main>
  )
}

export default SignUpCreator
