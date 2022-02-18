import React from "react";
import DotMenuIcon from "../../assets/Icons/dot menu.svg";
import { Dropdown } from "react-bootstrap";
import classes from "./Article.module.css";

const ArticleDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={classes.articleMenuButton}
        variant="success"
        id="dropdown-basic"
      >
        <div className={classes.articleMenu}>
          <img src={DotMenuIcon} alt="" />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className={classes.articleMenuDropdown}>
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ArticleDropdown;
