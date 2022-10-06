import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const CustomSwitch = ({ taskDone, showMarquee, isChecked }) => {
  const [state, setState] = React.useState(
    {
      checkedA: false
    } || isChecked
  );

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
    taskDone && taskDone();
    showMarquee && showMarquee();
  };

  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            "&$checked": {
              "transform": "translateX(25px)",
              "& + $track": {
                backgroundColor: "#cfd7dc"
              }
            },
            "&$checked:hover": {
              backgroundColor: "#89d32930"
            },
            "&$focusVisible $thumb": {
              color: "#cfd7dc",
              border: "6px solid #fff"
            }
          },
          colorPrimary: {
            "color": "#fff",
            "&.Mui-checked": {
              color: "#fff"
            }
          },
          track: {
            "borderRadius": "20px",
            "color": "#cfd7dc",
            "backgroundColor": "#366EFF",
            "opacity": 1,
            ".Mui-checked.Mui-checked + &": {
              backgroundColor: "#10C200"
            }
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isChecked ? isChecked : state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
        />
      </FormGroup>
    </ThemeProvider>
  );
};
