import React from "react";
import { LegendOrdinal, LegendItem, LegendLabel } from "@visx/legend";
import { scaleOrdinal } from "@visx/scale";
import styles from "./Styleall.module.css";
const DonutLegend = ({ width, data }) => {
  const symbSize = 20;
  const completed = data.filter((item) => item.isCompleted).length;
  const deleted = data.filter((item) => item.isDeleted).length;
  const active = data.filter((item) => !item.isCompleted).length;

  const ordinalColorScale = scaleOrdinal({
    domain: [
      `Deleted ${deleted}`,
      `Active ${active}`,
      `Completed ${completed}`,
    ],
    range: ["rgb(232, 78, 86)", "rgb(45, 93, 147)", "rgb(153, 226, 170)"],
  });
  return (
    <div className={styles.donutInfo}>
      <LegendOrdinal scale={ordinalColorScale} width={width}>
        {(labels) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {labels.map((label, i) => (
              <LegendItem key={`legend-quantile-${i}`} margin="5px 0">
                <svg width={symbSize} height={symbSize}>
                  <circle
                    cx={symbSize / 2}
                    cy={symbSize / 2}
                    r={symbSize / 4}
                    stroke={label.value}
                    strokeWidth="3px"
                    width={symbSize}
                    height={symbSize}
                    fill="none"
                  />
                </svg>
                <LegendLabel align="left" margin="0 0 0 4px">
                  {label.text} todos
                </LegendLabel>
              </LegendItem>
            ))}
          </div>
        )}
      </LegendOrdinal>
    </div>
  );
};

export default DonutLegend;
