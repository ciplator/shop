import React from "react";
import { ButtonStyled } from "./Button.styles";

export const Button = ({ children, onClick, fullWidth = false }) => (
  <ButtonStyled onClick={onClick} fullWidth={fullWidth}>
    {children}
  </ButtonStyled>
);
