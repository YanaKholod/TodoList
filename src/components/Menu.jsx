import React from "react";
import { Sidebar } from "./Constante";
import { Link } from "react-router-dom";
import styles from "./Styleall.module.css";
const Menu = () => {
  return (
    <div className={styles.allsidebar}>
      <div className={styles.wrapsidebar}>
        <ul className={styles.menu}>
          {Sidebar.map((item, idx) => (
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
