import React from "react";
import { todoBase } from "../components/Constante";
import styles from "./pagesstyles.module.css";
const HomePage = () => {
  return (
    <div className={styles.list}>
      <ul>
        {todoBase.map((item, idx) => (
          <li ckey={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
