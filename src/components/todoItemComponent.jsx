import React from "react";
import { todoBaseData } from "../mockData";
import styles from "./Styleall.module.css";
import Form from "../components/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/slice";

const TodoItemComponent = ({ todoItem, deletedClick, stateDeletedClick }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDone = (data, id) => {
    dispatch(editTodo({ data: { isCompleted: true }, id }));

    // const currentIndex = todoBaseData.findIndex((item) => item.id === itemId);
    // todoBaseData[currentIndex] = {
    //   ...todoBaseData[currentIndex],
    //   isCompleted: true,
    //   completedAt: new Date(),
    // };
    // deletedClick(!stateDeletedClick);
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (data, id) => {
    dispatch(editTodo({ data, id }));
  };
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
          // onClick={() => {
          //   !todoItem.isCompleted && handleDone(todoItem.id);
          // }}
        >
          Done
        </div>
        <div
          className={`${styles.deleteBtn} ${
            todoItem.isDeleted ? styles.btnNotAllowed : ""
          }`}
          onClick={() => {
            handleDelete(todoItem.id);
            console.log("todoItem.id", todoItem.id);
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
              onFormSubmit={handleEdit}
            />
          </div>
        )}
        <div className={styles.infoBtn}>
          Info
          <div className={styles.description}>
            <div>{todoItem.description}</div>
            {/* <div>
              {!todoItem.isCompleted &&
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
                )} `}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItemComponent;
