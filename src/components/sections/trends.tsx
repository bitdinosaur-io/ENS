import { ResponsiveCalendar } from "@nivo/calendar";
import { OpDay, ShowDay } from "@/types";
import { type } from "os";

interface OpDayTrendsProps {
  data: any;
}

const colors = [
  "#D2E8E4",
  "#AEDBE2",
  "#85C9D1",
  "#5CB8C0",
  "#61CDBB",
  "#57C2B6",
  "#4DB8B0",
  "#43ADAB",
  "#3AA3A5",
  "#309A9F",
  "#C9D5D5",
  "#ADC5C5",
  "#91B5B5",
  "#97E3D5",
  "#8BD6CE",
  "#80C9C6",
  "#75BCBF",
  "#6BB0B8",
  "#60A3B1",
  "#F9E9DC",
  "#F4DBC7",
  "#EFD0B2",
  "#EAC49D",
  "#E8C1A0",
  "#E5BDA3",
  "#E3BAA6",
  "#E0B6A9",
  "#DEB2AD",
  "#DCAEA0",
  "#F9D9CC",
  "#F5C1B5",
  "#F1A99D",
  "#ED9086",
  "#F47560",
  "#F05D4A",
  "#EC4433",
  "#E82C1C",
  "#E4140E",
  "#E00000",
];

export function Trends({ data }: OpDayTrendsProps) {
  let newdata = data.data;

  let from = data.from ? data.from : get_from(newdata);
  let to = data.to ? data.to : get_to(newdata);

  const n = [
    {
      size: 12,
    },
  ];

  return (
    <div className="flex flex-col h-[560px] mid:h-[900px] w-full z-10 rounded-lg border-2 border-solid border-gray-100 bg-white p-2 justify-start">
      <h3 className="mb-1.5 text-center text-sm tracking-wider text-gray-600 dark:text-gray-400 sm:mb-2 sm:text-base">
        {data.name}
      </h3>

      <div className="w-calc-flex z-20 h-full cursor-pointer">
        {window.screen.width >= 768 ? (
          <ResponsiveCalendar
            data={newdata}
            from={from}
            to={to}
            emptyColor="#eeeeee"
            colors={colors}
            margin={{ top: 20, right: 0, bottom: 10, left: 16 }}
            yearSpacing={50}
            yearLegendOffset={4}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: "right-to-left",
              },
            ]}
          />
        ) : (
          <ResponsiveCalendar
            theme={{
              tooltip: {
                container: {
                  background: "#fff",
                },
                basic: {
                  whiteSpace: "normal",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  wordBreak: "break-all",
                },
              },
            }}
            data={newdata}
            from={from}
            to={to}
            emptyColor="#eeeeee"
            colors={colors}
            // direction="vertical"
            margin={{ top: 20, right: 0, bottom: 10, left: 20 }}
            yearSpacing={30}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            tooltip={(data) => {
              return (
                <div className="bg-white p-1 rounded-lg border-2 border-gray-200">
                  <div className="w-20 font-semibold">Date:</div>
                  <div className="w-16 text-left mb-2">{data.day}</div>
                  <div className="w-20 font-semibold">Usage:</div>
                  <div className="w-24 text-left">{data.value}</div>
                </div>
              );
            }}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: "right-to-left",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

function get_from(data: OpDay[]) {
  return data.reduce((a, b) => (new Date(a.day) <= new Date(b.day) ? a : b))
    .day;
}

function get_to(data: OpDay[]) {
  return data.reduce((a, b) => (new Date(a.day) >= new Date(b.day) ? a : b))
    .day;
}
