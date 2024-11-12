'use client';
import React, { useState } from "react";
import Link from "next/link";

const SignUpUser: React.FC = () => {
  const [showReferralCode, setShowReferralCode] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main className="w-full h-screen">
      <section className="m-auto w-full max-w-screen-xl h-screen flex flex-col items-center justify-center relative">
        {!showReferralCode && !showPassword ? (
          // Input Email
          <div className="flex flex-col items-center justify-center relative p-5">
            <label className="text-sm border border-black rounded-full px-2 absolute top-3 left-8 z-10 bg-white">Enter your email here</label>
            <div className="min-w-min min-h-min border border-black rounded-xl p-2">
              <div className="flex flex-col items-start mt-5">
                <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                  <input
                    type="email"
                    className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                    placeholder="jane@gmail.com"
                  />
                  <button onClick={() => setShowReferralCode(true)} className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : !showPassword ? (
          // Input Referral Code dengan Checkbox
          <div className="flex flex-col items-center justify-center relative p-5">
            <label className="text-sm border border-black rounded-full px-2 absolute top-3 left-8 z-10 bg-white">Enter your referral code here</label>
            <div className="min-w-min min-h-min border border-black rounded-xl p-2">
              <div className="flex flex-col items-start mt-5">
                {!isChecked && (
                  <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                    <input
                      type="text"
                      className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                      placeholder="Referral code (optional)"
                    />
                  </div>
                )}
                <div className="w-24 hidden"></div>
                <div className="flex items-center space-x-2 mt-3">
                  <input
                    type="checkbox"
                    id="skipReferralCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="skipReferralCheckbox" className="text-sm font-medium text-gray-900 w-[318px]">
                    I don't have a referral code trst
                  </label>
                </div>
                <div className="w-full flex items-center justify-between mt-3">
                  <button onClick={() => setShowReferralCode(false)} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                    back
                  </button>
                  <button onClick={() => setShowPassword(true)} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center relative p-5">
            <label className="text-sm border border-black rounded-full px-2 absolute top-3 right-8 z-10 bg-white">Enter your password here</label>
            <div className="min-w-min min-h-min border border-black rounded-xl p-2">
              <div className="flex flex-col items-start mt-5 relative">
                <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 my-3 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                  <input
                    type="password"
                    className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                    placeholder="Password"
                  />
                </div>
                <label className="text-sm border border-black rounded-full px-2 absolute top-[3.7rem] left-2 z-10 bg-white">Confirm password</label>
                <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                  <input
                    type="password"
                    className="w-[20rem] pr-12 border-none focus:outline-none text-sm mt-1"
                    placeholder="Confirm password"
                  />
                  <button onClick={() => { setShowPassword(false); setShowReferralCode(true); }} className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                    back
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full px-4 py-2.5 border border-black rounded-lg text-sm mt-[2rem] hover:border-b-4 hover:border-r-4">
                Submit
              </button>
            </div>
          </div>
        )}
        <label className="text-xs">
          Switching to a creator account?
          <span className="hover:underline">
            <Link href="/sign-up"> Click here</Link>
          </span>
        </label>
      </section>
    </main>
  );
}

export default SignUpUser;
