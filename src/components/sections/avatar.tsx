import React from "react";
import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";

export default function AvatarCom() {
  return (
    <div className="flex gap-5">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              className="h-full w-full cursor-pointer rounded-[inherit] object-cover"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="Pedro Duarte"
            />
            <Avatar.Fallback
              className="text-indigo-300 cursor-pointer leading-1 flex h-full w-full items-center justify-center bg-gray-300 text-[15px] font-medium"
              delayMs={600}
            >
              JD
            </Avatar.Fallback>
          </Avatar.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] mr-6 bg-white rounded-md font-medium font-roboto p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-base tracking-wide text-gray-700 flex items-center rounded-[3px] h-8 px-3 relative select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-800">
              <Link href="/contact-us">Sign Up</Link>
            </DropdownMenu.Item>

            <DropdownMenu.Item className="group text-base tracking-wide text-gray-700 flex items-center rounded-[3px] h-8 px-3 relative select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-800">
              <Link href="/contact-us">Log In</Link>
            </DropdownMenu.Item>

            <DropdownMenu.Arrow className="fill-white mr-6" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
