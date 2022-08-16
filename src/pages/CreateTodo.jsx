import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./pagesstyles.module.css";
{
  /* <div className={s.error}>
            {errors?.field && <p>{errors?.field?.message}</p>}
          </div>  */
}
const CreateTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };
  return (
    <div className={styles.wrapChbox}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Type in your task</label>
          <div>
            <input
              {...register("Title", { required: "Error!" })}
              placeholder="Title"
              className={styles.inputText}
            ></input>
          </div>
          <div>
            <input
              {...register("Description1", { required: "Error!" })}
              placeholder="Description"
              className={styles.inputTextDescr}
            ></input>
          </div>
          <div className={styles.checkInProgress}>
            <label>In progress</label>
            <input
              type="checkbox"
              {...register("In progress", { required: "Error!" })}
            ></input>
          </div>
          <div className={styles.checkDone}>
            <label>Done</label>
            <input
              type="checkbox"
              {...register("Done", { required: "Error!" })}
            ></input>
          </div>
        </div>
        <div>
          <button className={styles.submBut} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
