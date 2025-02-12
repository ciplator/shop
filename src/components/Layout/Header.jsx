import { Button } from "../UI/Button";
import { HeaderWrapper, HeaderContent, Logo, Nav } from "./Header.styles";

export const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Logo>EnglishPro</Logo>
      <Nav>
        <Button variant="ghost">Курсы</Button>
        <Button variant="ghost">Преподаватели</Button>
        <Button variant="ghost">Контакты</Button>
        <Button>Начать обучение</Button>
      </Nav>
    </HeaderContent>
  </HeaderWrapper>
);
