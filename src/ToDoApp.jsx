import { ToDoList } from "./components/ToDoList";
import { TodayTasks } from "./components/TodayTasks";
import "./css/ToDoApp.css";
import settingsIcon from "./assets/settings.svg";
import { Marquee } from "./components/Marquee";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconButton } from "@mui/material";
import { CustomSwitch } from "./components/CustomSwitch";
import { useState } from "react";
const queryClient = new QueryClient();

function ToDoApp() {
  const [isSwitchShow, setSwitchShow] = useState(false);
  const [isMarqueeShow, setIsMarqueeShow] = useState(false);

  const showMarquee = () => {
    setIsMarqueeShow(!isMarqueeShow);
  };

  const showSwitch = () => {
    setSwitchShow(!isSwitchShow);
  };
  return (
    <div className="ToDoApp">
      <div className="titleWrapper">
        <h1 className="titleText">To Do</h1>
        <div className="settings">
          <div className="settingsMenuWrapper">
            <IconButton onClick={showSwitch}>
              <img src={settingsIcon} alt="Settings" />
            </IconButton>
            <div className="settingsMenu">
              {isSwitchShow && <CustomSwitch showMarquee={showMarquee} />}
            </div>
          </div>
        </div>
      </div>
      <TodayTasks />
      <ToDoList />
      <QueryClientProvider client={queryClient}>{isMarqueeShow && <Marquee />}</QueryClientProvider>
    </div>
  );
}

export default ToDoApp;
