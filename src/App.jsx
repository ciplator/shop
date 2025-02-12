import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Header } from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import { FeatureCard } from './components/Features/FeatureCard';
import { CourseCard } from './components/Courses/CourseCard';
import { GraduationCap, Calendar, MessageCircle } from 'lucide-react';
import { AppWrapper, Section, Grid } from './App.styles';

const App = () => {
  const courses = [
    { id: 1, title: "Основы английского", level: "Beginner", duration: "2 месяца", price: "1200" },
    { id: 2, title: "Продвинутый английский", level: "Advanced", duration: "3 месяца", price: "1500" }
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
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
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Grid>
        </Section>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
