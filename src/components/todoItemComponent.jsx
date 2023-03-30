import React from "react";
import styles from "./Styleall.module.css";
import Form from "../components/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, fetchTodos } from "../store/slice";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    text-align: center;
    width: 50%;
    margin: 5px;
    border-radius: 10px;
    ${({ isCompleted }) =>
      isCompleted
        ? "background-color: rgba(128, 218, 150, 0.304);opacity: 1;"
        : ""}
  `,
  Title: styled.div`
    margin: 12px;
    font-size: 23px;
    cursor: default;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
  `,
  DoneButton: styled.div`
    background-color: rgb(153, 226, 170);
    color: rgb(79, 123, 90);
    border-radius: 20px;
    text-align: center;
    margin: 10px;
    padding: 8px 14px;
    cursor: pointer;
    ${({ isDone }) => (isDone ? "display: none;" : "")}
  `,
  DeleteButton: styled.div`
    background-color: rgb(249, 206, 223);
    color: rgb(135, 65, 93);
    border-radius: 20px;
    text-align: center;
    margin: 10px;
    padding: 8px 14px;
    cursor: pointer;
  `,
  EditButton: styled.div`
    background-color: rgb(216, 222, 233);
    color: rgb(73, 78, 87);
    border-radius: 20px;
    text-align: center;
    padding: 8px 23px;
    margin: 10px;
    cursor: pointer;
    ${({ stopEdit }) => (stopEdit ? "display: none;" : "")}
  `,
  Description: styled.div`
    padding: 7px;
    border: 5px;
    color: rgb(54, 56, 59);
    display: none;
    width: 300px;
    margin: 10px;
  `,
  Modal: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(171, 171, 178, 0.624);
    backdrop-filter: blur(5px);
    z-index: 4;
  `,
  ModalForm: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100%;
  `,
};
Styled.InfoButton = styled.div`
  background-color: rgb(252, 237, 203);
  color: rgb(109, 91, 48);
  border-radius: 20px;
  text-align: center;
  margin: 10px;
  padding: 8px 25px;
  cursor: pointer;
  &:hover ~ ${Styled.Description} {
    display: block;
    position: absolute;
    border-radius: 10px;
    left: 80%;
    top: 50;
    background-color: rgba(171, 171, 178, 0.624);
  }
`;

const TodoItemComponent = ({ todoItem }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDone = async (data, id) => {
    await dispatch(editTodo({ data: { ...data, isCompleted: true }, id }));

    await dispatch(fetchTodos());
  };

  const handleDelete = async (id) => {
    await dispatch(deleteTodo(id));
    await dispatch(fetchTodos());
  };

  const handleEdit = async (data, id) => {
    await dispatch(editTodo({ data, id }));
    await dispatch(fetchTodos());
  };

  return (
    <Styled.Wrapper isCompleted={todoItem.isCompleted}>
      <Styled.Title>{todoItem.title}</Styled.Title>
      <Styled.ButtonsWrapper>
        <Styled.DoneButton
          isDone={todoItem.isCompleted}
          onClick={() => {
            handleDone(todoItem, todoItem.id);
          }}
        >
          Done
        </Styled.DoneButton>
        <Styled.DeleteButton
          onClick={() => {
            handleDelete(todoItem.id);
          }}
        >
          Delete
        </Styled.DeleteButton>
        <Styled.EditButton
          stopEdit={todoItem.isCompleted}
          onClick={() => setShowModal(true)}
        >
          Edit
        </Styled.EditButton>
        {showModal && (
          <Styled.Modal>
            <Styled.ModalForm
            // onClick={() => {
            //   setShowModal(false);
            // }}
            >
              <Form
                setShowModal={setShowModal}
                initialData={todoItem}
                buttonName={"Save"}
                onFormSubmit={handleEdit}
              />
            </Styled.ModalForm>
          </Styled.Modal>
        )}
        <Styled.InfoButton>
          Info
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
        </Styled.InfoButton>
        <Styled.Description>
          <div>{todoItem.description}</div>
        </Styled.Description>
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};

export default TodoItemComponent;
