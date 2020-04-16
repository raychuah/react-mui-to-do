import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import ItemList from "../components/ItemList";

const Index = () => {
  const [textInput, setTextInput] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");
  const [items, setItems] = useState([
    { text: "Item1" },
    { text: "Item2" },
    { text: "Item3" },
  ]);

  const handleToggleTextInput = () => {
    setTextInput(!textInput);
  };

  const editTodo = (todo) => {
    const newTodos = [...items];
    newTodos[editIndex].text = todo;
    setEdit(false);
  };

  const addTodo = (todo) => {
    const newTodos = [...items, { text: todo }];
    setItems(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...items];
    newTodos.splice(index, 1);
    setItems(newTodos);
  };

  const handleEdit = (index) => {
    const newTodos = [...items];
    setEdit(true);
    setEditIndex(index);
    setEditValue(newTodos[index].text);
    setTextInput(true);
  };

  return (
    <Container maxWidth="xs">
      <Header handleToggle={handleToggleTextInput}></Header>
      {textInput && (
        <TextInput
          addTodo={addTodo}
          editTodo={editTodo}
          edit={edit}
          initial={editValue}
        ></TextInput>
      )}
      <ItemList
        items={items}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      ></ItemList>
    </Container>
  );
};

export default Index;
