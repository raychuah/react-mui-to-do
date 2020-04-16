import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
  },
}));

const Header = ({ handleToggle }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.headerTitle} variant="h6">
          <Link href="/" color="inherit" underline="none">
            React To Do
          </Link>
        </Typography>
        <IconButton aria-label="Add" color="inherit" onClick={handleToggle}>
          <AddIcon></AddIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
