import { HeaderWrapper, HeaderContent, Logo, Nav } from './Header.styles';
import { Button } from '../UI/Button';

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
