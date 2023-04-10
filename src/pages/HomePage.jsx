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
      color: rgb(36, 50, 70);
      font-size: 30px;
      margin: 12px 0;
    }
  `,
  WrapperButtons: styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    @media (max-width: 768px) {
      font-size: 13px;
    }
  `,
  Filters: styled.div`
    display: flex;
    width: max-content;
    justify-content: flex-start;
    padding: 3px;
    margin: 9px 9px;
    border-radius: 5px;
    cursor: pointer;
    div {
      margin: 0 3px;
      padding: 7px;
      border: 1px solid #663535;
      border-radius: 10px;
      background-color: #f9cedf;
      color: #663535;
    }
  `,
};

// Styled.Filter = styled.div`
//   background-color: rgb(249, 206, 223);
//   color: rgb(135, 65, 93);
//   border-radius: 20px;
//   text-align: center;
//   position: relative;
//   margin: 10px;
//   padding: 8px 14px;
//   cursor: pointer;
//   border: none;
//   // &:hover ~ ${Styled.Filters} {
//   //   display: block;
//   //   flex-direction: column;
//   //   justify-content: flex-start;
//   //   position: absolute;
//   //   // right: 8%;
//   //   top: 17%;
//   //   z-index: 10;
//   // }
// `;

const HomePage = () => {
  const todosCollection = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showActiveItems, setShowActiveItems] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  const [todosForShow, setTodosForShow] = useState(todosCollection);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    setTodosForShow(todosCollection);
  }, [todosCollection]);

  useEffect(() => {
    const activeTodos = todosCollection.filter((item) => !item.isCompleted);
    setTodosForShow(activeTodos);
  }, [showActiveItems]);

  useEffect(() => {
    const completedTodos = todosCollection.filter((item) => item.isCompleted);
    setTodosForShow(completedTodos);
  }, [showCompletedItems]);

  useEffect(() => {
    setTodosForShow(todosCollection);
  }, [showAllItems]);

  return (
    <Styled.WrapperMain>
      <h1>To do list</h1>
      <Styled.WrapperButtons>
        {/* <Styled.Filter>Filter</Styled.Filter> */}
        <Styled.Filters>
          <div onClick={() => setShowAllItems(!showAllItems)}>All</div>
          <div onClick={() => setShowActiveItems(!showActiveItems)}>Active</div>
          <div onClick={() => setShowCompletedItems(!showCompletedItems)}>
            Completed
          </div>
        </Styled.Filters>
      </Styled.WrapperButtons>
      {todosForShow &&
        todosForShow.map((item) => (
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
