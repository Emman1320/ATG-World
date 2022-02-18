import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import AuthForm from "./AuthForm";
import CreateAccountPic from "../../assets/Create Account SVG.svg";
import classes from "./AuthModal.module.css";
import CloseButtonIcon from "../../assets/Icons/close button.svg";
import CloseButtonBlackIcon from "../../assets/Icons/close button black.svg";

const AuthModal = (props) => {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);
  const [className, setClassName] = useState("");

  const toggleAuthState = () => {
    setAlreadyHaveAccount((prevState) => !prevState);
  };
  const closeModal = () => {
    setAlreadyHaveAccount(false);
    setClassName("");
    if (window.innerWidth > 640) {
      props.onHide();
    } else
      setTimeout(() => {
        props.onHide();
      }, 300);
  };
  useEffect(() => {
    if (props.show) {
      setClassName(classes.height);
    }
  }, [props.show]);
  return (
    <Modal
      animation={true}
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${classes.modalContainer} ${
        alreadyHaveAccount ? classes.alreadyHaveAccount : ""
      } ${className}
      `}
    >
      <img
        className={classes.closeButton + " " + classes.displayNone}
        onClick={closeModal}
        src={CloseButtonIcon}
        alt=""
      />
      <Modal.Header className={classes.modalHeader}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={classes.modalTitle}
        >
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.modalBody}>
        <div className={classes.modalMainHeader}>
          <div>{!alreadyHaveAccount ? "Create Account" : "Sign In"}</div>
          {!alreadyHaveAccount ? (
            <div>
              Already have an account?{" "}
              <span onClick={toggleAuthState}>Sign In</span>
            </div>
          ) : (
            <div>
              Don’t have an account yet?{" "}
              <span onClick={toggleAuthState}>Create new for free!</span>
            </div>
          )}
          <div className={classes.mobileCloseButton}>
            <img src={CloseButtonBlackIcon} onClick={closeModal} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AuthForm
              {...{
                alreadyHaveAccount,
                toggleAuthState,
                logIn: props.logIn,
                closeModal: props.onHide,
              }}
            />
            {!alreadyHaveAccount ? (
              <div className={classes.privacyPolicy + " " + classes.mobileView}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={"col-6 " + classes.displayNone}>
            <div className="row">
              <img src={CreateAccountPic} alt="" />
            </div>
            {!alreadyHaveAccount && (
              <div className={"row " + classes.privacyPolicy}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
