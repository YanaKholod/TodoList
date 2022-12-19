import React, { useEffect } from "react";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";
import TodoItemComponent from "../components/todoItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../utils/slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const todosStore = useSelector((state) => state.allTodos.todos);
  useEffect(() => {
    dispatch(getTodos(todoBaseData));
  }, []);

  return (
    <div className={styles.list}>
      <h1>To do list</h1>
      <div className={styles.filterSortBtns}>
        <button className={styles.filterBtn}>
          Filter
          <div className={styles.filters}>
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
            <div>Deleted</div>
          </div>
        </button>
        <button className={styles.sortBtn}>
          Sort by
          <div className={styles.sorts}>
            <div>Created at</div>
            <div>Completed at</div>
            <div>Deleted at</div>
          </div>
        </button>
      </div>
      {todosStore.map((item) => (
        <TodoItemComponent todoItem={item} key={item.id} />
      ))}
    </div>
  );
};

export default HomePage;
