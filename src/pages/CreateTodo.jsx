import React from "react";
import { useForm } from "react-hook-form";
import { todoBaseData } from "../mockData";
import styles from "./pagesstyles.module.css";

const CreateTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    const addFormData = () => {
      todoBaseData.push({
        id: Math.random(),
        title: data.title,
        description: data.description,
        isCompleted: data.isCompleted,
        createdAt: new Date(),
        completedAt: null,
        isDeleted: false,
        deletedAt: null,
      });
    };
    addFormData(data);
  };
  return (
    <div className={styles.wrapperForm}>
      <h1>Type in your task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Title:</p>
          <input
            {...register("title", {
              required: "Required field!",
              minLength: {
                value: 5,
                message: "Must be more than 5 symbols",
              },
            })}
            style={{ border: errors.title ? "2px solid red" : "" }}
            className={styles.inputText}
          ></input>
        </label>
        <div className={styles.error}>
          {errors?.title && <p>{errors?.title?.message}</p>}
        </div>
        <label>
          <p> Description:</p>
          <textarea
            {...register("description", {
              required: "Required field!",
              minLength: {
                value: 10,
                message: "Must be more than 10 symbols",
              },
            })}
            style={{ border: errors.description ? "2px solid red" : "" }}
            className={styles.inputTextDescr}
          ></textarea>
        </label>
        <div className={styles.error}>
          {errors?.description && <p>{errors?.description?.message}</p>}
        </div>
        <div className={styles.radioBtns}>
          <label>In progress</label>
          <input
            value="false"
            type="radio"
            {...register("isCompleted", { required: true })}
          ></input>
          <label>Done</label>
          <input
            value="true"
            type="radio"
            {...register("isCompleted", { required: true })}
          ></input>
        </div>
        <div className={styles.wrapperBtn}>
          <button
            className={[styles.defaultBtn, styles.cancelBtn].join(" ")}
            type="reset"
          >
            Cancel
          </button>
          <button
            className={[styles.defaultBtn, styles.submBtn].join(" ")}
            type="submit"
            disabled={!isValid}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
