import styled from 'styled-components';
import { Button } from '../UI/Button';

const HeroSection = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 4rem 1rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle>Изучайте английский онлайн</HeroTitle>
      <HeroSubtitle>Индивидуальные занятия с носителями языка</HeroSubtitle>
      <Button>Попробовать бесплатно</Button>
    </HeroContent>
  </HeroSection>
);

