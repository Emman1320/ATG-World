import React from "react";
import groupIcon1 from "../../assets/Groups/group1.jpg";
import groupIcon2 from "../../assets/Groups/group2.jpg";
import groupIcon3 from "../../assets/Groups/group3.jpg";
import groupIcon4 from "../../assets/Groups/group4.jpg";
import classes from "./Home.module.css";
import { Button, NavLink } from "react-bootstrap";
const Group = (props) => (
  <div className={classes.group}>
    <div>
      <img src={props.groupIcon} alt="" />
      <span>{props.groupName}</span>
    </div>
    <Button className={classes.followButton}>Follow</Button>
  </div>
);

const ThumbsUpIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
      fill="black"
    />
  </svg>
);

const RecommendedGroups = () => {
  const groups = [
    { groupIcon: groupIcon1, groupName: "Leisure" },
    { groupIcon: groupIcon2, groupName: "Activism" },
    { groupIcon: groupIcon3, groupName: "MBA" },
    { groupIcon: groupIcon4, groupName: "Philosophy" },
  ];
  return (
    <div className={classes.groupsContainer}>
      <div>
        <ThumbsUpIcon /> Recommended Groups
      </div>
      {groups.map((group, index) => (
        <Group key={index} {...group} />
      ))}
      <NavLink>See More...</NavLink>
    </div>
  );
};

export default RecommendedGroups;
