import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textInput: {
    marginTop: theme.spacing(1),
  },
}));

const TextInput = ({ edit, editTodo, addTodo, initial }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (edit) {
      editTodo(value);
    } else {
      addTodo(value);
    }
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container maxWidth="xs">
      <form className={classes.textInput} onSubmit={handleSubmit}>
        <TextField
          id="text-input"
          label="Take a note.."
          variant="outlined"
          fullWidth
          value={value}
          onChange={handleChange}
        ></TextField>
      </form>
    </Container>
  );
};

export default TextInput;
