import React from "react";
import { IconButton } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export const AddComponent = ({ onClick }) => {
  return (
    <div className="addIconWrapper">
      <IconButton onClick={onClick}>
        <CheckCircleOutlineOutlinedIcon sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
};
