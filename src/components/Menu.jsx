import React from "react";
import { sidebar } from "./sidebar";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="sidebar">
      <div className="wrappersb">
        <ul className="menu">
          {sidebar.map((item, idx) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
