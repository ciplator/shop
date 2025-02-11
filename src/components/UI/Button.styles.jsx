import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 16px; /* 1rem = 16px */
  border-radius: 8px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }
`;
