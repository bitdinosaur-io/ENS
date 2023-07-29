import "regenerator-runtime/runtime";
import { API_ENDPOINTS } from "@/utils/endpoints";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";
import { useState } from "react";
import HttpClient from "@/utils/client";
import type {
  NextPageWithLayout,
  Totals,
  GetInfoData,
} from "@/types";
import useSWR, { SWRConfig, unstable_serialize } from "swr";
import cn from "classnames";
import Eth from "@/components/imgs/eth.png";
import Ens from "@/components/imgs/ens.svg";
import Renew from "@/components/imgs/renew.svg";
import DAO from "@/components/imgs/EnsDao.svg";
import Expire from "@/components/imgs/expire.svg";
import ExpireProtect from "@/components/imgs/expirap.svg";
import Address from "@/components/imgs/address.svg";
import { ChevronDown } from "@/components/icons/chevron-down";
import { RadialCharts } from "@/components/sections/radialcharts";
import { TopNav } from "@/components/ui/top-nav";
import { Footer } from "@/components/ui/footer";
import TotalSlider, { TotalCard } from "@/components/sections/total-card";
import { PieCharts } from "@/components/sections/piecharts";
import { Trends } from "@/components/sections/trends";
import { Check } from "lucide-react";
import ReuseTable from "@/components/sections/reusetable";
import { Tab } from "@headlessui/react";
import TransformPi from "@/components/functions/tranformpi";

import { Collapse, Tooltip } from "@material-tailwind/react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import GenQuarterData from "@/components/functions/tranformpi";

const fetcher = async (url: any) =>
  await HttpClient.get<Totals>(url).then((res) => res);

export async function getServerSideProps() {
  const ensInfo = await fetcher(API_ENDPOINTS.ENSTOTAL);

  return {
    props: {
      fallback: {
        [unstable_serialize(["API_ENDPOINTS.ENSTOTAL", "ensInfo", 1])]: ensInfo,
      },
    },
  };
}

