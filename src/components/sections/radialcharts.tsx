import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useState } from "react";
import cn from "classnames";

interface RadialProps {
  data: any;
  name: string;
}

export function RadialCharts({ data, name }: RadialProps) {
  let final = data;
  let all = data.value;
  const [screenwidth, setScreenWidth] = useState(0);
  window.onresize = reportWindowSize;
  function reportWindowSize() {
    setScreenWidth(window.screen.width);
  }

  return (
    <div
      className={cn(
        "flex flex-col w-full rounded-lg border-2 border-solid border-gray-100 bg-white p-2",
        {
          "h-[680px]":
            (window.screen.width >= 640 && window.screen.width < 768) ||
            window.screen.width >= 1280,

          "h-[400px]": !(
            (window.screen.width >= 640 && window.screen.width < 768) ||
            window.screen.width >= 1280
          ),
        }
      )}
    >
      <h3 className="mb-1.5 text-center text-sm tracking-wider text-gray-600 dark:text-gray-400 sm:mb-2 sm:text-base">
        {name}
      </h3>

      <div className="flex-grow w-calc-flex cursor-pointer">
        {(window.screen.width >= 640 && window.screen.width < 768) ||
        window.screen.width >= 1280 ? (
          <ResponsiveRadialBar
            data={final}
            valueFormat=">-.2f"
            innerRadius={0.1}
            padding={0.4}
            margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
            colors={{ scheme: "nivo" }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.3]],
            }}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{
              tickSize: 5,
              tickPadding: 16,
              tickRotation: 0,
            }}
            enableLabels={false}
            enableCircularGrid={false}
            labelsTextColor={{ theme: "labels.text.fill" }}
            motionConfig="molasses"
            legends={[]}
          />
        ) : (
          <ResponsiveRadialBar
            data={final}
            valueFormat=">-.2f"
            innerRadius={0.1}
            padding={0.2}
            margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
            colors={{ scheme: "nivo" }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.3]],
            }}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
            }}
            enableLabels={false}
            enableCircularGrid={false}
            labelsTextColor={{ theme: "labels.text.fill" }}
            motionConfig="molasses"
            tooltip={(final) => {
              return (
                <div className="bg-white p-1 rounded-lg border-2 border-gray-200">
                  <div className="w-20 font-semibold">Quarter:</div>
                  <div className="w-24 text-left break-all">
                    {final.bar.data.x}
                  </div>
                  <div className="w-28 font-semibold">Value:</div>
                  <div className="w-24 text-left overflow-hidden text-ellipsis">
                    {final.bar.data.y}
                  </div>
                </div>
              );
            }}
          />
        )}
      </div>
    </div>
  );
}
