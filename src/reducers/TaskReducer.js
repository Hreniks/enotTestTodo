import { todoStore } from "../Context/ToDoContext";
import { nextDayAndMonth } from "../utils/getNextDayAndMonth";
import { guidGenerator } from "./../utils/guidGenerator";
import { getDayAndMonth } from "../utils/getDayAndMonth";

export const Action = {
  ADD_TASK: "add-task",
  ADD_ITEM: "add-item",
  ADD_TODAY_TASK: "add-today-task",
  CHECK_TASK: "check-task",
  REMOVE_TASK: "remove-task"
};

export const initializer = (initialValue = todoStore) =>
  JSON.parse(localStorage.getItem("todoState")) || initialValue;

export const taskReducer = (state, action) => {
  switch (action.type) {
    case Action.ADD_TASK: {
      return {
        ...state,
        todoItems: state.todoItems.map(item => {
          if (item.id === action.newTask.currentItemId)
            item.todos = [...item.todos, action.newTask];

          return item;
        })
      };
    }
    case Action.ADD_ITEM: {
      const next = nextDayAndMonth();

      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          { id: guidGenerator(), title: next + " tasks", created: getDayAndMonth(), todos: [] }
        ]
      };
    }
    case Action.ADD_TODAY_TASK: {
      return { ...state, todaysTasks: [...state.todaysTasks, action.newTask] };
    }

    case Action.CHECK_TASK:
      return {
        ...state,
        todoItems: state.todoItems.map((item, index) => {
          if (index === action.task.currentItemIndex) {
            item.todos[action.task.currentTodoIndex].isDone =
              !item.todos[action.task.currentTodoIndex].isDone;
            item.todos[action.task.currentTodoIndex].isChecked =
              !item.todos[action.task.currentTodoIndex].isChecked;
          }

          return item;
        }),
        todaysTasks: state.todaysTasks.map(item => {
          if (item.id === action.task.todoId) {
            item.isChecked = !item.isChecked;
            item.isDone = !item.isDone;
          }

          return item;
        })
      };
    default:
      return state;
  }
};
