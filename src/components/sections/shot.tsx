import { ResponsiveLine } from "@nivo/line";
import { OpDay, ShowDay } from "@/types";
interface OpDayTrendsProps {
  data: ShowDay;
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

export function Shot({ data }: OpDayTrendsProps) {
  //   console.log(data.data, "dat");
  let onearr = data.data.slice(0, 21);
  let twoarr = data.data.slice(22, 50);
  let threearr = data.data.slice(50, 81);
  let fourarr = data.data.slice(81, 111);
  let fivearr = data.data.slice(111, 142);
  let sixarr = data.data.slice(142, 172);
  const newdata = sixarr.map((item, index) => {
    let x = item.day;
    let y = item.value;
    let con = { x, y };
    return con;
  });
  const hold = [
    {
      id: "jaja",
      data: newdata,
    },
  ];

  return (
    <div className="flex flex-col h-test w-full rounded-lg border-2 border-solid border-gray-100 bg-white p-2 justify-between xsmall:h-trends">
      <div className="flex w-calc-flex h-full cursor-pointer">
        <ResponsiveLine
          data={hold}
          margin={{ top: 10, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 240000,
            stacked: true,
            reverse: false,
          }}
          colors={colors}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -30,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: " ",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          lineWidth={4}
          pointSize={10}
          pointColor={{ from: "color", modifiers: [] }}
          pointBorderWidth={2}
          pointLabel="y"
          pointBorderColor={{ from: "serieColor", modifiers: [] }}
          enablePointLabel={true}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
