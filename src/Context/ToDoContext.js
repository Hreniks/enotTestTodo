import { createContext, useReducer, useEffect } from "react";
import { initializer, taskReducer } from "../reducers/TaskReducer";

export const ToDoContext = createContext(null);

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem beatae corrupti optio illum quod ducimus sunt exercitationem fugiat earum velit tempore facilis, pariatur cumque provident. Amet quaerat aliquid eos.";

export const todoStore = {
  todoItems: [],
  todaysTasks: []
};

const TaskContextProvider = props => {
  const [state, dispatch] = useReducer(taskReducer, todoStore, initializer);

  useEffect(() => {
    localStorage.setItem("todoState", JSON.stringify(state));
  }, [state]);

  return (
    <ToDoContext.Provider value={{ state, dispatch, lorem }}>{props.children}</ToDoContext.Provider>
  );
};
export default TaskContextProvider;
