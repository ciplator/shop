import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Импортируем иконки
import { Button } from "../UI/Button";
import { HeaderWrapper, HeaderContent, Logo, Nav } from "./Header.styles";

export const Header = ({ toggleTheme, isDarkMode }) => (
  <HeaderWrapper>
    <HeaderContent>
      <Logo>EnglishPro</Logo>
      <Nav>
        <Button variant="ghost">Курсы</Button>
        <Button variant="ghost">Преподаватели</Button>
        <Button variant="ghost">Контакты</Button>
        <Button onClick={toggleTheme}>
          {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </Button>
      </Nav>
    </HeaderContent>
  </HeaderWrapper>
);
