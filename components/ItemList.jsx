import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ItemList = ({ items, handleDelete, handleEdit }) => {
  return (
    <div>
      <List component="ul">
        {items.map((item, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemText>{item.text}</ListItemText>
              <IconButton size="small" onClick={() => handleEdit(index)}>
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton size="small" onClick={() => handleDelete(index)}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </ListItem>
            <Divider></Divider>
          </Box>
        ))}
      </List>
    </div>
  );
};

export default ItemList;
