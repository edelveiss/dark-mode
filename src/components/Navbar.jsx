import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
//import { makeStyles } from "@material-ui/core/styles";
//import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//       color: "red",
//       background: "white",
//       fontSize: "2.5rem",
//     },
//   },
// }));

const Navbar = (props) => {
  // const classes = useStyles();
  const [darkMode, setDarkMode] = useDarkMode(false);
  console.log("text", props.text);
  //const [{ text }, handleChanges] = useSearchForm("search", initValue);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <input
        id="searchInput"
        style={{ width: " 30%", height: "3.5rem", fontSize: "1.5rem" }}
        type="text"
        placeholder="Search by crypto currency name"
        value={props.text}
        onChange={props.handleChanges}
        name="text"
      ></input>

      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

//onChange={this.handleFormChange}

// <nav className="navbar">
//       <h1>Crypto Tracker</h1>

//       <div className="dark-mode__toggle">
//         <div
//           onClick={toggleMode}
//           className={darkMode ? "toggle toggled" : "toggle"}
//         />
//       </div>
//     </nav>

// <form className={classes.root} noValidate autoComplete="off">
//         <TextField
//           style={{ fontSize: "2rem" }}
//           type="text"
//           id="outlined-basic"
//           label="Search by crypto currency name"
//           variant="outlined"
//           value={props.text}
//           onChange={props.handleChanges}
//           name="text"
//         />
//       </form>
