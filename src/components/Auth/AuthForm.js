import { Button } from "react-bootstrap";
import classes from "./AuthForm.module.css";
import EyeIcon from "../../assets/Icons/eye icon.svg";
import FacebookIcon from "../../assets/Icons/facebook.svg";
import GoogleIcon from "../../assets/Icons/google.svg";
import { useRef, useState } from "react";

const AuthForm = ({
  alreadyHaveAccount,
  toggleAuthState,
  logIn,
  closeModal,
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };
  const userNameRef = useRef();
  const saveLoginInfo = () => {
    logIn({ name: userNameRef.current.value });
    closeModal();
  };
  return (
    <div className={"container " + classes.authForm}>
      {!alreadyHaveAccount && (
        <div className="row">
          <div className="col-6">
            <input type="text" ref={userNameRef} placeholder="First Name" />
          </div>
          <div className="col-6">
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
      )}
      <div className="row">
        <input type="email" placeholder="Email" />
      </div>
      <div className={"row " + classes.password}>
        <input
          type={passwordVisibility ? "text" : "password"}
          placeholder="Password"
        />
        <img
          src={EyeIcon}
          onMouseDown={togglePasswordVisibility}
          onMouseUp={togglePasswordVisibility}
          alt=""
        />
      </div>
      {!alreadyHaveAccount && (
        <div className="row">
          <input
            type={passwordVisibility ? "text" : "password"}
            placeholder="Confirm Password"
          />
        </div>
      )}
      <div className={classes.authFormActions}>
        <div className={"row "}>
          <Button onClick={saveLoginInfo}>
            {alreadyHaveAccount ? "Sign In" : "Create Account"}
          </Button>
        </div>
        <div className={classes.toggleLoginState}>
          <Button onClick={saveLoginInfo}>
            {alreadyHaveAccount ? "Sign In" : "Create Account"}
          </Button>
          <div onClick={toggleAuthState}>
            {alreadyHaveAccount ? "or, Create Account" : "or, Sign In"}
          </div>
        </div>

        <div className={classes.thirdPartyServices}>
          <div className="row">
            <Button onClick={saveLoginInfo}>
              <img src={FacebookIcon} alt="" /> Sign{" "}
              {!alreadyHaveAccount ? "up" : "in"} with Facebook
            </Button>
          </div>
          <div className="row">
            <Button onClick={saveLoginInfo}>
              <img src={GoogleIcon} alt="" /> Sign{" "}
              {!alreadyHaveAccount ? "up" : "in"} with Google
            </Button>
          </div>
        </div>
        {alreadyHaveAccount && (
          <div className={"row " + classes.forgotPassword}>
            Forgot Password?
          </div>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
