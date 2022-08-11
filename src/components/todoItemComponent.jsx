import React from "react";

const TodoItemComponent = (props) => {
  //   console.log(title);
  console.log(props);
  return (
    <div className="wrapper">
      <div>{props.todoItem.title}</div>
      <div className="buttonWrapper">
        <div className="doneBtn">Done</div>
        <div className="deleteBtn">Delete</div>
        <div className="infoBtn">
          Info
          <div>
            {props.todoItem.description}
            {/* {new Date(props.todoItem.createdAt)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItemComponent;
