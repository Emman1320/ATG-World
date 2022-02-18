import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import DownArrow from "../../assets/down arrow.svg";
import BackIcon from "../../assets/Icons/back icon.svg";
import SearchIcon from "../../assets/search icon.svg";
import profilePic from "../../assets/Profile/profile4.jpg";
import { Button } from "react-bootstrap";

const Navbar = ({ loginInfo, toggleModal }) => {
  return (
    <Fragment>
      <div className={classes.navbarContainer}>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        {loginInfo ? (
          <div onClick={() => toggleModal(true)} className={classes.loginInfo}>
            <img src={profilePic} alt="" />
            <div>{loginInfo.name}</div>
            <img src={DownArrow} alt="" />
          </div>
        ) : (
          <div
            className={classes.createAccount}
            onClick={() => toggleModal(true)}
          >
            Create account. <span>It's free!</span>
            <div>
              <img src={DownArrow} alt="" />
            </div>
          </div>
        )}
      </div>
      <div className={classes.mobileNavbar}>
        <img src={BackIcon} alt="" />
        <Button>Join Group</Button>
      </div>
    </Fragment>
  );
};

export default Navbar;
