import React from "react";
import { ButtonStyled } from "./Button.styles";

export const Button = ({ children, onClick, fullWidth }) => (
  <ButtonStyled onClick={onClick} fullWidth={fullWidth}>
    {children}
  </ButtonStyled>
);
