import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: ${props => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover || "#1e40af"};
  }
`;
