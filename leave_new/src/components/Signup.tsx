import { useState } from "react";
import Logo from "../assets/bottle.png";
// import axios from "axios";

function Signup() {
  const [empid, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
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
    let errors = {};

    if (!empid) {
      errors.empid = "Employee id is required";
    } else if (empid.length > 5) {
      errors.empid = "Employee id should be 5 letters";
    }
    if (!name) {
      errors.name = "Name is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!/[A-Z][a-z]\d/.test(password)) {
      errors.password = "Password must have 1 Caps,1 small, 1 digit";
    } else if (password.length > 8) {
      errors.password = "Password must be 8 letters";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
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
      setRoles("");
      setChecked(false);
      setErrors({});
      alert("Form submitted successfully");
    } else {
      alert("Form has error, Please correct it!");
    }
  };

  return (
    <div className="main_Container">
      <div className="Right_half">
        <div className="Inner_right">
          <img className="image_container" src={Logo} alt="logo" />
          <div className="out_cont">
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
            <input
              className="input_container"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password ? (
              <p className="error_msg">{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="out_cont">
            <select
              value={roles}
              onChange={(e) => {
                setRoles(e.target.value);
              }}
              className="input_container select_contain"
            >
              <option>Admin</option>
              <option>Employees</option>
              <option>Managers</option>
            </select>
            {/* {errors.roles ? <p className="error_msg">{errors.roles}</p> : ""} */}
          </div>
          <div className="out_cont check_container">
            <div className="check_input">
              <input
                className="check_design"
                type="checkbox"
                value={checked}
                onChange={handleCheck}
              />
              <p className="ckeck_txt">Accept all the field are correct</p>
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
