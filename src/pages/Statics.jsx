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
