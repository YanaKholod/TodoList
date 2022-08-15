import React from "react";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";
import TodoItemComponent from "../components/todoItemComponent";
const HomePage = () => {
  return (
    <div className={styles.list}>
      {todoBaseData.map((item, idx) => (
        <TodoItemComponent key={item.id} todoItem={item} />
      ))}
    </div>
  );
};

export default HomePage;
