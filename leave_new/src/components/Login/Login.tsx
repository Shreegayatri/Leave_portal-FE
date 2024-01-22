import Google from "../../assets/google.png";
import Logo from "../../assets/bottle.png";
import Divide from "../../assets/divider.png";
import "../Login/Login.css";

function Login() {
  return (
    <div className="main_Container">
      <div className="Left_half">
        <div className="Inner_left">
          {/* <img className="image_container" src={Logo} alt="logo" /> */}
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
          <div className="out_cont">
            <img src={Divide} alt="logo" />
          </div>
          <div className="out_cont">
            <label className="label_cont">Email Address</label>
            <input
              className="input_container"
              type="email"
              placeholder="email@domain.com"
            />
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
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="out_cont">
            <button className="btn_txt">Login</button>
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
