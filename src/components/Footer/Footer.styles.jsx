import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.colors.gray[900]};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  text-align: center;
  margin-top: 40px;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  font-size: 14px;
`;
