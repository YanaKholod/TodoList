import React from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { todoBaseData } from "../mockData";
import DonutLegend from "./DonutLegend";
import styled from "styled-components";

const Styled = {
  StaticWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};

const dataUser = [
  {
    id: 1,
    title: "Deleted",
    description: "Deleted todos",
    count: todoBaseData.filter((item) => item.isDeleted).length,
    color: "rgb(232, 78, 86)",
    domain: "Deleted",
  },
  {
    id: 2,
    title: "Active",
    description: "Active todos",
    count: todoBaseData.filter((item) => !item.isCompleted).length,
    color: "rgb(45, 93, 147)",
    domain: "Active",
  },
  {
    id: 3,
    title: "Completed",
    description: "Completed todos",
    count: todoBaseData.filter((item) => item.isCompleted).length,
    color: "rgb(153, 226, 170)",
    domain: "Completed",
  },
];

const DonutStatics = () => {
  const width = 400;
  const height = 500;
  const half = width / 2;

  return (
    <Styled.StaticWrapper>
      <svg width={width} height={height}>
        <Group left={half} top={half}>
          <Pie
            data={dataUser}
            outerRadius={half}
            innerRadius={half - 25}
            pieValue={(data) => data.count}
            padAngle={0.02}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g key={arc.data.id}>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>
        </Group>
      </svg>
      <DonutLegend width={200} data={todoBaseData} />
    </Styled.StaticWrapper>
  );
};

export default DonutStatics;
