import React from "react";
import { useState } from "react";
import styles from "./pagesstyles.module.css";
const CreateTodo = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className={styles.wrapchbox}>
      <form>
        <div>
          <label>Type in your task</label>
          <div>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Title"
              className={styles.inputtext}
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className={styles.inputtextdescr}
            ></input>
          </div>
        </div>
        <div>
          <button className={styles.submbut} type="submit">
            Add the task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
