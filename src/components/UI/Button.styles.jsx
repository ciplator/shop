import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
    transform: scale(1.05);
  }

  svg {
    margin-right: 8px;
  }
`;
