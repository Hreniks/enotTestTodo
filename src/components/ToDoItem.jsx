import { React, useState, useContext } from "react";
import "../css/ToDoItem.css";
import "../css/ToDo.css";
import DropdownIcon from "../assets/dropdownIcon.svg";
import { AddTaskComponent } from "./AddTaskComponent";
import { ToDo } from "./ToDo";
import { ToDoContext } from "../Context/ToDoContext";

export const ToDoItem = ({ todayList, children, itemIndex, ...item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { state } = useContext(ToDoContext);

  const showTasks = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="toDoItem">
      {!todayList ? (
        <>
          <div className="todoTitle todo">
            <div className=" gray"></div>
            <div className="toDoText">
              <h2 className="toDoTextTitle">{itemIndex === 0 ? "Tommorow tasks" : item.title}</h2>
            </div>
            <div className="toDoDropWrapper" onClick={showTasks}>
              <img src={DropdownIcon} alt="" />
            </div>
          </div>
          {isChecked &&
            state.todoItems
              .find(todo => todo.id === item.id)
              .todos?.map((todo, index) => {
                return (
                  <ToDo
                    key={todo.id}
                    titleText={todo.title}
                    subtitleText={todo.subtitle}
                    itemIndex={itemIndex}
                    todoIndex={index}
                    isDone={todo.isDone}
                    isChecked={todo.isChecked}
                  />
                );
              })}
        </>
      ) : (
        <div className="todayList">{children}</div>
      )}

      <AddTaskComponent
        isChecked={isChecked}
        todayList={todayList}
        item={item}
        currentItemId={item.id}
      />
    </li>
  );
};
