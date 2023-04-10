import React from "react";
import Form from "../components/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, fetchTodos } from "../store/slice";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    text-align: center;
    width: 70%;
    margin: 5px;
    border-radius: 10px;
    ${({ isCompleted }) => (isCompleted ? "background-color: #84d5936a;" : "")}
    @media (max-width: 620px) {
      width: 90%;
    }
    @media (max-width: 500px) {
      flex-direction: column;
    }
  `,
  Title: styled.div`
    margin: 12px;
    font-size: 23px;
    cursor: default;
    width: 100%;
    text-align: start;
    @media (max-width: 768px) {
      font-size: 17px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    @media (max-width: 500px) {
      display: flex;
      justify-content: center;
    }
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    position: relative;
    @media (max-width: 768px) {
      font-size: 13px;
    }
    @media (max-width: 500px) {
      justify-content: center;
    }
  `,
  DoneButton: styled.div`
    background-color: #84d593;
    color: #375b3d;
    border: 1px solid #375b3d;
    height: max-content;
    border-radius: 20px;
    text-align: center;
    margin: 10px 6px;
    padding: 8px 14px;
    cursor: pointer;
    ${({ isDone }) => (isDone ? "display: none;" : "")}
    @media (max-width: 620px) {
      margin: 10px 2px;
      padding: 8px 13px;
    }
  `,
  DeleteButton: styled.div`
    background-color: #f9cedf;
    color: #663535;
    border: 1px solid #663535;
    border-radius: 20px;
    text-align: center;
    margin: 10px 6px;
    height: max-content;
    padding: 8px 14px;
    cursor: pointer;
    @media (max-width: 620px) {
      margin: 10px 2px;
      padding: 8px 13px;
    }
  `,
  EditButton: styled.div`
    background-color: #cbcbcb;
    color: #535252;
    border: 1px solid #535252;
    border-radius: 20px;
    text-align: center;
    padding: 8px 23px;
    margin: 10px 6px;
    height: max-content;
    cursor: pointer;
    ${({ stopEdit }) => (stopEdit ? "display: none;" : "")}
    @media (max-width: 620px) {
      margin: 10px 2px;
      padding: 8px 13px;
    }
  `,
  Description: styled.div`
    padding: 10px;
    border: 5px;
    display: none;
    width: max-content;
    margin: 10px;
    z-index: 5;
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
    background-color: #51515175;
    backdrop-filter: blur(14px);
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
  background-color: #fff9ab;
  color: #656129;
  border: 1px solid #656129;
  border-radius: 20px;
  text-align: center;
  margin: 10px 6px;
  height: max-content;
  padding: 8px 25px;
  cursor: pointer;
  @media (max-width: 620px) {
    margin: 10px 2px;
    padding: 8px 13px;
  }
  &:hover ~ ${Styled.Description} {
    display: block;
    position: absolute;
    border-radius: 10px;
    left: 60%;
    top: 60%;
    background-color: #51515175;
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
    await dispatch(
      editTodo({
        data: {
          ...data,
          isCompleted: data.isCompleted === "true" ? true : false,
        },
        id,
      })
    );
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
            <Styled.ModalForm>
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
