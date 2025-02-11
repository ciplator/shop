import styled from 'styled-components';

export const HeroSection = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 64px 16px;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 1280px;
`;

export const HeroTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
`;
