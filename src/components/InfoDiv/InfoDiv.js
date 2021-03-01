import {useState} from 'react'
import './InfoDiv.css'

export const InfoDiv = ({ infoDivEnabled, setInfoDivEnabled }) => {
  return (
    <div
      id="info-div"
      style={infoDivEnabled ? { display: "block" } : { display: "none" }}
    >
      <div id="info-div-top">
        <a class="menu-button" onClick={() => setInfoDivEnabled(false)}>
          X
        </a>
      </div>
      <div id="info-div-text">
        <p>
          <b>
            <u>How to improve your password?</u>
          </b>
        </p>
        <br></br>
        <a>· Use more than 8 characters</a>
        <div id="separator"></div>
        <a>· Use lowercase, uppercase, numbers and special characters</a>
        <div id="separator"></div>
        <a>· Don't use personal info, like dates, names or hobbies.</a>
        <div id="separator"></div>
        <a>· Don't use the same password on every website.</a>
        <div id="separator"></div>
        <a>
          · Try not to use predictable passwords (1234, iloveyou, hello123...)
        </a>
      </div>
    </div>
  );
};
