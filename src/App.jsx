import React, { useState, useCallback } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
import { darkTheme, lightTheme } from "./styles/theme";
import { Header } from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import { FeatureCard } from "./components/Features/FeatureCard";
import { CourseCard } from "./components/Courses/CourseCard";
import { GraduationCap, Calendar, MessageCircle } from "lucide-react";
import { AppWrapper, Section, Grid } from "./App.styles";
import Modal from "./components/Modal";

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    { id: 1, title: "Основы английского", level: "Beginner", duration: "2 месяца", price: "50" },
    { id: 2, title: "Продвинутый английский", level: "Advanced", duration: "3 месяца", price: "75" }
  ];

  const memoizedToggleTheme = useCallback(() => toggleTheme(), [toggleTheme]);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <AppWrapper>
        <Header toggleTheme={memoizedToggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <Section>
          <Grid>
            <FeatureCard
              icon={GraduationCap}
              title="Опытные преподаватели"
              description="Носители языка с опытом преподавания"
            />
            <FeatureCard
              icon={Calendar}
              title="Гибкий график"
              description="Занятия в удобное для вас время"
            />
            <FeatureCard
              icon={MessageCircle}
              title="Разговорная практика"
              description="Акцент на живое общение"
            />
          </Grid>
        </Section>
        <Section>
          <Grid>
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Grid>
        </Section>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <h2>О нас</h2>
          <p>
            Мы предлагаем курсы английского языка для всех уровней: от начинающих до продвинутых.
          </p>
          <p>
            Наши преподаватели — носители языка с большим опытом преподавания.
          </p>
        </Modal>

        <button onClick={toggleModal}>Узнать больше</button>
      </AppWrapper>
    </StyledThemeProvider>
  );
};

export default App;
