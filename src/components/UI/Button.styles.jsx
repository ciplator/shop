import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 16px;
  border-radius: 8px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  svg {
    margin-right: 8px;
  }
`;
