import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Help from "@/components/imgs/help.svg";

import HelpIcon from "../icons/help-icon";

import { LayoutGrid } from "lucide-react";
import { HelpCircle } from "lucide-react";

export function MenuBTN() {
  return (
    <div className="">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center outline-none"
            aria-label="Customise options"
          >
            <LayoutGrid color="#000000cc" size={24} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] mr-6 bg-white rounded-md font-medium font-roboto p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-base tracking-wide text-gray-700 flex items-center rounded-[3px] h-8 px-3 relative select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-800">
              <Link href="/contact-us">Contact Us</Link>
            </DropdownMenu.Item>

            {/* <DropdownMenu.Item className="group text-base tracking-wide text-gray-700 flex items-center rounded-[3px] h-8 px-3 relative select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-800">
              <Link href="/contact-us">Donate</Link>
            </DropdownMenu.Item> */}

            <DropdownMenu.Arrow className="fill-white mr-6" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
