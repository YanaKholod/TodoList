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
  Filters: styled.div`
    display: block;
    width: max-content;
    padding: 3px;
    margin: 9px 9px;
    background-color: rgb(249, 206, 223);
    border-radius: 5px;
    div {
      padding: 5px;
    }
  `,
};

Styled.FilterButton = styled.div`
  background-color: rgb(249, 206, 223);
  color: rgb(135, 65, 93);
  border-radius: 20px;
  text-align: center;
  position: relative;
  margin: 10px;
  padding: 8px 14px;
  cursor: pointer;
  border: none;
  &:hover ~ ${Styled.Filters} {
    display: block;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    // right: 8%;
    top: 17%;
    z-index: 10;
  }
`;

const HomePage = () => {
  const todosCollection = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showActiveItems, setShowActiveItems] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  const [todoItems, setTodoItems] = useState([]);
  // useEffect(() => {
  //   setTodoItems(todoBaseData);
  // }, [showAllItems]);
  useEffect(() => {
    const activeTodos = todosCollection.filter((item) => !item.isCompleted);
    setTodoItems(activeTodos);
  }, [showActiveItems]);
  useEffect(() => {
    const completedTodos = todosCollection.filter((item) => item.isCompleted);
    setTodoItems(completedTodos);
  }, [showCompletedItems]);
  return (
    <Styled.WrapperMain>
      <h1>To do list</h1>
      <Styled.WrapperButtons>
        <Styled.FilterButton>Filter</Styled.FilterButton>
        <Styled.Filters>
          <div onClick={() => setShowAllItems(!showAllItems)}>All</div>
          <div onClick={() => setShowActiveItems(!showActiveItems)}>Active</div>
          <div onClick={() => setShowCompletedItems(!showCompletedItems)}>
            Completed
          </div>
        </Styled.Filters>
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
