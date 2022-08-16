import React from "react";
import styles from "./Styleall.module.css";

const TodoItemComponent = ({ todoItem }) => {
  const handleDone = () => {
    console.log("handleDone", todoItem.id);
  };
  const handleDelete = () => {
    console.log("handleDelete", todoItem.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{todoItem.title}</div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.doneBtn} onClick={handleDone}>
          Done
        </div>
        <div className={styles.deleteBtn} onClick={handleDelete}>
          Delete
        </div>
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
