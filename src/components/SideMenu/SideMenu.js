import { useState } from 'react'
import { bg_colors, input_visibility } from '../../data'
import './SideMenu.css'

export const SideMenu = ({ inputEl, setBgColorEnabled, setBgColor, setVisibility, setInfoDivEnabled }) => {
  // Menu states
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div id="wrapper-menu">
      {!menuToggle ? (
        <a
          class="menu-button"
          onClick={() => setMenuToggle((prevBool) => !prevBool)}
        >
          Menu
        </a>
      ) : (
        <div className="side-menu">
          <a
            class="menu-button"
            onClick={() => setMenuToggle((prevBool) => !prevBool)}
          >
            X
          </a>
          <br></br>
          <a
            className="side-menu-item"
            onClick={() => {
              setBgColorEnabled((prevBool) => !prevBool);
              setMenuToggle((prevBool) => !prevBool);
              setBgColor(bg_colors.default);
              inputEl.current.focus();
            }}
          >
            Toggle background color
          </a>
          <a
            className="side-menu-item"
            onClick={() => {
              setVisibility((prevBool) => !prevBool);
            }}
          >
            Toggle password visibility
          </a>
          <a
            className="side-menu-item"
            onClick={() => {
              setInfoDivEnabled((prevBool) => !prevBool);
            }}
          >
            How to improve my password?
          </a>
        </div>
      )}
    </div>
  );
};
