import React from "react";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";
const HomePage = () => {
  return (
    <div className={styles.list}>
      <ul>
        {todoBaseData.map((item, idx) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
