import { HeroSection, HeroContent, HeroTitle, HeroSubtitle } from './Hero.styles';
import { Button } from '../UI/Button';

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle>Изучайте английский онлайн</HeroTitle>
      <HeroSubtitle>Индивидуальные занятия с носителями языка</HeroSubtitle>
      <Button white>Попробовать бесплатно</Button>
    </HeroContent>
  </HeroSection>
);

export default Hero; // Экспортируем как default
