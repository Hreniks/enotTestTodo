import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { ToDoContext } from "../Context/ToDoContext";
import { guidGenerator } from "../utils/guidGenerator";
import { Action } from "../reducers/TaskReducer";
import { AddComponent } from "./AddComponent";

const inputStyles = {
  "& .MuiInputBase-root": {
    color: "white"
  },
  "& .MuiInputLabel-root": { color: "white" },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { borderColor: "white" }
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "white"
    }
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "white"
    }
  },
  "& .MuiFormLabel-root.Mui-disabled": {
    color: "white"
  }
};

export const AddTaskComponent = ({ todayList, isChecked, item, currentItemId }) => {
  const { dispatch } = useContext(ToDoContext);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [subtitleInputValue, setSubtitleInputValue] = useState("");

  const onAddTask = e => {
    if (!todayList)
      dispatch({
        type: Action.ADD_TASK,
        newTask: {
          id: guidGenerator(),
          currentItemId,
          title: titleInputValue,
          subtitle: subtitleInputValue,
          isDone: false
        }
      });
    else
      dispatch({
        type: Action.ADD_TODAY_TASK,
        newTask: {
          id: guidGenerator(),
          title: titleInputValue,
          subtitle: subtitleInputValue,
          isDone: false,
          isChecked: false
        }
      });

    setTitleInputValue("");
    setSubtitleInputValue("");
  };

  const onChangeTitleHandler = e => {
    setTitleInputValue(e.target.value);
  };

  const onChangeSubtitleHandler = e => {
    setSubtitleInputValue(e.target.value);
  };

  return (
    <>
      {(todayList || isChecked) && (
        <>
          <TextField
            sx={inputStyles}
            fullWidth
            margin="dense"
            id="addTask"
            name="addTask"
            label="Add task"
            value={titleInputValue}
            variant="outlined"
            onChange={onChangeTitleHandler}
          />
          <TextField
            sx={inputStyles}
            fullWidth
            margin="dense"
            id="addSubtitile"
            name="addSubtitile"
            label="Add subtitle"
            value={subtitleInputValue}
            variant="outlined"
            onChange={onChangeSubtitleHandler}
          />
          <AddComponent onClick={onAddTask} />
        </>
      )}
    </>
  );
};
