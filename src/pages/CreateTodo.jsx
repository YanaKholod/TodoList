import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "../store/slice";
import styled from "styled-components";

const Styled = {
  WrapperForm: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  `,
};
const CreateTodo = () => {
  const dispatch = useDispatch();

  const addNewTodo = async (data) => {
    await dispatch(
      addTodo({
        ...data,
        isCompleted: data.isCompleted === "true" ? true : false,
        // completedAt:'',
        // createdAt:'',
      })
    );
    await dispatch(fetchTodos());
  };

  return (
    <Styled.WrapperForm>
      <Form onFormSubmit={addNewTodo} buttonName={"Add"} />
    </Styled.WrapperForm>
  );
};

export default CreateTodo;
