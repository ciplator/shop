import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray[900]};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;