function Repo() {
  const total: { data: any } = useSWR(["API_ENDPOINTS.ENSTOTAL", "ensInfo", 1]);

  let rec: GetInfoData = {
    totals: [
      {
        name: "Fee",
        logo: Eth,
        total: JSON.parse(total.data.fee_total),
        color: "#e0e7ff",
        symbol: " ETH",
      },
      {
        name: ".eth",
        logo: Ens,
        total: JSON.parse(total.data.all_total),
        color: "#e0e7ff",
      },
      {
        name: "Renew",
        logo: Renew,
        total: JSON.parse(total.data.renew_total),
        color: "#e0e7ff",
      },
      {
        name: "DAO",
        logo: DAO,
        total: 16, // JSON.parse(total.data.dao),
        color: "#e0e7ff",
      },
      {
        name: "Expiration",
        logo: Expire,
        total: JSON.parse(total.data.expiration_total),
        color: "#e0e7ff",
      },
      {
        name: "Expiration Protect",
        logo: ExpireProtect,
        total: JSON.parse(total.data.expiration_protect_total),
        color: "#e0e7ff",
      },
      {
        name: "Owner Address",
        logo: Address,
        total: JSON.parse(total.data.owner_address_total),
        color: "#e0e7ff",
      },
    ],

    op_daily_all: JSON.parse(total.data.op_daily_all),
    cost_daily_all: JSON.parse(total.data.cost_daily_all),
    op_daily_registrartion: JSON.parse(total.data.op_daily_registrartion),
    op_daily_renew: JSON.parse(total.data.op_daily_renew),
    cost_daily_registrartion: JSON.parse(total.data.cost_daily_registrartion),
    cost_daily_renew: JSON.parse(total.data.cost_daily_renew),
    pi_quarter_cost: JSON.parse(total.data.pi_quarter_cost),
    pi_quarter_registrartion_cost: JSON.parse(
      total.data.pi_quarter_registrartion_cost
    ),
    pi_quarter_registrartion_total: JSON.parse(
      total.data.pi_quarter_registrartion_total
    ),
    pi_quarter_renew_cost: JSON.parse(total.data.pi_quarter_renew_cost),
    pi_quarter_renew_total: JSON.parse(total.data.pi_quarter_renew_total),
    pi_quarter_total: JSON.parse(total.data.pi_quarter_total),
    pi_name_length: JSON.parse(total.data.pi_name_length),
    pi_name_type: JSON.parse(total.data.pi_name_type),
    top_hodle: JSON.parse(total.data.top_hodle),
    top_max_expiration: JSON.parse(total.data.top_max_expiration),
    top_renew_frequent: JSON.parse(total.data.top_renew_frequent),
    latest_registrartion_list: JSON.parse(total.data.latest_registrartion_list),
    latest_renew_list: JSON.parse(total.data.latest_renew_list),
    latest_expiration_list: JSON.parse(total.data.latest_expiration_list),
    latest_free_list: JSON.parse(total.data.latest_free_list),
  };

  const LatestListCol = [
    {
      Header: "Name",
      accessor: "name",
      // minWidth: 60,
      // maxWidth: 140,
    },
    {
      Header: "Times",
      accessor: "times",
      // minWidth: 60,
      // maxWidth: 120,
    },
  ];

  const TophoderCol = [
    {
      Header: "Owner",
      accessor: "owner",
      minWidth: 220,
      maxWidth: 440,
    },
    {
      Header: "Value",
      accessor: "value",
      minWidth: 10,
      maxWidth: 120,
    },
  ];

  const TopMaxExpCol = [
    {
      Header: "Name",
      accessor: "name",
      minWidth: 60,
      maxWidth: 380,
    },
    {
      Header: "Expiration Date",
      accessor: "max_expiration",
      minWidth: 120,
      maxWidth: 120,
    },
  ];

  const TopRenewFrqCol = [
    {
      Header: "Name",
      accessor: "name",
      minWidth: 60,
      maxWidth: 380,
    },
    {
      Header: "Value",
      accessor: "value",
      minWidth: 60,
      maxWidth: 120,
    },
  ];

  const RadialData = [{ 'id': '2018-01-01 00:00:00+00', 'data': [{ 'x': 'registrartion', 'y': 116.58723576000001 }] }, { 'id': '2018-04-01 00:00:00+00', 'data': [{ 'x': 'registrartion', 'y': 128.0026411 }] }, { 'id': '2018-07-01 00:00:00+00', 'data': [{ 'x': 'registrartion', 'y': 117.03966469999999 }] }, { 'id': '2018-10-01 00:00:00+00', 'data': [{ 'x': 'registrartion', 'y': 60.011841 }] }, { 'id': '2019-01-01 00:00:00+00', 'data': [{ 'x': 'registrartion', 'y': 73.658300001001 }] }, { 'id': '2019-04-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 24.537846855858685 }, { 'x': 'registrartion', 'y': 194.42162709198084 }] }, { 'id': '2019-07-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 11.125056618138117 }, { 'x': 'registrartion', 'y': 132.0219267137928 }] }, { 'id': '2019-10-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 68.90439037851796 }, { 'x': 'registrartion', 'y': 1557.1112253698036 }] }, { 'id': '2020-01-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 234.54533963059643 }, { 'x': 'registrartion', 'y': 513.820845308638 }] }, { 'id': '2020-04-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 721.6446970019124 }, { 'x': 'registrartion', 'y': 580.5486658939664 }] }, { 'id': '2020-07-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 571.9621245320211 }, { 'x': 'registrartion', 'y': 1473.1853061336103 }] }, { 'id': '2020-10-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 376.9880603123245 }, { 'x': 'registrartion', 'y': 674.7829645899445 }] }, { 'id': '2021-01-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 231.67172380078867 }, { 'x': 'registrartion', 'y': 1015.8012659607043 }] }, { 'id': '2021-04-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 199.7386072506881 }, { 'x': 'registrartion', 'y': 899.3766425534479 }] }, { 'id': '2021-07-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 181.42241575550005 }, { 'x': 'registrartion', 'y': 1781.2524218030467 }] }, { 'id': '2021-10-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 296.0048519807949 }, { 'x': 'registrartion', 'y': 3385.4425686590116 }] }, { 'id': '2022-01-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 443.6564264323038 }, { 'x': 'registrartion', 'y': 3405.735827243673 }] }, { 'id': '2022-04-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 1066.2386143331582 }, { 'x': 'registrartion', 'y': 8042.90598692338 }] }, { 'id': '2022-07-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 2418.9766802230506 }, { 'x': 'registrartion', 'y': 9456.184206334001 }] }, { 'id': '2022-10-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 1632.820434812059 }, { 'x': 'registrartion', 'y': 3165.688874054799 }] }, { 'id': '2023-01-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 1564.1695762659022 }, { 'x': 'registrartion', 'y': 2177.447015251113 }] }, { 'id': '2023-04-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 1572.2518210040937 }, { 'x': 'registrartion', 'y': 1038.5645706328955 }] }, { 'id': '2023-07-01 00:00:00+00', 'data': [{ 'x': 'renew', 'y': 350.77392310567467 }, { 'x': 'registrartion', 'y': 302.2495148983662 }] }];



  // 统计面板折叠开关
  const [opentotal, setOpenTotal] = useState(true);
  const toggleTotalOpen = () => setOpenTotal((cur) => !cur);
  // 趋势面板折叠开关
  const [opentrends, setOpenTrends] = useState(true);
  const toggleTrendsOpen = () => setOpenTrends((cur) => !cur);
  // 饼图面板折叠开关
  const [opencharts, setOpenCharts] = useState(true);
  const toggleChartsOpen = () => setOpenCharts((cur) => !cur);
  // 操作面板折叠开关
  const [openevent, setOpenEvent] = useState(true);
  const toggleEventOpen = () => setOpenEvent((cur) => !cur);
  // 操作面板折叠开关
  const [openanalysis, setOpenAnalysis] = useState(true);
  const toggleAnalysisOpen = () => setOpenAnalysis((cur) => !cur);

  // 各趋势图开关
  const [openallop, setOpenAllOp] = useState(true);
  const toggleAllOP = () => setOpenAllOp((cur) => !cur);
  const [openallfee, setOpenAllFee] = useState(true);
  const toggleAllFee = () => setOpenAllFee((cur) => !cur);
  const [openrenewop, setOpenRenewOp] = useState(false);
  const toggleRenewOP = () => setOpenRenewOp((cur) => !cur);
  const [openregop, setOpenRegOp] = useState(false);
  const toggleRegOP = () => setOpenRegOp((cur) => !cur);
  const [openrenewfee, setOpenRenewFee] = useState(false);
  const toggleRenewFee = () => setOpenRenewFee((cur) => !cur);
  const [openregfee, setOpenRegFee] = useState(false);
  const toggleRegFee = () => setOpenRegFee((cur) => !cur);

  // 各饼图开关
  const [openaddlength, setOpenAddLength] = useState(true);
  const toggleAddLength = () => setOpenAddLength((cur) => !cur);
  const [openaddtype, setOpenAddType] = useState(true);
  const toggleAddType = () => setOpenAddType((cur) => !cur);
  const [openall, setOpenAll] = useState(true);
  const toggleAll = () => setOpenAll((cur) => !cur);
  const [openrrcost, setOpenRRCost] = useState(true);
  const toggleCost = () => setOpenRRCost((cur) => !cur);
  const [openrrtotal, setOpenRRTotal] = useState(true);
  const toggleRRTotal = () => setOpenRRTotal((cur) => !cur);

  return (
    <>
      {/* SEO */}
      <NextSeo
        title="ENS - Watcher.tools"
        description="ENS ETH Watcher.tools tools Ethereum Name Service BlockChain Analysis"
      />

      {/* 顶部菜单 */}
      <div className="mb-3 flex flex-wrap">
        <div className="w-full sm:mb-0 ">
          <TopNav />
        </div>
      </div>

      {/* 磁贴栏 */}
      <div className="mb-8 rounded-lg bg-cardbg px-6 py-4">
        <div className="flex h-full w-full items-center justify-between pb-8 pt-4">
          {/* 内容块标题 */}
          <p className="text-2xl font-bold text-black/80 xsmall:text-3xl">
            Total
          </p>
          {/* 收起按钮提示 */}
          <Tooltip content="Collapse Panel">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 pt-0.5 shadow-gray-500 shadow-card transition duration-500 ease-in-out hover:bg-indigo-400"
              onClick={toggleTotalOpen}
            >
              {opentotal ? (
                <ChevronDown className="text-white transition-transform duration-700 ease-in-out" />
              ) : (
                <ChevronDown className="rotate-180 text-white transition-transform duration-700 ease-in-out" />
              )}
            </button>
          </Tooltip>
        </div>
        {/* 内容 */}
        <Collapse open={opentotal}>
          <div className="">
            <div className="mb-2 h-full w-full ">
              <TotalSlider totals={rec.totals} />
            </div>
          </div>
        </Collapse>
      </div>

      {/* 每日交易量 */}
      <div className="mb-8 rounded-lg z-10 bg-cardbg px-6 py-4">
        <div className="flex h-full w-full items-center justify-between py-8 tracking-wide text-black/80 ">
          {/* 内容块标题 */}
          <p className="text-2xl font-bold text-black/80 xsmall:text-3xl">
            Daily Trends
          </p>
          {/* 收起按钮提示 */}
          <Tooltip content="Collapse Panel">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 pt-0.5 shadow-gray-500 shadow-card transition duration-500 ease-in-out hover:bg-indigo-400"
              onClick={toggleTrendsOpen}
            >
              {opentrends ? (
                <ChevronDown className="text-white transition-transform duration-700 ease-in-out" />
              ) : (
                <ChevronDown className="rotate-180 text-white transition-transform duration-700 ease-in-out" />
              )}
            </button>
          </Tooltip>
        </div>
        {/* 内容 */}
        <Collapse open={opentrends}>
          <div className="mb-4 gap-3 grid auto-cols-max whitespace-nowrap grid-cols-2 text-sm mid:grid-cols-5 large:text-base large:flex h-full w-full">
            <button
              onClick={toggleAllOP}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openallop,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openallop,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openallop,

                  hidden: !openallop,
                })}
              />
              Registration And Renew
            </button>
            <button
              onClick={toggleAllFee}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openallfee,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openallfee,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openallfee,

                  hidden: !openallfee,
                })}
              />
              Registration And Renew Fee
            </button>
            <button
              onClick={toggleRenewOP}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openrenewop,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openrenewop,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openrenewop,

                  hidden: !openrenewop,
                })}
              />
              Renew
            </button>
            <button
              onClick={toggleRegOP}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openregop,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openregop,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openregop,

                  hidden: !openregop,
                })}
              />
              Registration
            </button>
            <button
              onClick={toggleRenewFee}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openrenewfee,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openrenewfee,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openrenewfee,

                  hidden: !openrenewfee,
                })}
              />
              Renew Fee
            </button>
            <button
              onClick={toggleRegFee}
              className={cn(
                "border-2 flex h-fit justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openregfee,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openregfee,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openregfee,

                  hidden: !openregfee,
                })}
              />
              Registration Fee
            </button>
          </div>
          <div className="mb-6 z-20 grid grid-cols-1 auto-cols-auto gap-4 xsmall:grid-cols-2">
            <div
              className={cn("h-full w-full", {
                flex: openallop,

                hidden: !openallop,
              })}
            >
              <Trends
                data={{
                  name: "ENS Daily Reigstrar And Renew Trends",
                  data: rec.op_daily_all,
                }}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openallfee,

                hidden: !openallfee,
              })}
            >
              <Trends
                data={{
                  name: "ENS Daily Reigstrar And Renew Fee Trends",
                  data: rec.cost_daily_all,
                }}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openrenewop,

                hidden: !openrenewop,
              })}
            >
              <Trends
                data={{
                  name: "ENS Daily Renew Trends",
                  data: rec.op_daily_renew,
                }}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openregop,

                hidden: !openregop,
              })}
            >
              <Trends
                data={{
                  name: "ENS Daily Registrartion Trends",
                  data: rec.op_daily_registrartion,
                }}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openrenewfee,

                hidden: !openrenewfee,
              })}
            >
              <Trends
                data={{
                  name: "ENS Daily Renew Fee Trends",
                  data: rec.cost_daily_renew,
                }}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openregfee,

                hidden: !openregfee,
              })}
            >
              <Trends
                data={{
                  name: "ENS Daily Registrartion Fee Trends",
                  data: rec.cost_daily_registrartion,
                }}
              />
            </div>
          </div>
        </Collapse>
      </div>

      {/* 饼图及环比图 */}
      <div className="mb-8 rounded-lg bg-cardbg px-6 py-4">
        <div className="flex h-full w-full items-center justify-between py-8 tracking-wide text-black/80 ">
          {/* 内容块标题 */}
          <p className="text-2xl font-bold text-black/80 xsmall:text-3xl">
            Percentage Analysis
          </p>
          {/* 收起按钮提示 */}
          <Tooltip content="Collapse Panel">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 pt-0.5 shadow-gray-500 shadow-card transition duration-500 ease-in-out hover:bg-indigo-400"
              onClick={toggleChartsOpen}
            >
              {opencharts ? (
                <ChevronDown className="text-white transition-transform duration-700 ease-in-out" />
              ) : (
                <ChevronDown className="rotate-180 text-white transition-transform duration-700 ease-in-out" />
              )}
            </button>
          </Tooltip>
        </div>
        {/* 内容 */}
        <Collapse open={opencharts}>
          {/* <div className="mb-4 gap-3 grid auto-cols-max whitespace-nowrap grid-cols-2 text-sm mid:grid-cols-4 large:text-base large:flex h-full w-full">
            <button
              onClick={toggleAddLength}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openaddlength,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openaddlength,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openaddlength,

                  hidden: !openaddlength,
                })}
              />
              
            </button>
            <button
              onClick={toggleAddType}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openaddtype,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openaddtype,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openaddtype,

                  hidden: !openaddtype,
                })}
              />
              ADD Type
            </button>
            <button
              onClick={toggleAll}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openall,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openall,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openall,

                  hidden: !openall,
                })}
              />
              All
            </button>
            <button
              onClick={toggleCost}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openrrcost,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openrrcost,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openrrcost,

                  hidden: !openrrcost,
                })}
              />
              Renew & Reg Cost
            </button>
            <button
              onClick={toggleRRTotal}
              className={cn(
                "border-2 h-fit flex justify-center items-center transition duration-500 ease-in-out border-indigo-500 px-3 py-1 rounded-full",
                {
                  "text-white bg-indigo-500 hover:bg-transparent hover:text-black":
                    openrrtotal,

                  "bg-transparent text-black hover:bg-indigo-500 hover:text-white":
                    !openrrtotal,
                }
              )}
            >
              <Check
                size={20}
                className={cn("mr-1", {
                  flex: openrrtotal,

                  hidden: !openrrtotal,
                })}
              />
              Renew & Reg Total
            </button>
          </div> */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div
              className={cn("h-full w-full", {
                flex: openaddlength,

                hidden: !openaddlength,
              })}
            >
              <PieCharts
                name="ENS Domain Name Length Distribution"
                piedata={rec.pi_name_length}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openaddtype,

                hidden: !openaddtype,
              })}
            >
              <PieCharts
                name="ENS Domain Name Language Distribution"
                piedata={rec.pi_name_type}
              />
            </div>

            <div
              className={cn("h-full w-full", {
                flex: openall,

                hidden: !openall,
              })}
            >
              <RadialCharts
                name="ENS Operations by Quarter"
                data={
                  GenQuarterData(rec.pi_quarter_registrartion_total, rec.pi_quarter_renew_total)
                }
              />
            </div>

            <div
              className={cn("h-full w-full", {
                flex: openall,

                hidden: !openall,
              })}
            >
              <RadialCharts
                name="ENS Fee by Quarter"
                data={
                  GenQuarterData(rec.pi_quarter_registrartion_cost, rec.pi_quarter_renew_cost)
                }
              />
            </div>
            {/* <div
              className={cn("h-full w-full", {
                flex: openrrcost,

                hidden: !openrrcost,
              })}
            >
              <RadialCharts
                name="Statistics Of Renew And Reg Cost"
                data={[
                  TransformPi(rec.pi_quarter_renew_cost, "RenewCost"),
                  TransformPi(rec.pi_quarter_registrartion_cost, "RegCost"),
                ]}
              />
            </div>
            <div
              className={cn("h-full w-full", {
                flex: openrrtotal,

                hidden: !openrrtotal,
              })}
            >
              <RadialCharts
                name="Percentage of Renew And Reg Total"
                data={[
                  TransformPi(rec.pi_quarter_renew_total, "RenewTotal"),
                  TransformPi(rec.pi_quarter_registrartion_total, "Regtotal"),
                ]}
              />
            </div> */}
          </div>
        </Collapse>
      </div>

      {/* 表格阵列 Analysis */}
      <div className="mb-8 rounded-lg bg-cardbg px-6 py-4">
        <div className="bg-indigo rounded-l">
          <div className="flex h-full w-full items-center justify-between py-8 tracking-wide text-black/80 ">
            {/* 内容块标题 */}
            <p className="text-2xl font-bold text-black/80 xsmall:text-3xl">
              Clustering Analysis
            </p>
            {/* 收起按钮提示 */}
            <Tooltip content="Collapse Panel">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 pt-0.5 shadow-gray-500 shadow-card transition duration-500 ease-in-out hover:bg-indigo-400"
                onClick={toggleAnalysisOpen}
              >
                {openanalysis ? (
                  <ChevronDown className="text-white transition-transform duration-700 ease-in-out" />
                ) : (
                  <ChevronDown className="rotate-180 text-white transition-transform duration-700 ease-in-out" />
                )}
              </button>
            </Tooltip>
          </div>
          {/* 内容 */}
          <Collapse open={openanalysis}>
            <div>
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-400/20 p-1">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Top Holder
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Top Expiration Date
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Top Renew Frequency
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.top_hodle}
                      name={"Top 100 holdings"}
                      cols={TophoderCol}
                      sort={"value"}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.top_max_expiration}
                      name={"Top Max Expiration Date"}
                      cols={TopMaxExpCol}
                      sort={"max_expiration"}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.top_renew_frequent}
                      name={"Top Most Frequent Renew"}
                      cols={TopRenewFrqCol}
                      sort={"value"}
                    />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Collapse>
        </div>
      </div>

      {/* 表格阵列latest */}
      <div className="mb-8 rounded-lg bg-cardbg px-6 py-4">
        <div className="bg-indigo rounded-l">
          <div className="flex h-full w-full items-center justify-between py-8 tracking-wide text-black/80 ">
            {/* 内容块标题 */}
            <p className="text-2xl font-bold text-black/80 xsmall:text-3xl">
              Latest Events
            </p>
            {/* 收起按钮提示 */}
            <Tooltip content="Collapse Panel">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 pt-0.5 shadow-gray-500 shadow-card transition duration-500 ease-in-out hover:bg-indigo-400"
                onClick={toggleEventOpen}
              >
                {openevent ? (
                  <ChevronDown className="text-white transition-transform duration-700 ease-in-out" />
                ) : (
                  <ChevronDown className="rotate-180 text-white transition-transform duration-700 ease-in-out" />
                )}
              </button>
            </Tooltip>
          </div>
          {/* 内容 */}
          <Collapse open={openevent}>
            <div>
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-400/20 p-1">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Expiration
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Registrartion
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Renew
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                        " focus:outline-none ",
                        selected
                          ? "bg-white shadow text-gray-800"
                          : "text-gray-600 hover:bg-gray-600/[0.12] hover:text-gray-700"
                      )
                    }
                  >
                    Free
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.latest_expiration_list}
                      name={"Latest Expiration"}
                      cols={LatestListCol}
                      sort={"times"}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.latest_registrartion_list}
                      name={"Latest Registrartion"}
                      cols={LatestListCol}
                      sort={"times"}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.latest_renew_list}
                      name={"Latest Renew"}
                      cols={LatestListCol}
                      sort={"times"}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <ReuseTable
                      info={rec.latest_free_list}
                      name={"Latest End Of Protection Period"}
                      cols={LatestListCol}
                      sort={"times"}
                    />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Collapse>
        </div>
      </div>

      {/* footer */}
      <div className="mb-3 flex flex-wrap">
        <div className="w-full sm:mb-0 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

const HomePage: NextPageWithLayout = (fallback) => {
  return (
    <SWRConfig value={fallback}>
      <Repo />
    </SWRConfig>
  );
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

HomePage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
