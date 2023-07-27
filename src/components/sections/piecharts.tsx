import { ResponsivePie } from "@nivo/pie";
import { ProtocolPiInfo, ShowPie } from "@/types";
import { ResponsiveLine } from "@nivo/line";
import { useState } from "react";

interface PieProps {
  piedata: ProtocolPiInfo[];
  name: string;
}

export function PieCharts({ piedata, name }: PieProps) {
  let newdt = piedata.map((item) => {
    return {
      id: item.id,
      value: Number(item.value),
    };
  });
  // console.log(newdt, "newdt");

  if (piedata.length >= 10) {
    newdt.sort((a: ProtocolPiInfo, b: ProtocolPiInfo) => b.value - a.value);
    var newpiedata = newdt.slice(0, 9);

    const other = newdt.slice(10);
    let obj = {
      id: "other",
      value: 0,
    };
    other.map((item, value: any) => {
      obj.value += value;
      return obj;
    });
    newpiedata.push(obj);
  } else {
    newpiedata = newdt;
  }

  let valall = {
    value: 0,
  };
  newpiedata.map((item) => {
    valall.value += item.value;
    return valall;
  });
  // console.log(newpiedata, "pie");
  // console.log(valall, "all");

  const [screenwidth, setScreenWidth] = useState(0);
  window.onresize = reportWindowSize;
  function reportWindowSize() {
    setScreenWidth(window.screen.width);
  }

  return (
    <div className="flex flex-col h-[460px] w-full rounded-lg border-2 border-solid border-gray-100 bg-white p-2">
      <h3 className="mb-1.5 text-center text-sm tracking-wider text-gray-600 dark:text-gray-400 sm:mb-2 sm:text-base">
        {name}
      </h3>

      <div className="flex-grow w-calc-flex cursor-pointer">
        {(window.screen.width >= 640 && window.screen.width < 768) ||
        window.screen.width >= 1280 ? (
          <ResponsivePie
            data={newpiedata}
            margin={{ top: 24, right: 0, bottom: 16, left: -90 }}
            sortByValue={true}
            innerRadius={0.25}
            padAngle={3}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "nivo" }}
            borderWidth={4}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.1]],
            }}
            arcLinkLabel="value"
            arcLabel={(e) =>
              e.id +
              " (" +
              Math.round(
                ((e.value / valall.value) * 100 + Number.EPSILON) * 100
              ) /
                100 +
              "%" +
              ")"
            }
            enableArcLinkLabels={false}
            tooltip={(newpiedata) => {
              return (
                <div className="bg-white p-1 rounded-lg border-2 border-gray-200">
                  <div className="w-20 font-semibold">Type:</div>
                  <div className="w-24 text-left break-all">
                    {newpiedata.datum.data.id}
                  </div>
                  <div className="w-28 font-semibold">Percentage:</div>
                  <div className="w-24 text-left">
                    {Math.round(
                      ((newpiedata.datum.data.value / valall.value) * 100 +
                        Number.EPSILON) *
                        100
                    ) /
                      100 +
                      "%"}
                  </div>
                </div>
              );
            }}
            arcLinkLabelsSkipAngle={0}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={25}
            arcLinkLabelsDiagonalLength={10}
            arcLinkLabelsStraightLength={10}
            arcLabelsRadiusOffset={0.5}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            motionConfig="slow"
            legends={[
              {
                anchor: "right",
                direction: "column",
                justify: false,
                translateX: -80,
                translateY: 10,
                itemsSpacing: 10,
                itemWidth: 60,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <ResponsivePie
            data={newpiedata}
            margin={{ top: 0, right: 2, bottom: 0, left: 2 }}
            sortByValue={true}
            innerRadius={0.25}
            padAngle={3}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "nivo" }}
            borderWidth={4}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.1]],
            }}
            arcLinkLabel="value"
            arcLabel={(e) =>
              e.id +
              " (" +
              Math.round(
                ((e.value / valall.value) * 100 + Number.EPSILON) * 100
              ) /
                100 +
              "%" +
              ")"
            }
            enableArcLinkLabels={false}
            tooltip={(newpiedata) => {
              return (
                <div className="bg-white p-1 rounded-lg border-2 border-gray-200">
                  <div className="w-20 font-semibold">Type:</div>
                  <div className="w-24 text-left break-all">
                    {newpiedata.datum.data.id}
                  </div>
                  <div className="w-28 font-semibold">Percentage:</div>
                  <div className="w-24 text-left">
                    {Math.round(
                      ((newpiedata.datum.data.value / valall.value) * 100 +
                        Number.EPSILON) *
                        100
                    ) /
                      100 +
                      "%"}
                  </div>
                </div>
              );
            }}
            arcLinkLabelsSkipAngle={0}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={25}
            arcLinkLabelsDiagonalLength={10}
            arcLinkLabelsStraightLength={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            motionConfig="slow"
            legends={[]}
          />
        )}
      </div>
    </div>
  );
}
