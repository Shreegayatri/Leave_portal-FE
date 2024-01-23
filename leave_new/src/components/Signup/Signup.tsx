import { useState } from "react";
import Logo from "../../assets/bottle.png";
import eyeOn from "../../assets/visibilityEye.png";
import eyeOff from "../../assets/invisible.png";
import "../Signup/Signup.css";

function Signup() {
  const [empid, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  // const [roles, setRoles] = useState("");
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCheck = (event) => {
    if (event.target.checked) {
      console.log("true");
    } else {
      console.log("false");
    }
    setChecked((current) => !current);
  };

  const validateForm = () => {
    const minLength = 10;
    const Uppercase = /[A-Z]/.test(password);
    const Lowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpace = /\s/.test(password);
    const hascharacters = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const hasFormat = /^[A-Z]+[0-9]+$/;
    const emailFormat = /^[a-zA-Z0-9._%+-]+@(gmail\.com|\.net)$/;
    let errors = {};

    if (!empid) {
      errors.empid = "Employee id is required";
    } else if (!hasFormat.test(empid)) {
      errors.empid = "Only accept this format Ex: MT121";
    } else if (empid.length > 5)
      errors.empid = "Employee id should be 5 letters";

    if (!name) {
      errors.name = "Name is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < minLength) {
      errors.password = "Password must be at least 10 characters long";
    } else if (!Uppercase) {
      errors.password = "Password must be contain atleast 1 Uppercase letters";
    } else if (!Lowercase) {
      errors.password = "Password must be contain atleast 1 Lowercase letters";
    } else if (hasSpace) {
      errors.password = "Password doesn't not accept spacing";
    } else if (!hasDigit) {
      errors.password = "Password must be contain atleast 1 Digit";
    } else if (hascharacters.test(password)) {
      errors.password = "Password must be contain atleast 1 Special characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    } else if (!emailFormat.test(email)) {
      errors.email = "Email only accept .gmail and .net format";
    }

    if (!checked) {
      errors.checked = "Checked is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // const EmployeeId = empid;
      // const response = await fetch("https://localhost:3000/api/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     EmployeeId,
      //     // name,
      //     // email,
      //     // password,
      //     // roles,
      //     // checked,
      //   }),
      // });
      console.log("check", empid);
      setEmpId("");
      setName("");
      setEmail("");
      setPassword("");
      // setRoles("");
      setChecked(false);
      setErrors({});
      alert("Form submitted successfully");
    } else {
      alert("Form has error, Please correct it!");
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="main_Container">
      <div className="Right_halfsignup">
        <div className="Inner_rightsignup">
          <img className="image_container image_logo" src={Logo} alt="logo" />
        </div>
      </div>
      <div className="Left_halfsignup">
        <div className="Inner_leftsignup">
          <div className="logo_response"></div>
          <p className="Login_container">SignUp</p>
          <div className="out_cont">
            <label className="label_cont">Employee Id</label>
            <input
              className="input_container"
              type="text"
              placeholder="Employer ID"
              name="empid"
              value={empid}
              onChange={(e) => {
                setEmpId(e.target.value);
              }}
            />
            {errors.empid ? <p className="error_msg">{errors.empid}</p> : ""}
          </div>
          <div className="out_cont">
            <label className="label_cont">User Name</label>
            <input
              className="input_container"
              type="text"
              name="name"
              placeholder="User Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {errors.name ? <p className="error_msg">{errors.name}</p> : ""}
          </div>
          <div className="out_cont">
            <label className="label_cont">Email-Id</label>
            <input
              className="input_container"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email ? <p className="error_msg">{errors.email}</p> : ""}
          </div>
          <div className="out_cont">
            <label className="label_cont">Password</label>
            <input
              className="input_container"
              type={passwordType}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="pass_icon_cont" onClick={togglePassword}>
              {passwordType == "password" ? (
                <img className="eye_img_cont" src={eyeOff} alt="eye" />
              ) : (
                <img className="eye_img_cont" src={eyeOn} alt="eye" />
              )}
            </button>
            {errors.password ? (
              <p className="error_msg">{errors.password}</p>
            ) : (
              ""
            )}
          </div>

          <div className="out_cont">
            <div className="check_inputsignup">
              <input
                className="check_design"
                type="checkbox"
                value={checked}
                onChange={handleCheck}
              />
              <p className="ckeck_txt">I Agree to the above Information.</p>
            </div>
          </div>
          {errors.checked ? <p className="error_msg">{errors.checked}</p> : ""}
          <div className="out_cont">
            <button type="submit" onClick={handleSubmit} className="btn_txt">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
