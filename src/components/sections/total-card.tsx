import { TotalCardProps, LatestMintInfo } from "@/types";
import Image from "next/image";
import { useEffect, Fragment, useState } from "react";
import { Drawer } from "@material-tailwind/react";
// import TestTable from "./protocoltable";
import { Dialog, Transition } from "@headlessui/react";
import useSWR, { SWRConfig } from "swr";
import HttpClient from "@/utils/client";
import { API_ENDPOINTS } from "@/utils/endpoints";

export function TotalCard({
  name,
  logo,
  total,
  // datas,
  symbol,
  color = "#FDEDD4",
}: TotalCardProps) {
  const { data, error } = useSWR(API_ENDPOINTS.GETADDRESS);
  // console.log(data, "xix");

  const check = () => {
    if (name == "Tick") {
      setTest(true);
      console.log("yes");
      console.log(test);
    } else {
      console.log("no");
    }
  };
  const [test, setTest] = useState(false);
  const trigger = () => setTest((cur) => !cur);

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setTest(false);
  }

  function openModal() {
    setTest(true);
  }
  return (
    <div
      className="relative box-border flex grow shrink-0 min-h-36 min-w-56 items-center rounded-lg py-4 pr-2 shadow-card first:ml-0 last:mr-0 xl:flex-row xl:justify-between xl:py-7 3xl:justify-between"
      style={{ backgroundColor: color }}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center pl-4">
          <div className="w-8 my-3 mid:w-10">
            <Image
              className="object-contain"
              src={logo}
              width={100}
              height={100}
              alt="s"
            />
          </div>
          <div className="ml-2 w-full flex-1 text-base font-medium tracking-normal text-gray-900 large:text-lg 2xl:text-lg 3xl:text-xl">
            {name}
          </div>
        </div>
        <div className="mt-0 xl:px-2">
          <div className="flex items-center my-3 justify-between pl-5 xlarge:pl-3 text-xs font-medium 2xl:text-sm">
            <span
              className="tracking-wider text-sm text-gray-600"
              // onClick={check}
            >
              {new Intl.NumberFormat("en-US", {
                maximumSignificantDigits: 9,
              }).format(total)}
              {symbol}
            </span>
          </div>
        </div>
      </div>
      {/* Dialog */}

      {/* <Transition appear show={test} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-12 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="px-4 pt-2">
                    <TestTable info={datas} />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </div>
  );
}

interface TotalsSliderProps {
  totals: TotalCardProps[];
  // datas: LatestMintInfo[];
  fallback?: any;
}

const TotalSlider = ({ totals }: TotalsSliderProps, fallback: any) => {
  return (
    <div className="grid grid-cols-1 auto-cols-auto gap-4 xsmall:grid-cols-2 mid:grid-cols-3 xlarge:grid-cols-5">
      {totals.map((total, idx) => (
        <TotalCard
          key={idx}
          name={total.name}
          logo={total.logo}
          total={total.total}
          // datas={datas}
          color={total.color}
          symbol={total.symbol}
        />
      ))}
    </div>
  );
};

export default TotalSlider;
