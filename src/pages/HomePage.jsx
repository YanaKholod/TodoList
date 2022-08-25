import React from "react";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";
import TodoItemComponent from "../components/todoItemComponent";

const HomePage = () => {
  return (
    <div className={styles.list}>
      <h1>To do list</h1>
      <div className={styles.filterSortBtn}>
        <button>Filter</button>
        <button>Sort by</button>
      </div>
      {todoBaseData.map((item) => (
        <TodoItemComponent key={item.id} todoItem={item} />
      ))}
    </div>
  );
};

export default HomePage;
