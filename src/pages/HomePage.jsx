import React, { useState, useEffect } from "react";
import TodoItemComponent from "../components/todoItemComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/slice";
import styled from "styled-components";

const Styled = {
  WrapperTodos: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
  WrapperMain: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      text-align: center;
    }
  `,
  WrapperButtons: styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
  `,
  FilterButton: styled.div`
    background-color: rgb(249, 206, 223);
    color: rgb(135, 65, 93);
    border-radius: 20px;
    text-align: center;
    margin: 10px;
    padding: 8px 14px;
    cursor: pointer;
    border: none;
  `,
  Filters: styled.div`
    display: none;
    width: max-content;
    margin: 9px auto 9px;
    background-color: rgb(249, 206, 223);
    border-radius: 5px;
  `,
  SortButton: styled.button`
    background-color: rgb(140, 187, 241);
    color: rgb(45, 93, 147);
    border-radius: 20px;
    text-align: center;
    margin: 10px;
    padding: 8px 14px;
    cursor: pointer;
    border: none;
  `,
  Sorts: styled.div`
    display: none;
    width: max-content;
    margin: 4px auto 4px;
    background-color: rgb(140, 187, 241);
    border-radius: 5px;
  `,
};

const HomePage = () => {
  const todosCollection = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showDeletedItems, setShowDeletedItems] = useState(false);
  const [showActiveItems, setShowActiveItems] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  // useEffect(() => {
  //   setTodoItems(todoBaseData);
  // }, [showAllItems]);
  // useEffect(() => {
  //   const activeTodos = todoBaseData.filter((item) => !item.isCompleted);
  //   setTodoItems(activeTodos);
  // }, [showActiveItems]);
  // useEffect(() => {
  //   const completedTodos = todoBaseData.filter((item) => item.isCompleted);
  //   setTodoItems(completedTodos);
  // }, [showCompletedItems]);
  return (
    <Styled.WrapperMain>
      <h1>To do list</h1>
      <Styled.WrapperButtons>
        <Styled.FilterButton>
          Filter
          <Styled.Filters>
            <div onClick={() => setShowAllItems(!showAllItems)}>All</div>
            <div onClick={() => setShowActiveItems(!showActiveItems)}>
              Active
            </div>
            <div onClick={() => setShowCompletedItems(!showCompletedItems)}>
              Completed
            </div>
            <div onClick={() => setShowDeletedItems(!showDeletedItems)}>
              Deleted
            </div>
          </Styled.Filters>
        </Styled.FilterButton>
        <Styled.SortButton>
          Sort by
          <Styled.Sorts>
            <div>Created at</div>
            <div>Completed at</div>
            <div>Deleted at</div>
          </Styled.Sorts>
        </Styled.SortButton>
      </Styled.WrapperButtons>
      {todosCollection.map((item) => (
        <Styled.WrapperTodos key={item.id}>
          <TodoItemComponent
            todoItem={item}
            // deletedClick={setIsDeletedClick}
            // stateDeletedClick={isDeletedClick}
          />
        </Styled.WrapperTodos>
      ))}
    </Styled.WrapperMain>
  );
};

export default HomePage;
