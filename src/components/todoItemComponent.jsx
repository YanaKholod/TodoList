import React from "react";
import styles from "./Styleall.module.css";
const TodoItemComponent = ({ todoItem }) => {
  //   console.log(title);
  console.log(todoItem);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{todoItem.title}</div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.doneBtn}>Done</div>
        <div className={styles.deleteBtn}>Delete</div>
        <div className={styles.infoBtn}>
          Info
          <div className={styles.description}>
            {todoItem.description}
            {todoItem.createdAt.toLocaleDateString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItemComponent;
