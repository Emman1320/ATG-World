import React, { Fragment } from "react";
import classes from "./Home.module.css";
import locationIcon from "../../assets/Icons/location.svg";
import pencilIcon from "../../assets/Icons/pencil.svg";
import InfoIcon from "../../assets/Icons/info.svg";
import RecommendedGroups from "./RecommendedGroups";
const SideColumn = ({ loginInfo }) => {
  return (
    <Fragment>
      <div className={classes.locationField}>
        <img src={locationIcon} alt="" />
        <input type="text" defaultValue="Noida, India" />
        <img src={pencilIcon} alt="" />
      </div>

      <div className={classes.locationDesc}>
        <div>
          <img src={InfoIcon} alt="" />
        </div>
        <div>
          Your location will help us serve better and extend a personalised
          experience.
        </div>
      </div>
      {loginInfo && <RecommendedGroups />}
    </Fragment>
  );
};

export default SideColumn;
