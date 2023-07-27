import { useState } from "react";
import Image from "next/image";
import ComingIll from "@/components/imgs/coming.svg";

export function Coming() {
  return (
    // -mx-4 option
    <div className="flex flex-col h-full w-full rounded-lg border-2 border-solid border-gray-100 bg-white p-2">
      <div className="flex flex-col items-center mid:flex-row mid:justify-center p-2">
        <div className="flex flex-col mid:mr-6 large:mr-12 xlarge:mr-24 ">
          <p className="text-center text-2xl font-bold font-coming mb-2 text-indigo-300 mid:text-3xl">
            Coming Soon
          </p>
          <p className="text-xs text-center font-coming mid:max-w-xxs text-gray-500 mid:text-sm">
            We are currently working hard on this part
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex h-60 w-60 mid:w-72 mid:h-72">
            <Image src={ComingIll} alt="coming" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
