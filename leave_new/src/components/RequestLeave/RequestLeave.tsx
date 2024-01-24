import React from "react";
import Logo from "../../assets/bottle white.png";
import avatar from "../../assets/avatar.png";
import arrow from "../../assets/arrow.png";
import alert from "../../assets/alert.svg";
import "../RequestLeave/RequestLeave.css";

function RequestLeave() {
  return (
    <div>
      <div className="main_container">
        <div className="nav_container">
          <div className="logo_container">
            <img className="image_container" src={Logo} alt="logo" />
          </div>
          <div className="avatar_container">
            <img className="" src={avatar} alt="ava" />
            <p className="Text_name">Gayatri Devi K</p>
            <img className="" src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="innner_overall">
        <div className="layout_cont">
          <div className="leavenotify_cont">
            <p className="leave_contain">Leave Request</p>
            <img src={alert} alt="" />
          </div>
          <div className="leaveType_cont">
            <label className="label_contain">Types of leave</label>
            <select>
              <option>Casual Leave</option>
              <option>Sick Leave</option>
            </select>
            <p className="under_txt">
              A permission should not exceed 1 hour and have to be compensated.
            </p>
          </div>
          <div className="from_container">
            <label className="label_contain">From</label>
            <input className="input_contain" type="date"></input>
          </div>
          <div className="from_container">
            <label className="label_contain">To</label>
            <input className="input_contain" type="date"></input>
          </div>
          <div className="reason_container">
            <p className="label_contain">Reason for leave</p>
            <textarea className="textarea_contain"></textarea>
          </div>
          <div className="manage_container">
            <p className="label_contain">Who is your manager ?</p>
            <select>
              <option>XXXX</option>
              <option>YYYY</option>
            </select>
            <p className="under_txt">We will also get approval from him.</p>
          </div>
          <div className="button_contain">
            <button className="send_contain">Send</button>
            <button className="cancel_contain">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestLeave;
