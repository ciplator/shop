import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 16px 24px;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray[900]};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
