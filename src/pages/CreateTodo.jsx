import React from "react";
import { useForm } from "react-hook-form";
import styles from "./pagesstyles.module.css";

/* <div className={s.error}>
            {errors?.field && <p>{errors?.field?.message}</p>}
          </div>  */
// we can set mode all but it slows down performance

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
  };
  return (
    <div className={styles.wrapChbox}>
      <h1>Type in your task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Title:</p>
          <input
            {...register("title", {
              required: "Required field!",
              minLength: {
                value: 5,
                message: "Enter the title",
              },
            })}
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
                message: "Enter the description",
              },
            })}
            className={styles.inputTextDescr}
          ></textarea>
        </label>
        <div className={styles.error}>
          {errors?.description && <p>{errors?.description?.message}</p>}
        </div>
        <label>
          In progress
          <input
            value="false"
            type="radio"
            {...register("isCompleted", { required: true })}
          ></input>
        </label>
        <label>
          Done
          <input
            value="true"
            type="radio"
            {...register("isCompleted", { required: true })}
          ></input>
        </label>
        <button className={styles.submBut} type="submit" disabled={!isValid}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
