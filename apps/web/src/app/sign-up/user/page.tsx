'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userSchema } from '@/features/user/schemas/userSchema';
import { useMutation } from "@tanstack/react-query";
import instance from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import authStore from '@/zustand/authStore';
import { useRouter } from 'next/navigation';

const SignUpUser: React.FC = () => {
  const [showReferralCode, setShowReferralCode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const setAuth = authStore((state: any) => state.setAuth);

  const { mutate: createUser } = useMutation({
    mutationFn: async (values: any) => {
      return await instance.post('/user/create-user', {
        email: values.email,
        password: values.password,
        referralCode: values.referralCode || undefined,
      });
    },
    onSuccess: () => {
      toast.success('User created successfully!');
      router.push('/sign-in');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Failed to create user');
    },
  });

  return (
    <main className="w-full h-screen">
      <section className="m-auto w-full max-w-screen-xl h-screen flex flex-col items-center justify-center relative">
<<<<<<< Updated upstream
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '', referralCode: '', skipReferral: false }}
          validationSchema={userSchema}
          onSubmit={(values) => {
            createUser({
              email: values.email,
              referralCode: values.skipReferral ? undefined : values.referralCode,
              password: values.password,
            });
          }}
        >
          {({ values }) => (
            <Form className="flex items-center justify-center">
              {!showReferralCode && !showPassword ? (
                <div className="flex flex-col items-center justify-center relative p-5">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-3 left-8 z-10 bg-white">Enter your email here</label>
                  <div className="min-w-min min-h-min border border-black rounded-xl p-2">
                    <div className="flex flex-col items-start mt-5">
                      <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                        <Field
                          name="email"
                          type="email"
                          className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                          placeholder="jane@gmail.com"
                        />
                        <button type="button" onClick={(e) => { e.preventDefault(); setShowReferralCode(true); }} className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                          next
                        </button>
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
=======
        {!showReferralCode && !showPassword ? (
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
>>>>>>> Stashed changes
                  </div>
                </div>
              ) : !showPassword ? (
                <div className="flex flex-col items-center justify-center relative p-5">
                  <label className="text-sm border border-black rounded-full px-2 absolute top-3 left-8 z-10 bg-white">Enter your referral code here</label>
                  <div className="min-w-min min-h-min border border-black rounded-xl p-2">
                    <div className="flex flex-col items-start mt-5">
                      {!values.skipReferral && (
                        <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                          <Field
                            name="referralCode"
                            type="text"
                            className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                            placeholder="Referral code (optional)"
                          />
                        </div>
                      )}
                      <div className="flex items-center space-x-2 mt-3">
                        <Field
                          name="skipReferral"
                          type="checkbox"
                          className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"
                        />
                        <label htmlFor="skipReferralCheckbox" className="text-sm font-medium text-gray-900 w-[318px]">
                          I don't have a referral code
                        </label>
                      </div>
                      <div className="w-full flex items-center justify-between mt-3">
                        <button type="button" onClick={(e) => { e.preventDefault(); setShowReferralCode(false); }} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                          back
                        </button>
                        <button type="button" onClick={(e) => { e.preventDefault(); setShowPassword(true); }} className="border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
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
                        <Field
                          name="password"
                          type="password"
                          className="w-[20rem] pr-12 border-none focus:outline-none text-sm"
                          placeholder="Password"
                        />
                      </div>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                      <div className="relative flex items-center border border-black rounded-lg px-4 py-2.5 focus-within:border-b-4 focus-within:border-r-4 mt-2">
                        <Field
                          name="confirmPassword"
                          type="password"
                          className="w-[20rem] pr-12 border-none focus:outline-none text-sm mt-1"
                          placeholder="Confirm password"
                        />
                        <button type="button" onClick={(e) => { e.preventDefault(); setShowPassword(false); setShowReferralCode(true); }} className="absolute right-2 border border-black px-3 py-[2px] rounded-xl text-sm hover:border-b-4 hover:border-r-4">
                          back
                        </button>
                      </div>
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2.5 border border-black rounded-lg text-sm mt-[2rem] hover:border-b-4 hover:border-r-4">
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
        <label className="text-xs mt-3">
          Switching to a creator account?
          <span className="hover:underline">
            <Link href="/sign-up"> Click here</Link>
          </span>
        </label>
      </section>
    </main>
  );
};

export default SignUpUser;
