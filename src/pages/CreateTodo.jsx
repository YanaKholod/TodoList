import React, { useEffect } from "react";
import Form from "../components/Form";
import { todoBaseData } from "../mockData";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const addNewTodo = (data) => {
    dispatch(addTodo(data));
  };
  // const createToDo = (data, id) => {
  //   const addFormData = () => {
  //     todoBaseData.push({
  //       id: id,
  //       title: data.title,
  //       description: data.description,
  //       isCompleted: data.isCompleted === "true" ? true : false,
  //       createdAt: new Date(),
  //       completedAt: null,
  //       isDeleted: false,
  //       deletedAt: null,
  //     });
  //   };
  //   addFormData(data);
  // };
  return (
    <div>
      <Form onFormSubmit={addNewTodo} buttonName={"Add"} />
    </div>
  );
};

export default CreateTodo;
