import React, { useContext } from "react";
import "../css/ToDoList.css";
import { ToDoContext } from "../Context/ToDoContext";
import { Action } from "../reducers/TaskReducer";
import { ToDoItem } from "./ToDoItem";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ToDoList = ({ children }) => {
  const { dispatch, state } = useContext(ToDoContext);

  const AddToDoItem = () => {
    dispatch({
      type: Action.ADD_ITEM
    });
  };

  return (
    <>
      <ul className="toDoList">
        {state.todoItems.map((item, index) => (
          <ToDoItem key={item.id} itemIndex={index} {...item} />
        ))}
        <div className="addButtonWrapper">
          <IconButton onClick={AddToDoItem}>
            <AddIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </ul>
    </>
  );
};
