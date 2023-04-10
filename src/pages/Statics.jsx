import React from "react";
import DonutStatics from "../components/DonutStatics";
import styled from "styled-components";

const Styled = {
  StaticWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    h1 {
      text-align: center;
      color: rgb(36, 50, 70);
      font-size: 30px;
      margin: 12px 0;
    }
  `,
};

const Statics = () => {
  return (
    <Styled.StaticWrapper>
      <h1>Statics</h1>
      <div>
        <DonutStatics />
      </div>
    </Styled.StaticWrapper>
  );
};

export default Statics;
