import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDoApp from "./ToDoApp";
import TaskContextProvider from "./Context/ToDoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TaskContextProvider>
    <ToDoApp />
  </TaskContextProvider>
);
