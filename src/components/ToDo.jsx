import React, { useContext } from "react";
import "../css/ToDo.css";
import { ToDoContext } from "./../Context/ToDoContext";
import { Action } from "../reducers/TaskReducer";
import { CustomSwitch } from "./CustomSwitch";

export const ToDo = ({
  titleText,
  subtitleText,
  itemIndex,
  todoIndex,
  isDone,
  todoId,
  isChecked
}) => {
  const { dispatch } = useContext(ToDoContext);

  const TaskDone = () => {
    dispatch({
      type: Action.CHECK_TASK,
      task: {
        currentItemIndex: itemIndex,
        currentTodoIndex: todoIndex,
        todoId
      }
    });
  };

  return (
    <div className="todo">
      <div className="toDoLine"></div>
      <div className="toDoText">
        <h2 className={`toDoTextTitle ${isDone && "line-through"}`}>{titleText}</h2>
        <p className="toDoTextSubtitle">{subtitleText}</p>
      </div>
      <div className="toDoSwitchWrapper">
        <CustomSwitch isChecked={isChecked} taskDone={TaskDone} />
      </div>
    </div>
  );
};
