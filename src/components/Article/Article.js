import React from "react";
import classes from "./Article.module.css";
import EyeIcon from "../../assets/Icons/eye icon.svg";
import ShareIcon from "../../assets/Icons/share.svg";
import ArticleDropdown from "./ArticleDropdown";
import ArticleDesc from "./ArticleDesc";
import { Button } from "react-bootstrap";

const Article = ({
  image,
  profilePicture,
  profileName,
  genre,
  genreEmoji,
  header,
  description,
  views,
  buttonText,
  link,
  date,
  location,
  job,
}) => {
  let articleDesc = <div className={classes.articleDesc}>{description}</div>;
  if (genre === "Meetup" || genre === "Job") {
    articleDesc = (
      <ArticleDesc {...{ date, location, link, buttonText, genre, job }} />
    );
  }

  return (
    <div className={classes.articleContainer}>
      {image && (
        <div className={classes.articleImage}>
          <img src={image} alt="" />
        </div>
      )}
      <div className={classes.articleBody}>
        <div className={classes.articleGenre}>
          <span>{genreEmoji}</span> {genre}
        </div>
        <div className={classes.articleHeaderContainer}>
          <div className={classes.articleHeader}>{header}</div>
          <ArticleDropdown />
        </div>
        {articleDesc}
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className={classes.profilePicture}>
              <img src={profilePicture} alt="" />
            </div>
            <div className={classes.profileName}>
              <div>{profileName}</div>
              <div>
                <div className={classes.articleViewsMobile}>
                  <span>{views} views</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justifiy-content-between">
            <div className={classes.articleViews}>
              <img src={EyeIcon} alt="" />
              <span>{views} views</span>
            </div>
            <Button className={classes.articleShareButton}>
              <img src={ShareIcon} alt="" /> <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
