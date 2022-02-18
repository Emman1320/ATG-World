import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import classes from "./HomeNavbar.module.css";
import DownArrow from "../../assets/down arrow.svg";
import GroupIcon from "../../assets/group icon.svg";
import ExitIcon from "../../assets/Icons/exit.svg";

const HomeNavbar = ({ loginInfo }) => {
  return (
    <Fragment>
      <div className={classes.homeNavbarContainer}>
        <div className={classes.homeNavbarItems}>
          <div className={classes.active}>All Posts(32)</div>
          <div>Article</div>
          <div>Event</div>
          <div>Education</div>
          <div>Job</div>
        </div>
        <div className={classes.homeNavbarActions}>
          <Button>
            Write a Post
            <div>
              <img src={DownArrow} alt="" />
            </div>
          </Button>
          <Button className={`${loginInfo ? classes.loggedIn : ""}`}>
            <div>
              <img src={loginInfo ? ExitIcon : GroupIcon} alt="" />
            </div>
            {`${loginInfo ? "Exit" : "Join"}`} Group
          </Button>
        </div>
      </div>
      <div className={classes.mobileHomeNavbar}>
        <div>Posts(368)</div>
        <Button>
          Filter: All
          <div>
            <img src={DownArrow} alt="" />
          </div>
        </Button>
      </div>
    </Fragment>
  );
};

export default HomeNavbar;
