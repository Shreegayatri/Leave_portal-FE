import Logo from "../assets/bottle.png";

function Signup() {
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
            />
          </div>
          <div className="out_cont">
            <input
              className="input_container"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="out_cont">
            <input
              className="input_container"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="out_cont">
            <input
              className="input_container"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="out_cont">
            <select className="input_container select_contain">
              <option value="Admin">Admin</option>
              <option selected value="Employees">
                Employees
              </option>
              <option value="Managers">Managers</option>
            </select>
          </div>
          <div className="out_cont check_container">
            <div className="check_input">
              <input className="check_design" type="checkbox" placeholder="" />
              <p className="ckeck_txt">Accept the all the field are correct</p>
            </div>
          </div>
          <div className="out_cont">
            <button className="btn_txt">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
