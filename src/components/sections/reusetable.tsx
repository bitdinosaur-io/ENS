import { TableInfo } from "@/types";
import React, { useEffect } from "react";
import cn from "classnames";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import Button from "@/components/functions/button";
import { ChevronDown } from "@/components/icons/chevron-down";
import { LongArrowRight } from "@/components/icons/long-arrow-right";
import { LongArrowLeft } from "@/components/icons/long-arrow-left";

import { Tooltip } from "@material-tailwind/react";

import { Search } from "lucide-react";

interface Global {
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any;
}

// 整体搜索
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: Global) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex items-center font-bold">
      &nbsp;
      <div className="flex items-center justify-center w-32 mid:w-36 h-8 bg-gray-200 rounded-full border-gray-300">
        <Search
          color="rgb(140 140 140)"
          size={window.screen.width >= 500 ? 16 : 14}
        />
        <input
          className="outline-0 w-24 mid:w-28 h-4 bg-gray-200 text-xs rounded-full indent-2"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`Search...`}
        />
      </div>
    </span>
  );
}

interface DaySliderProps {
  info: any;
  name: any;
  cols: any;
  sort: string;
  desc: boolean;
}
export default function ReuseTable({ info, name, cols, sort, desc }: DaySliderProps) {
  const data = React.useMemo(() => info, []);

  // 费用四舍五入
  // data.map((item, index) => {
  //   item.fee = round(item.fee, 8);
  //   return item;
  // });

  const COLUMNS = cols.map((item: any) => {
    return item;
  });

  const columns = React.useMemo(() => COLUMNS, []);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: GlobalFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    canPreviousPage,
    canNextPage,
    pageOptions,
    rows,
    state,
    headerGroups,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
      initialState: {
        pageSize: 10,
        sortBy: [
          {
            id: sort,
            desc: desc,
          },
        ],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useResizeColumns,
    useFlexLayout,
    usePagination
  );
  const { pageIndex } = state;

  return (
    <div className="mb-6 rounded-lg border-2 border-solid border-gray-100 overflow-hidden">
      <div className="rounded-tl-lg relative rounded-tr-lg bg-white px-4  pt-6 dark:bg-light-dark md:px-8 md:pt-8">
        <div className="flex items-center justify-between border-b border-dashed border-gray-200">
          <div className="flex flex-col items-center justify-between pb-5 dark:border-gray-700">
            <h2 className="shrink-0 text-xl font-normal text-gray-600 dark:text-white  md:mb-0 md:text-2xl">
              {name}
            </h2>
          </div>
          <div className="pb-5">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>
      </div>

      <div className="-mx-0.5 overflow-y-auto">
        {/* <Scrollbar style={{ width: '100%' }} autoHide="never"> */}
        <div className="px-0.5">
          <table
            {...getTableProps()}
            className="transaction-table w-full border-separate border-0"
          >
            <thead className="text-sm text-gray-500 dark:text-gray-300">
              {headerGroups.map((headerGroup, idx) => (
                <tr
                  className=""
                  {...headerGroup.getHeaderGroupProps()}
                  key={idx}
                >
                  {headerGroup.headers.map((column, idx) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={idx}
                      className="group  bg-white px-2 py-5 font-normal ltr:first:pl-8 ltr:last:pr-8 rtl:first:pr-8 rtl:last:pl-8 dark:bg-light-dark md:px-4"
                    >
                      <div className="flex items-center mid:justify-center ">
                        {column.render("Header")}
                        {column.canResize && (
                          <div
                            {...column.getResizerProps()}
                            className={`resizer ${
                              column.isResizing ? "isResizing" : ""
                            }`}
                          />
                        )}
                        <span className="ltr:ml-1 rtl:mr-1">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <ChevronDown />
                            ) : (
                              <ChevronDown className="rotate-180" />
                            )
                          ) : (
                            <ChevronDown className="rotate-180 opacity-0 transition group-hover:opacity-50" />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="text-xs font-medium text-gray-900 dark:text-white 3xl:text-sm"
            >
              {page.map((row, idx) => {
                prepareRow(row);
                return (
                  <>
                    <tr
                      {...row.getRowProps()}
                      key={idx}
                      className="items-center bg-white last:mb-0 dark:bg-light-dark"
                    >
                      {row.cells.map((cell, idx) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            key={idx}
                            className="px-2 py-4 flex mid:justify-center overflow-x-auto  text-ellipsis  tracking-[1px] ltr:first:pl-4 ltr:last:pr-4 rtl:first:pr-8 rtl:last:pl-8 md:px-4 md:py-8 md:ltr:first:pl-8 md:ltr:last:pr-8 3xl:py-8"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-b-lg bg-white px-5 py-4 text-sm dark:bg-light-dark lg:py-6">
        <div className="flex items-center gap-5">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            title="Previous"
            shape="circle"
            variant="transparent"
            size="small"
            className="text-gray-700 disabled:text-gray-400 dark:text-white disabled:dark:text-gray-400"
          >
            <LongArrowLeft className="h-auto w-4 rtl:rotate-180" />
          </Button>
          <div>
            Page{" "}
            <strong className="font-semibold">
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </div>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            title="Next"
            shape="circle"
            variant="transparent"
            size="small"
            className="text-gray-700 disabled:text-gray-400 dark:text-white disabled:dark:text-gray-400"
          >
            <LongArrowRight className="h-auto w-4 rtl:rotate-180 " />
          </Button>
        </div>
      </div>
    </div>
  );
}
