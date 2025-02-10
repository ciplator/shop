// src/components/Courses/CourseCard.jsx
import styled from 'styled-components';
import { Button } from '../UI/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../UI/Card';

const CourseCardWrapper = styled(Card)`
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const CourseLabel = styled.span`
  color: ${props => props.theme.colors.gray[600]};
`;

const CourseValue = styled.span`
  font-weight: 600;
`;

export const CourseCard = ({ course }) => (
  <CourseCardWrapper>
    <CardHeader>
      <CardTitle>{course.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CourseInfo>
        <CourseLabel>Уровень:</CourseLabel>
        <CourseValue>{course.level}</CourseValue>
      </CourseInfo>
      <CourseInfo>
        <CourseLabel>Длительность:</CourseLabel>
        <CourseValue>{course.duration}</CourseValue>
      </CourseInfo>
      <CourseInfo>
        <CourseLabel>Цена:</CourseLabel>
        <CourseValue>{course.price} ₽/мес</CourseValue>
      </CourseInfo>
      <Button fullWidth>Записаться</Button>
    </CardContent>
  </CourseCardWrapper>
);
