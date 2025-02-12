import styled from "styled-components";

export const HeroSection = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 64px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 48px 12px;
  }

  @media (max-width: 480px) {
    padding: 32px 8px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
