import React from "react";
import Form from "../components/Form";
import { todoBaseData } from "../mockData";

const CreateTodo = () => {
  const createToDo = (data, id) => {
    const addFormData = () => {
      todoBaseData.push({
        id: id,
        title: data.title,
        description: data.description,
        isCompleted: data.isCompleted === "true" ? true : false,
        createdAt: new Date(),
        completedAt: null,
        isDeleted: false,
        deletedAt: null,
      });
    };
    addFormData(data);
  };
  return (
    <div>
      <Form onFormSubmit={createToDo} buttonName={"Add"} />
    </div>
  );
};

export default CreateTodo;
