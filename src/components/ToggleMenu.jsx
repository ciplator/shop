import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ButtonStyled } from "./UI/Button.styles";

const ToggleMenu = ({ toggleTheme, isDarkMode }) => (
  <ButtonStyled onClick={toggleTheme}>
    {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
  </ButtonStyled>
);

export default ToggleMenu;
