import React, { useContext, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoContext } from "./../Context/ToDoContext";
import { ToDo } from "./ToDo";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

export const TodayTasks = () => {
  const { state } = useContext(ToDoContext);
  const [isChecked, setIsChecked] = useState(true);

  const onChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="todayTasksWrapper">
        <Checkbox
          sx={{
            [`&, &.${checkboxClasses.checked}`]: {
              color: "white"
            },
            "& .MuiSvgIcon-root": { fontSize: 28 }
          }}
          defaultChecked
          onChange={onChangeHandler}
        />
        <h2 className="todayTasksText titleText">Today Tasks:</h2>
      </div>
      {isChecked && (
        <ToDoItem todayList={true}>
          {state.todaysTasks.map((item, index) => (
            <ToDo
              key={item.id}
              titleText={item.title}
              subtitleText={item.subtitle}
              todoId={item.id}
              isDone={state.todaysTasks[index].isDone}
              isChecked={item.isChecked}
            />
          ))}
        </ToDoItem>
      )}
    </>
  );
};
