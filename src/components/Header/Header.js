import React from "react";
import ThemeContext from "../context/themeContext";

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {({switchTheme}) => (
        <div className="header mb-5">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={switchTheme}
            />
            <label class="form-check-label ms-2" for="flexSwitchCheckChecked">
              Switch theme
            </label>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
