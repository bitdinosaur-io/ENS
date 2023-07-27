import Image from "next/image";
import bitdinosaur from "@/components/imgs/bitdinosaur-logo.png";
import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <p className="flex text-sm font-medium tracking-wider text-indigo-800 xsmall:text-base">
          <Link href="/contact-us">Powered By</Link>
        </p>
        <div className="ml-1 h-8 w-8">
          <Tooltip
            content={
              <div className="flex flex-col items-center">
                <Image
                  src={bitdinosaur}
                  width={100}
                  height={100}
                  alt="bitdinosaur"
                  className="animate-bounce"
                ></Image>
                <p className="font-body">BitDinosaur</p>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Image
              src={bitdinosaur}
              width={100}
              height={100}
              alt="bitdinosaur"
            ></Image>
          </Tooltip>
        </div>
      </div>

      <p className="text-center text-xs text-gray-700 xsmall:text-sm">
        Copyright <span className="font-sans text-gray-700">©</span> 2022-2023
        BitDinosaur All Rights Reserved
      </p>
    </div>
  );
}
