import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import bitdinosaur from "@/components/imgs/bitdinosaur-logo.png";
import BgPic_1 from "@/components/imgs/bg-1.jpg";
import BgPic_2 from "@/components/imgs/bg-2.jpg";
import SignUpIll from "@/components/imgs/signup.svg";
import ArrowLeft from "@/components/imgs/arrow-left.svg";
import logopic from "@/components/imgs/logo-4.png";

import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export default function SignUp() {
  return (
    <div className="w-full h-screen bg-indigo-50 relative overflow-hidden">
      <div className="absolute w-full h-full">
        <div className="">
          <Image src={BgPic_2} alt="bg" fill={true} />
        </div>
      </div>
      <div className="w-full h-screen flex justify-end">
        <div className="relative px-8 mid:px-32 py-10 3xl:px-44 mid:w-full large:w-1/2 large:h-screen bg-cardbg flex flex-col justify-center items-start ">
          {/* <div className="top-8 left-8 absolute ">
            <Link href="/" className="flex h-6 w-6 justify-start">
              <Image
                src={ArrowLeft}
                alt="contact_us"
                width={100}
                height={100}
              />
            </Link>
          </div> */}
          {/* logo+brand */}
          <div className="flex flex-wrap items-center absolute top-10 left-8 mid:left-32 3xl:left-44">
            <div className="flex h-13 w-13 items-center xsmall:w-14 xsmall:h-14 mid:h-14 mid:w-14">
              <Image src={logopic} alt="logo" />
            </div>
            <div className="">
              <p className="ml-3 flex font-titbackup text-2xl tracking-tight xsmall:text-test mid:text-2xl font-semibold text-indigo-800">
                <span className="font-titbackup">W</span>
                <span className="font-titbackup">atcher</span>
                <span className="font-normal text-gray-600">.tools</span>
              </p>
            </div>
          </div>
          {/* title */}
          <div className="mb-8 mt-10 large:mt-20 large:mb-7">
            <div>
              <p className="font-bold text-3xl mb-4">Sign Up</p>
            </div>
            <div className="w-full">
              <p className="text-sm text-gray-500">
                Get instant access to our premium data and start watching
              </p>
            </div>
          </div>
          {/* form */}
          <div className="w-full">
            <Form.Root method="post" className="w-full">
              {/* email */}
              <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-base font-medium leading-[35px] text-gray-600">
                    Email
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your email
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="typeMismatch"
                  >
                    Please provide a valid email
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full inline-flex h-9 appearance-none items-center justify-center rounded-md px-3 text-base leading-none border-gray-300 border-2 text-gray-600 outline-0 ring-0 focus:border-indigo-300 focus:border-2"
                    type="email"
                    required
                  />
                </Form.Control>
              </Form.Field>
              {/* username */}
              <Form.Field className="grid mb-[10px]" name="Username">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-base font-medium leading-[35px] text-gray-600">
                    Username
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your username
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="typeMismatch"
                  >
                    Please provide a valid Username
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full inline-flex h-9 appearance-none items-center justify-center rounded-lg px-3 text-base leading-none border-gray-300 border-2 text-gray-600 outline-0 ring-0 focus:border-indigo-300 focus:border-2"
                    type="text"
                    required
                  />
                </Form.Control>
              </Form.Field>
              {/* password */}
              <Form.Field className="grid mb-[10px]" name="Password">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-base font-medium leading-[35px] text-gray-600">
                    Password
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your password
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="typeMismatch"
                  >
                    Please provide a valid Password
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full inline-flex h-9 appearance-none items-center justify-center rounded-lg px-3 text-base leading-none border-gray-300 border-2 text-gray-600 outline-0 ring-0 focus:border-indigo-300 focus:border-2"
                    type="password"
                    required
                  />
                </Form.Control>
              </Form.Field>
              {/* re password */}
              <Form.Field
                className="grid mb-[10px]"
                name="Input Password Again"
              >
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-base font-medium leading-[35px] text-gray-600">
                    Confirm Password
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your password again
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="typeMismatch"
                  >
                    Please inter a currect Password
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full inline-flex h-9 appearance-none items-center justify-center rounded-lg px-3 text-base leading-none border-gray-300 border-2 text-gray-600 outline-0 ring-0 focus:border-indigo-300 focus:border-2"
                    type="password"
                    required
                  />
                </Form.Control>
              </Form.Field>
              {/* tos */}
              <Form.Field
                className="grid mt-5 mb-[10px]"
                name="Input Password Again"
              >
                <div className="flex flex-col items-start justify-between">
                  <div className="flex items-start gap-2">
                    <Form.Control asChild>
                      <input
                        type="checkbox"
                        required
                        className="outline-none w-5 h-5 appearance-none focus:ring-0 checked:bg-indigo-300 focus:hover:bg-indigo-300 rounded-md border-gray-300 border-2 focus:outline-none"
                      />
                    </Form.Control>
                    <Form.Label className="text-xs font-medium leading-normal tracking-tight text-gray-600">
                      By createing an account you agree to the{" "}
                      <Link href="/">
                        <span className="text-indigo-400 underline decoration-1 underline-offset-2">
                          Term Of Use{" "}
                        </span>
                      </Link>
                      and our{" "}
                      <Link href="/">
                        <span className="text-indigo-400 underline decoration-1 underline-offset-2">
                          Private Policy
                        </span>
                      </Link>
                    </Form.Label>
                  </div>
                  <Form.Message
                    className="text-sm pl-7 text-red-600 opacity-[0.8]"
                    match="valueMissing"
                  >
                    You have to agree our policy to create an account
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-red-600 opacity-[0.8]"
                    match="typeMismatch"
                  >
                    Please inter a currect Password
                  </Form.Message>
                </div>
              </Form.Field>
              {/* submit btn */}
              <Form.Submit asChild>
                <button className="box-border w-full text-white shadow-gray-300 hover:bg-indigo-200 inline-flex h-11 items-center justify-center rounded-lg bg-indigo-300 px-3 font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-indigo-400 focus:outline-none mt-3">
                  Create Account
                </button>
              </Form.Submit>
            </Form.Root>
          </div>
          {/* login */}
          <div className="w-full flex items-center justify-center mt-4 text-sm font-medium leading-normal text-gray-600">
            <p>Already have an account?</p>
            <Link href="/">
              <span className="text-indigo-400">&nbsp;Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
