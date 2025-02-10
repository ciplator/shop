import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const Button = ({ children, onClick, fullWidth }) => (
  <ButtonStyled onClick={onClick} fullWidth={fullWidth}>
    {children}
  </ButtonStyled>
);
