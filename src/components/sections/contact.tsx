import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Contact from "@/components/imgs/contact.svg";
import bitdinosaur from "@/components/imgs/bitdinosaur-logo.png";
import twitter from "@/components/imgs/twitter.svg";
import telegram from "@/components/imgs/telegram.svg";
import mail from "@/components/imgs/mail.svg";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
} from "@material-tailwind/react";

export function Contactus() {
  return (
    <div className="flex items-center">
      {/* contact mobile */}
      <Popover placement="bottom">
        <PopoverHandler>
          <div className="flex h-9 w-9 items-center justify-end text-indigo-600 xsmall:w-14 xsmall:h-14 mid:hidden">
            <Image src={Contact} alt="contact_us" />
          </div>
        </PopoverHandler>
        <PopoverContent className="w-60">
          <div className="flex items-center justify-start gap-5 pl-4 pb-3">
            <div className="flex h-13 w-13 items-center xsmall:w-14 xsmall:h-14 mid:h-16 mid:w-16">
              <Image src={bitdinosaur} alt="bit_logo" />
            </div>
            <div className="flex flex-col">
              <Typography
                variant="paragraph"
                className="font-body font-bold text-sm text-gray-800"
              >
                BitDinosaur
              </Typography>
              <Typography
                variant="paragraph"
                className="font-body font-semibold text-xs text-gray-600"
              >
                Tech Co,LTD
              </Typography>
            </div>
          </div>
          <div className="px-4 pb-1">
            <Typography
              variant="paragraph"
              className="font-body font-semibold text-xs text-gray-400"
            >
              &quot;Blockchain Ecological Data Observer&quot;
            </Typography>
          </div>
          <div className="flex items-center">
            <Link
              href="https://twitter.com/bitdinosaurio"
              className="flex h-13 w-13 items-center justify-center text-indigo-600 xsmall:w-14 xsmall:h-14 mid:hidden"
            >
              <Image src={twitter} alt="contact_us" />
            </Link>
            <Link
              href="https://t.me/BitDinosaurLabs"
              className="flex h-13 w-13 items-center justify-center text-indigo-600 xsmall:w-14 xsmall:h-14 mid:hidden"
            >
              <Image src={telegram} alt="contact_us" />
            </Link>
            <Link
              href="mailto:team@bitdinosaur.io"
              className="flex h-13 w-13 items-center justify-center text-indigo-600 xsmall:w-14 xsmall:h-14 mid:hidden"
            >
              <Image src={mail} alt="contact_us" />
            </Link>
          </div>
        </PopoverContent>
      </Popover>

      {/* contact midscreen */}
      <Popover placement="bottom">
        <PopoverHandler>
          <button className="hidden rounded-full bg-indigo-600 text-center font-medium text-white transition duration-500 ease-in-out hover:bg-indigo-400 xsmall:block xsmall:h-9 xsmall:w-24 xsmall:leading-9 xsmall:text-xs xsmall:px-2 mid:h-12 mid:w-32 mid:text-base mid:leading-nav">
            Contact Us
          </button>
        </PopoverHandler>
        <PopoverContent className="w-90">
          <div className="flex items-center justify-center gap-8 pb-3">
            <div className="flex h-13 w-13 items-center xsmall:w-14 xsmall:h-14 mid:h-16 mid:w-16">
              <Image src={bitdinosaur} alt="bit_logo" />
            </div>
            <div className="flex flex-col">
              <Typography
                variant="paragraph"
                className="font-body font-bold text-base text-gray-800"
              >
                BitDinosaur
              </Typography>
              <Typography
                variant="paragraph"
                className="font-body font-semibold text-sm text-gray-700"
              >
                Tech Co,LTD
              </Typography>
            </div>
          </div>
          <div className="px-2 pb-1">
            <Typography
              variant="paragraph"
              className="font-body font-semibold text-xs text-gray-400"
            >
              &quot;Blockchain Ecological Data Observer&quot;
            </Typography>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="https://twitter.com/bitdinosaurio"
              className="flex h-13 w-13 items-center justify-center text-indigo-600 xsmall:w-14 xsmall:h-14"
            >
              <Image src={twitter} alt="contact_us" />
            </Link>
            <Link
              href="https://t.me/BitDinosaurLabs"
              className="flex h-13 w-13 items-center justify-center text-indigo-600 xsmall:w-14 xsmall:h-14"
            >
              <Image src={telegram} alt="contact_us" />
            </Link>
            <Link
              href="mailto:team@bitdinosaur.io"
              className="flex h-13 w-13 items-center justify-center text-indigo-600 xsmall:w-14 xsmall:h-14"
            >
              <Image src={mail} alt="contact_us" />
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
