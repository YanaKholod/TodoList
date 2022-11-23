import React, { useState, useEffect } from "react";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";
import TodoItemComponent from "../components/todoItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../utils/slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const todosStore = useSelector((state) => state.allTodos.todos);
  const [todoItems, setTodoItems] = useState(todosStore);
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showDeletedItems, setShowDeletedItems] = useState(false);
  const [showActiveItems, setShowActiveItems] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  const [isDeletedClick, setIsDeletedClick] = useState(false);
  useEffect(() => {
    const newItems = todosStore.filter(
      (item) => showDeletedItems === item.isDeleted
    );
    setTodoItems(newItems);
  }, [showDeletedItems, isDeletedClick]);
  useEffect(() => {
    setTodoItems(todosStore);
  }, [showAllItems]);
  useEffect(() => {
    const activeTodos = todosStore.filter((item) => !item.isCompleted);
    setTodoItems(activeTodos);
  }, [showActiveItems]);
  useEffect(() => {
    const completedTodos = todosStore.filter((item) => item.isCompleted);
    setTodoItems(completedTodos);
  }, [showCompletedItems]);
  useEffect(() => {
    // const activeTodos = todoBaseData.filter((item) => !item.isDeleted);
    dispatch(getTodos(todoBaseData));
    const activeTodos = todosStore.filter((item) => !item.isDeleted);
    setTodoItems(activeTodos);
  }, [dispatch, todosStore]);
  return (
    <div className={styles.list}>
      <h1>To do list</h1>
      <div className={styles.filterSortBtns}>
        <button className={styles.filterBtn}>
          Filter
          <div className={styles.filters}>
            <div onClick={() => setShowAllItems(!showAllItems)}>All</div>
            <div onClick={() => setShowActiveItems(!showActiveItems)}>
              Active
            </div>
            <div onClick={() => setShowCompletedItems(!showCompletedItems)}>
              Completed
            </div>
            <div onClick={() => setShowDeletedItems(!showDeletedItems)}>
              Deleted
            </div>
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
      {todoItems.map((item) => (
        <TodoItemComponent
          key={item.id}
          todoItem={item}
          deletedClick={setIsDeletedClick}
          stateDeletedClick={isDeletedClick}
        />
      ))}
    </div>
  );
};

export default HomePage;
