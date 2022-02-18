import React, { Fragment } from "react";
import Article from "../Article/Article";
import classes from "./Home.module.css";
import HomeNavbar from "./HomeNavbar";
import ArticleImage1 from "../../assets/article1.jpg";
import ArticleImage2 from "../../assets/article2.jpg";
import MeetupImage from "../../assets/meetup.jpg";
import ProfilePic1 from "../../assets/Profile/profile1.jpg";
import ProfilePic2 from "../../assets/Profile/profile2.jpg";
import ProfilePic3 from "../../assets/Profile/profile3.jpg";
import ProfilePic4 from "../../assets/Profile/profile4.jpg";

import SideColumn from "./SideColumn";

const articles = [
  {
    id: 1,
    image: ArticleImage1,
    profilePicture: ProfilePic1,
    profileName: "Sarthak Kamra",
    genre: "Article",
    genreEmoji: "✍️",
    header: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    views: "1.4k",
  },
  {
    id: 2,
    image: ArticleImage2,
    profilePicture: ProfilePic2,
    profileName: "Sarah West",
    genre: "Education",
    genreEmoji: "🔬️",
    header:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    location: "",
    date: "",
    views: "1.4k",
  },
  {
    id: 3,
    image: MeetupImage,
    profilePicture: ProfilePic3,
    profileName: "Ronal Jones",
    genre: "Meetup",
    genreEmoji: "🗓️",
    header: "Finance & Investment Elite Social Mixer @Lujiazui",
    description: "",
    location: "Ahmedabad, India",
    buttonText: "Visit Website",
    link: "#",
    date: new Date(2018, 10, 12),
    views: "1.4k",
  },
  {
    id: 4,
    image: "",
    profilePicture: ProfilePic4,
    profileName: "Joseph Gray",
    genre: "Job",
    genreEmoji: "💼️",
    header: "Software Developer",
    description: "",
    location: "Noida, India",
    buttonText: "Apply on Timesjobs",
    link: "#",
    date: "",
    job: "Innovaccer Analytics Private Ltd.",
    views: "1.4k",
  },
];
const Home = ({ loginInfo }) => {
  return (
    <Fragment>
      <div className={classes.heroImage}>
        <div>
          <div className={classes.heroImageText}>
            <div>Computer Engineering</div>
            <div>142,765 Computer Engineers follow this</div>
          </div>
        </div>
      </div>
      <HomeNavbar loginInfo={loginInfo} />
      <div className={classes.main + " container"}>
        <div className="row">
          <div className="col-8 d-flex justify-content-center flex-column">
            {articles.map((article) => (
              <Article key={article.id} {...article} />
            ))}
          </div>
          <div className="col-4 ">
            <SideColumn loginInfo={loginInfo} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
