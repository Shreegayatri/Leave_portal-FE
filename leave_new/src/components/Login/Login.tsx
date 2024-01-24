import Google from "../../assets/google.png";
import Logo from "../../assets/bottle.png";
import Divide from "../../assets/divider.png";
import eyeOn from "../../assets/visibilityEye.png";
import eyeOff from "../../assets/invisible.png";
import "../Login/Login.css";
import { useState } from "react";

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState({});

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const validateForm = () => {
    let errors = {};

    if (!emailInput) {
      errors.emailInput = "Email is required";
    }
    if (!passwordInput) {
      errors.passwordInput = "Password is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const onSubmitlogin = () => {
    if (validateForm()) {
      setEmailInput("");
      setPasswordInput("");
      setErrors("");
      alert("form submitted");
    } else {
      alert("form has error");
    }
  };
  return (
    <div className="main_Container">
      <div className="Left_half">
        <div className="Inner_left">
          <div className="logo_response"></div>
          <p className="Login_container">Login</p>
          <p className="add_cont">
            Enter your credential to access your account.
          </p>
          <div className="out_cont">
            <button className="btn_container">
              <img className="google_container" src={Google} alt="google" />
              <p className="logn_cont">Login with Google</p>
            </button>
          </div>
          <div className="out_cont extra_design">
            <img className="or_cont" src={Divide} alt="logo" />
          </div>
          <div className="out_cont">
            <label className="label_cont">Email Address</label>
            <input
              className="input_container"
              type=""
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              placeholder="Email@domain.com"
            />
            {errors.emailInput ? (
              <p className="error_msg">{errors.emailInput}</p>
            ) : (
              " "
            )}
          </div>
          <div className="out_cont">
            <div className="pass_cont label_cont">
              <label className="">Password</label>

              <a className="forget_pass" href="/" target="_pass">
                Forget password
              </a>
            </div>

            <input
              className="input_container"
              type={passwordType}
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
            />
            <button className="pass_icon_login" onClick={togglePassword}>
              {passwordType == "password" ? (
                <img className="eye_img_contLogin" src={eyeOff} alt="eye" />
              ) : (
                <img className="eye_img_contLogin" src={eyeOn} alt="eye" />
              )}
            </button>
            {errors.passwordInput ? (
              <p className="error_msg">{errors.passwordInput}</p>
            ) : (
              " "
            )}
          </div>

          <div className="out_cont">
            <button onClick={onSubmitlogin} className="btn_txt">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="Right_half">
        <div className="Inner_right">
          <img className="image_container" src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
export default Login;
