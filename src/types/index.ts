import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type Totals = {
  all_total: number;
  dao: number;
  expiration_protect_total: number;
  expiration_total: number;
  fee_total: number;
  owner_address_total: number;
  renew_total: number;
  op_daily_all: DailyTypes[];
  cost_daily_all: DailyTypes[];
  op_daily_registrartion: DailyTypes[];
  op_daily_renew: DailyTypes[];
  cost_daily_registrartion: DailyTypes[];
  cost_daily_renew: DailyTypes[];
  pi_quarter_cost: PiTypes[];
  pi_quarter_registrartion_cost: PiTypes[];
  pi_quarter_registrartion_total: PiTypes[];
  pi_quarter_renew_cost: PiTypes[];
  pi_quarter_renew_total: PiTypes[];
  pi_quarter_total: PiTypes[];
  pi_name_length: PiTypes[];
  pi_name_type: PiTypes[];
  top_hodle: TopHolder[];
  top_max_expiration: TopMaxExp[];
  top_renew_frequent: TopRenewFreq[];
  latest_registrartion_list: LatestTypes[];
  latest_renew_list: LatestTypes[];
  latest_expiration_list: LatestTypes[];
  latest_free_list: LatestTypes[];
};

// new types

export type DailyTypes = {
  day: string;
  value: string;
};

export type newDailyTypes = {
  day: string;
  value: string;
};

export type PiTypes = {
  id: string;
  value: number;
};

export type LatestTypes = {
  name: string;
  times: string;
};

export type TopHolder = {
  owner: string;
  value: string;
};

export type TopMaxExp = {
  max_expiration: string;
  name: string;
};

export type TopRenewFreq = {
  name: string;
  value: string;
};

export type TableInfo = {
  name: string;
  times: string;
};
// new api types

export type TickNowDayInfo = {
  day: string;
  name?: string;
  p?: string;
  op?: string;
  value: number;
};

export type LatestDepolyInfo = {
  inscription_created_at: string;
  inscription_id: string;
  inscription_json: string;
  op: string;
  fee: number;
};

export type OpDay = {
  day: string;
  value: number;
};

export type LatestMintInfo = {
  inscription_created_at: string;
  inscription_id: string;
  inscription_json: string;
  op: string;
  fee: number;
};

export type ProtocolInfo = {
  deploy_address: string;
  owner_address: string;
  deploy_time: string;
  name: string;
};

export type TypesPiInfo = {
  label: string;
  value: number;
};

export type ProtocolPiInfo = {
  id: string;
  value: number;
};

export type ShowDay = {
  from?: string;
  to?: string;
  name: string;
  data: OpDay[];
};

export type ShowPie = {
  data: ProtocolPiInfo[];
  name: string;
};

// public types

export type TotalCardProps = {
  name: string;
  logo: StaticImageData;
  total: number;
  color?: string;
  symbol?: string;
};

export type GetInfoData = {
  totals: TotalCardProps[];
  op_daily_all: newDailyTypes[];
  cost_daily_all: newDailyTypes[];
  op_daily_registrartion: newDailyTypes[];
  op_daily_renew: newDailyTypes[];
  cost_daily_registrartion: newDailyTypes[];
  cost_daily_renew: newDailyTypes[];
  pi_quarter_cost: PiTypes[];
  pi_quarter_registrartion_cost: PiTypes[];
  pi_quarter_registrartion_total: PiTypes[];
  pi_quarter_renew_cost: PiTypes[];
  pi_quarter_renew_total: PiTypes[];
  pi_quarter_total: PiTypes[];
  pi_name_length: PiTypes[];
  pi_name_type: PiTypes[];
  top_hodle: TopHolder[];
  top_max_expiration: TopMaxExp[];
  top_renew_frequent: TopRenewFreq[];
  latest_registrartion_list: LatestTypes[];
  latest_renew_list: LatestTypes[];
  latest_expiration_list: LatestTypes[];
  latest_free_list: LatestTypes[];
};
