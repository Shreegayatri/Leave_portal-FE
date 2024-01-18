import "./App.css";
import Logo from "./assets/bottle.png";
import Google from "./assets/google.png";

function App() {
  return (
    <>
      <div className="main_Container">
        <div className="Left_half">
          <div className="Inner_left">
            <img className="image_container" src={Logo} alt="logo" />
            <div className="out_cont">
              <button className="btn_container">
                <img className="google_container" src={Google} alt="google" />
                Log in with Google
              </button>
            </div>
            <div className="out_cont">
              <p className="txt_cont"> OR LOGIN WITH EMAIL</p>
            </div>
            <div className="out_cont">
              <input
                className="input_container"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="out_cont">
              <input
                className="input_container"
                type="password"
                placeholder="Your Password"
              />
            </div>
            <div className="out_cont check_container">
              <div className="check_input">
                <input
                  className="check_design"
                  id="check"
                  name="check"
                  value="ckecked"
                  type="checkbox"
                />
                <p className="ckeck_txt">Keep me Logged in</p>
              </div>
              <div>
                <a href="/" target="_pass">
                  Forget password
                </a>
              </div>
            </div>
            <div className="out_cont">
              <button className="btn_txt">Log In</button>
            </div>
            <div className="out_cont">
              <p className="txt_cont">
                Don't have an account yet? <a href="/">Sign up</a>
              </p>
            </div>
          </div>
        </div>
        <div className="Right_half"></div>
      </div>
    </>
  );
}

export default App;
