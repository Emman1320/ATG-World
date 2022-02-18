import React, { Fragment } from "react";
import CalendarIcon from "../../assets/Icons/calender.svg";
import LocationIcon from "../../assets/Icons/location.svg";
import SuitcaseIcon from "../../assets/Icons/suitcase.svg";

import classes from "./Article.module.css";
import { Button } from "react-bootstrap";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mar",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ArticleDesc = ({ date, location, link, buttonText, job, genre }) => {
  let info;
  if (genre === "Meetup") {
    date = `${days[date?.getDay()]}, ${date?.getDate()} ${
      months[date?.getMonth()]
    }, ${date?.getFullYear()}`;
    info = (
      <div>
        <img src={CalendarIcon} alt="" />
        {date}
      </div>
    );
  } else {
    info = (
      <div>
        <img src={SuitcaseIcon} alt="" />
        {job}
      </div>
    );
  }
  return (
    <Fragment>
      <div className={classes.articleInfo}>
        {info}
        <div> 
          <img src={LocationIcon} alt="" />
          {location}
        </div>
      </div>
      <a
        style={{
          color: "none",
          textDecoration: "none",
        }}
        href={link}
        className={classes[genre.toLowerCase()]}
      >
        <Button className={classes.articleButton}>{buttonText}</Button>
      </a>
    </Fragment>
  );
};

export default ArticleDesc;
