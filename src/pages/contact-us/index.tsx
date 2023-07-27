import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import bitdinosaur from "@/components/imgs/bitdinosaur-logo.png";
import twitter from "@/components/imgs/twitter.svg";
import telegram from "@/components/imgs/telegram.svg";
import mail from "@/components/imgs/mail.svg";
import ArrowCircleLeft from "@/components/imgs/arrow-circle-left.svg";
import ArrowLeft from "@/components/imgs/arrow-left.svg";

export default function Contactus() {
  return (
    <div className="w-full h-screen bg-indigo-50 relative overflow-hidden">
      <div className="absolute w-1/2 h-1/2 bottom-0 left-10 mid:left-[-80px] large:left-[-160px] xlarge:left-20 3xl:left-56">
        <div className="scale-150">
          <Image src={bitdinosaur} alt="dinosaur" />
        </div>
      </div>
      <div className="w-full h-screen bg-white/30 backdrop-blur-md flex justify-end">
        <div className="relative large:w-1/2 large:h-screen xlarge:w-1/3 xlarge:h-screen bg-cardbg shadow-gray-500 flex flex-col justify-center items-start p-10">
          <div className="top-8 left-8 absolute ">
            <Link href="/" className="flex h-6 w-6 justify-start">
              <Image
                src={ArrowLeft}
                alt="contact_us"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-24 h-full flex">
              <Image src={bitdinosaur} alt="dinosaur" />
            </div>
            <div>
              <p className="font-bold text-xl">
                <span className="text-indigo-500">Bit</span>
                <span>Dinosaur</span>
              </p>
              <p className="text-xs font-bold text-gray-400">
                Blockchain Ecological Data Observer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-center">
            <div className="h-1 w-16 border-t-2 border-gray-400"></div>

            <div className="flex items-center">
              <Link
                href="https://twitter.com/bitdinosaurio"
                className="flex h-8 w-8 items-center justify-start text-indigo-600"
              >
                <Image src={twitter} alt="contact_us" />
              </Link>
              <Link href="https://twitter.com/bitdinosaurio">
                <p className="text-gray-700 text-sm">@Bitdinosaurio</p>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="https://t.me/BitDinosaurLabs"
                className="flex h-8 w-8 items-center justify-start text-indigo-600"
              >
                <Image src={telegram} alt="contact_us" />
              </Link>
              <Link href="https://t.me/BitDinosaurLabs">
                <p className="text-gray-700 text-sm">@BitDinosaurLabs</p>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="mailto:team@bitdinosaur.io"
                className="flex h-8 w-8 items-center justify-start text-indigo-600"
              >
                <Image src={mail} alt="contact_us" />
              </Link>
              <Link href="mailto:team@bitdinosaur.io">
                <p className="text-gray-700 text-sm">team@bitdinosaur.io</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
