import Image from "next/image";
import logopic from "@/components/imgs/logo-4.png";
import { useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import { MenuBTN } from "@/components/sections/menu";
import AvatarCom from "../sections/avatar";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { GiftTopIcon, GiftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export function TopNav() {
  // donate dialog handler
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="flex flex-wrap h-full w-full items-center justify-between bg-indigo-50 pl-4 pr-3 py-4 mid:pl-6 dark:bg-light-dark">
      {/* logo+brand */}
      <div
        className="flex flex-wrap items-center cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex h-13 w-13 items-center xsmall:w-14 xsmall:h-14 mid:h-16 mid:w-16">
          <Image src={logopic} alt="logo" />
        </div>
        <div className="">
          <Tooltip
            content={
              <div className="flex flex-col items-center">
                <p className="font-body">
                  Be a Minimalist and General Blockchain Tool
                </p>
                <p className="font-body">
                  Make Encrypted World Data with Application Value
                </p>
              </div>
            }
            placement="bottom"
            className="w-64 mid:w-fit"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <p className="ml-3 flex font-titbackup text-2xl tracking-tight xsmall:text-test mid:text-3xl font-semibold text-indigo-800">
              <span className="font-titbackup">W</span>
              <span className="font-titbackup">atcher</span>
              {/* <span className="font-normal text-black/50">.</span> */}
              <span className="font-normal text-gray-600">.tools</span>
            </p>
          </Tooltip>
        </div>
      </div>

      {/* contact_us comp */}
      {/* px-3 when mutiple items */}
      <div className="flex items-center rounded-full bg-cardbg py-2 px-2 w-fit h-fit gap-6">
        <MenuBTN />
        {/* <AvatarCom /> */}
      </div>
      {/* <Contactus /> */}

      {/*Donate Dialog */}
      {/* <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex">
            <h3 className="font-body flex items-center">
              Donate
            </h3>
          </div>
        </DialogHeader>
        <DialogBody className="p-0">
          <div className="flex flex-col items-center mb-2">
            <Image
              src={bitdinosaur}
              width={100}
              height={100}
              alt="bitdinosaur"
            ></Image>
            <p className="font-body mt-5">Like our tool ?</p>
            <p className="font-body">Bought us some cookie 🍪</p>
          </div>
        </DialogBody>
        <DialogFooter className="justify-end">
          <Button
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="mr-1 font-body"
          >
            <span>Nope</span>
          </Button>
          <Button
            variant="gradient"
            className="font-body"
            color="indigo"
            onClick={handleOpen}
          >
            <span className="flex items-center justify-center">
              Sure
              <HeartIcon strokeWidth={2} className="h-4 w-4 ml-1" />
            </span>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </div>
  );
}
