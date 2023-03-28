import React, { useState, useEffect } from "react";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";
import TodoItemComponent from "../components/todoItemComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/slice";

const HomePage = () => {
  const todosCollection = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showDeletedItems, setShowDeletedItems] = useState(false);
  const [showActiveItems, setShowActiveItems] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  // const [isDeletedClick, setIsDeletedClick] = useState(false);
  // useEffect(() => {
  //   const newItems = todoBaseData.filter(
  //     (item) => showDeletedItems === item.isDeleted
  //   );
  //   setTodoItems(newItems);
  // }, [showDeletedItems, isDeletedClick]);
  // useEffect(() => {
  //   setTodoItems(todoBaseData);
  // }, [showAllItems]);
  // useEffect(() => {
  //   const activeTodos = todoBaseData.filter((item) => !item.isCompleted);
  //   setTodoItems(activeTodos);
  // }, [showActiveItems]);
  // useEffect(() => {
  //   const completedTodos = todoBaseData.filter((item) => item.isCompleted);
  //   setTodoItems(completedTodos);
  // }, [showCompletedItems]);
  // useEffect(() => {
  //   const activeTodos = todoBaseData.filter((item) => !item.isDeleted);
  //   setTodoItems(activeTodos);
  // }, []);
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
      {todosCollection.map((item) => (
        <TodoItemComponent
          key={item.id}
          todoItem={item}
          // deletedClick={setIsDeletedClick}
          // stateDeletedClick={isDeletedClick}
        />
      ))}
    </div>
  );
};

export default HomePage;
