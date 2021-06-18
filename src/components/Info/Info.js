import React from "react";
import "./Info.css";
import onlineIcon from "../../Icons/onlineIcon.png";
import closeIcon from "../../Icons/closeIcon.png";
import { Link } from "react-router-dom";

const Info = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <Link to="/">
          <img src={closeIcon} alt="close icon" />
        </Link>
      </div>
    </div>
  );
};

export default Info;
