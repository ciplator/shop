import React from "react";
import ToggleMenu from "../ToggleMenu";
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
        <ToggleMenu toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </Nav>
    </HeaderContent>
  </HeaderWrapper>
);
