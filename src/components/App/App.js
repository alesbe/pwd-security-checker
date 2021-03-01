import {useState, useRef, useEffect} from 'react'
import './App.css';
import {SideMenu} from '../SideMenu/SideMenu';
import {InfoDiv} from '../InfoDiv/InfoDiv'
import { checkPassword } from "../../utils/checkPassword";
import {
  colors,
  bg_colors,
  input_state,
  input_visibility,
} from '../../data';

function App() {
  // Input states
  const [inputColor, setInputColor] = useState(colors.default);
  const [bgColor, setBgColor] = useState(bg_colors.default);
  const [inputState, setInputState] = useState(input_state.default);
  const [visibility, setVisibility] = useState(input_visibility.invisible);

  const [bgColorEnabled, setBgColorEnabled] = useState(true);
  const [infoDivEnabled, setInfoDivEnabled] = useState(false);

  useEffect(() => {
    if (
      inputState === "Invalid character" ||
      inputState === "Unsecure" ||
      inputState === "Weak" ||
      inputState === "Poor" ||
      inputState === "Good" ||
      inputState === "Robust"
    ) {
      document.title = String(inputState);
    } else {
      document.title = "Password Checker";
    }
  }, [inputState])

  const inputEl = useRef(null);

  const handlePassword = (pwd_text) => {
    checkPassword(
      pwd_text,
      setInputColor,
      setInputState,
      setBgColor,
      bgColorEnabled
    );
  };

  return (
    <div className="wrapper">
      <SideMenu
        inputEl={inputEl}
        setBgColorEnabled={setBgColorEnabled}
        setBgColor={setBgColor}
        setVisibility={setVisibility}
        setInfoDivEnabled={setInfoDivEnabled}
      />

      <InfoDiv
        infoDivEnabled={infoDivEnabled}
        setInfoDivEnabled={setInfoDivEnabled}
      />

      <div
        className="App"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <h2 className="h2-title">Type a password to check</h2>
        <input
          className="input"
          type={visibility ? "text" : "password"}
          style={{
            backgroundColor: inputColor,
            transition: "background-color 0.3s ease-in-out",
          }}
          maxLength="20"
          ref={inputEl}
          onChange={(ev) => handlePassword(ev.target.value)}
        ></input>

        <br></br>
        <p className="p-text">{inputState}</p>

        <footer className="footer">
          <p className="footer-text">
            Made with &lt;3 by alesbe.{" "}
            <a href="https://github.com/alesbe/pwd-security-checker">Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
