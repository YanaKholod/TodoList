import React from "react";
import { Sidebar } from "../Constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = {
  AllSidebar: styled.div`
    height: 100vh;
    padding: 30px 40px;
    background-color: #80a6deb3;
  `,
  WrapperSidebar: styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
  `,
  Menu: styled.div`
    list-style-type: none;
    text-decoration: none;
    font-size: 25px;
    div {
      margin: 30px 0;
    }
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: #243246;
    font-size: 30px;
  `,
};
const Menu = () => {
  return (
    <Styled.AllSidebar>
      <Styled.WrapperSidebar>
        <Styled.Menu>
          {Sidebar.map((item) => (
            <div key={item.id}>
              <Styled.Link to={item.link}>{item.title}</Styled.Link>
            </div>
          ))}
        </Styled.Menu>
      </Styled.WrapperSidebar>
    </Styled.AllSidebar>
  );
};

export default Menu;
