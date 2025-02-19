import React from "react";
import { Button } from "../UI/Button";
import { HeroSection, HeroContent, HeroTitle, HeroSubtitle } from "./Hero.styles";

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle>Изучайте английский онлайн</HeroTitle>
      <HeroSubtitle>Индивидуальные занятия с носителями языка</HeroSubtitle>
      <Button fullWidth>Попробовать бесплатно</Button>
    </HeroContent>
  </HeroSection>
);

export default Hero;
