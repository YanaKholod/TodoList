import React from "react";
import { sidebar } from "./sidebar";
import { Link } from "react-router-dom";
import s from "./Styleall.module.css";
const Menu = () => {
  return (
    <div className={s.allsidebar}>
      <div className={s.wrapsidebar}>
        <ul className={s.menu}>
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
