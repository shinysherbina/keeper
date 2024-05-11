import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Fab from "@mui/material/Fab";
import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

const greyBase = "#808080";
const greyMain = alpha(greyBase, 0.7);

const theme = createTheme({
  palette: {
    grey: {
      main: greyMain,
      light: alpha(greyBase, 0.5),
      dark: alpha(greyBase, 0.9),
      contrastText: getContrastRatio(greyMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

function Input(props) {
  var [input, setInput] = useState({
    id: props.id,
    title: "",
    note: "",
  });

  var [expand, setExpand] = useState(false);

  function handleChange(event) {
    setExpand(true);
    var { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div className="add-input">
      <div className="input-area">
        {expand && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Add heading"
            value={input.title}
          ></input>
        )}
        <textarea
          name="note"
          onChange={handleChange}
          placeholder="Add note"
          value={input.note}
          rows={expand && "3"}
        ></textarea>
      </div>

      <ThemeProvider theme={theme}>
        <Zoom in={expand}>
          <Fab
            color="grey"
            onClick={() => {
              props.updateId();
              props.addNote(input);
              setInput({
                title: "",
                note: "",
              });
            }}
          >
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </ThemeProvider>
    </div>
  );
}

export default Input;
