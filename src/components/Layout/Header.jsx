import styled from "styled-components";
import { Button } from "../UI/Button";

const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.gray[900]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

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
