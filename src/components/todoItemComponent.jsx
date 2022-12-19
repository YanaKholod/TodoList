import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Styleall.module.css";
import Form from "../components/Form";
import { deleteTodo, doneTodo, editTodo } from "../utils/slice";
import { useState } from "react";

const TodoItemComponent = ({ todoItem }) => {
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (data) => {
    const itemData = {
      id: todoItem.id,
      data: data,
    };
    dispatch(editTodo(itemData));
    setShowModal(false);
  };
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.wrapper} ${
        todoItem.isCompleted ? styles.doneTask : ""
      } ${todoItem.isDeleted ? styles.deletedTask : ""}`}
    >
      <div className={styles.title}>{todoItem.title}</div>
      <div className={styles.buttonsWrapper}>
        <div
          className={`${styles.doneBtn} ${
            todoItem.isCompleted ? styles.btnNotAllowed : ""
          }`}
          onClick={() => {
            dispatch(doneTodo(todoItem.id));
          }}
        >
          Done
        </div>
        <div
          className={`${styles.deleteBtn} ${
            todoItem.isDeleted ? styles.btnNotAllowed : ""
          }`}
          onClick={() => {
            dispatch(deleteTodo(todoItem.id));
          }}
        >
          Delete
        </div>
        <div
          className={`${styles.editBtn} ${
            todoItem.isCompleted ? styles.btnNotAllowed : ""
          }`}
          onClick={() => setShowModal(true)}
        >
          Edit
        </div>
        {showModal && (
          <div className={styles.modal}>
            <Form
              setShowModal={setShowModal}
              initialData={todoItem}
              buttonName={"Save"}
              onFormSubmit={(data) => handleEdit(data)}
            />
          </div>
        )}
        <div className={styles.infoBtn}>
          Info
          <div className={styles.description}>
            <div>{todoItem.description}</div>
            <div>
              {/* {!todoItem.isCompleted &&
                !todoItem.isDeleted &&
                `Created at : ${todoItem.createdAt.toLocaleDateString(
                  "en-US"
                )}`}
              {todoItem.isDeleted &&
                !todoItem.isCompleted &&
                `Created at: ${todoItem.createdAt.toLocaleDateString("en-US")}
                Deleted at: ${todoItem.deletedAt.toLocaleDateString("en-US")}
                `}
              {todoItem.isDeleted &&
                todoItem.isCompleted &&
                `Created at: ${todoItem.createdAt.toLocaleDateString("en-US")}
                Completed at: ${todoItem.completedAt.toLocaleDateString(
                  "en-US"
                )} 
                Deleted at: ${todoItem.deletedAt.toLocaleDateString("en-US")}`}
              {todoItem.isCompleted &&
                !todoItem.isDeleted &&
                `Created at: ${todoItem.createdAt.toLocaleDateString("en-US")}
                Completed at: ${todoItem.completedAt.toLocaleDateString(
                  "en-US"
                )} `} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItemComponent;
