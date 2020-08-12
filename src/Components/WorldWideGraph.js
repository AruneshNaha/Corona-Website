import React from "react";
import { PieChart } from "react-minimal-pie-chart";
export default function WorldWideGraph({active, recovered, deaths}) {
    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
      };


  return (
    <PieChart
      data={[
        { title: "Active", value: active, label: "Active" , labelStyle: "text-white",color: "#F3B431" },
        { title: "Recovered", value: recovered, label: "Recovered", color: "#45CE30" },
        { title: "Deaths", value: deaths, label: "Deaths", color: "#E44236" },
      ]}
      label={({ dataEntry }) => `${dataEntry.title}:${parseInt((dataEntry.value/(active+recovered+deaths))*100)}%`}
      labelStyle={{
          ...defaultLabelStyle,
        }}

    />
  );
}
