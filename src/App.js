import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import { Fragment, useState } from "react";
import Circle from "./assets/Icons/Circle.svg";
import PencilIcon from "./assets/Icons/outlined pencil.svg";
import classes from "./App.module.css";
import AuthModal from "./components/Auth/AuthModal";

function App() {
  let [loginInfo, setLoginInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(loginInfo);
  return (
    <Fragment>
      <Navbar
        {...{
          loginInfo,
          toggleModal: () => {
            setShowModal(true);
          },
        }}
      />
      <Home loginInfo={loginInfo} />
      <div
        className={classes.writePostButton}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img src={PencilIcon} className={classes.pencil} alt="" />
        <img src={Circle} className={classes.circle} alt="" />
      </div>
      <AuthModal
        // className={classes.height}
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        logIn={(info) => {
          setLoginInfo(info);
        }}
      />
    </Fragment>
  );
}

export default App;
