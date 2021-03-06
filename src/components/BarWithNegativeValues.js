import React from "react";
import ReactEcharts from "echarts-for-react";

const Bar = ({ theme, data }) => {
  const getYAxis = () => {
    let yAxisData = [];
    data.forEach((element) => {
      yAxisData.push(element.name);
    });
    return yAxisData;
  };

  const getSeries = () => {
    let series = [];
    data.forEach((element) => {
      let value = element.caseDaysToClose - element.openCasesAge;
      let obj = {
        value: value.toFixed(2),
        label: {
          show: true,
          position: value > 1 ? "right" : "left",
          color: "rgb(91,207,198)",
        },
      };
      series.push(obj);
    });
    return series;
  };
  return (
    <ReactEcharts
      option={{
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          position: "top",
          boundaryGap: [0.1, 0.05],
        },
        yAxis: {
          type: "category",
          data: getYAxis(),
        },
        series: [
          {
            type: "bar",
            label: {
              show: true,
              position: "left",
            },
            itemStyle: {
              borderColor: "rgb(91,207,198)",
              color: "rgb(91,207,198)",
            },
            data: getSeries(),
          },
        ],
      }}
      theme={theme}
      style={{ height: "100%", width: "100%", minHeight: "200px" }}
    />
  );
};
export default Bar;
