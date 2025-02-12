import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.gray[50]};
`;

export const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;
